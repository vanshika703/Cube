import { useEffect, useState } from "react";
import { User } from "../types";

const CustomerDetails = ({ selectedUser }: { selectedUser: User | null }) => {
  console.log("selected user in company", selectedUser);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?count=9&client_id=${"FPPcXvbV2TlzX9ZuRhuN7qjJysV9hz8zBY1W6RkOllk"}`
      );
      const data = await response.json();
      setImageUrls(data.map((image: any) => image.urls.small));
    }
    fetchImages();
  }, []);

  return (
    <div className="w-4/5 bg-blue-100 h-[95vh] overflow-scroll">
      <div className="flex flex-col justify-center items-center gap-4 p-5 text-center">
        <img
          src={selectedUser?.picture?.medium}
          alt={selectedUser?.name?.first}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <p className="text-sm font-semibold text-gray-800">
            {selectedUser?.name?.title} {selectedUser?.name?.first}{" "}
            {selectedUser?.name?.last}
          </p>
          <p className="text-sm text-gray-500">{selectedUser?.email}</p>
          <div>
            <p className="text-sm text-gray-800">
              {selectedUser?.location?.street?.number}{" "}
              {selectedUser?.location?.street?.name},{" "}
              {selectedUser?.location?.city}, {selectedUser?.location?.state},{" "}
              {selectedUser?.location?.country}{" "}
              {selectedUser?.location?.postcode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
