import { useEffect, useState } from "react";
import { User } from "../types";

const CustomerDetails = ({ selectedUser }: { selectedUser: User | null }) => {
  console.log("selected user in company", selectedUser);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchImages = async () => {
    const urls = Array.from(
      { length: 9 },
      () =>
        `https://picsum.photos/800/600?random=${Math.floor(
          Math.random() * 1000
        )}`
    );

    setImageUrls(urls);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchImages();
    const interval = setInterval(fetchImages, 10000);
    return () => clearInterval(interval);
  }, [selectedUser]);

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
        {isLoading ? (
          <div className="flex justify-center items-center mt-5">
            loading.....
          </div>
        ) : (
          <div className="image-grid flex flex-wrap gap-8 justify-center items-center mt-5">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt="Random"
                className="h-72 w-80 rounded-md shadow-md hover:scale-105 transition-all cursor-pointer"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDetails;
