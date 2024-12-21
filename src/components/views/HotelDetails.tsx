import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useHotels } from "../../hooks/useHotels";
import RatingStars from "../Ratings";

const HotelDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { hotels } = useHotels();
  const [imageLoading, setImageLoading] = useState(true);

  const hotel = hotels?.find((h) => h?.id === parseInt(id || "0"));
  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <button
        className="mb-4 text-blue-500 hover:underline"
        onClick={() => navigate("/")}
      >
        ← Back to Hotel List
      </button>

      <div className="rounded overflow-hidden shadow-lg">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
          </div>
        )}
        <img
          src={hotel?.imageUrl}
          alt={hotel?.name}
          className={`w-full h-80  object-cover ${
            imageLoading ? "hidden" : "block"
          }`}
          onLoad={handleImageLoad}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{hotel?.name}</div>
          <p className="text-gray-700 text-base">
            {hotel?.location} <br />
            <span className="font-semibold">Dates:</span>{" "}
            {hotel?.datesOfTravel.join(" - ")} <br />
            <span className="font-semibold">Board Basis:</span>{" "}
            {hotel?.boardBasis}
          </p>
        </div>
        <div className="px-6 py-2">
          <span className="font-semibold">Rating: </span>
          {RatingStars(hotel?.rating || 0)}
        </div>
        <div className="px-6 pb-4">
          <div className="font-semibold">Rooms:</div>
          <ul>
            {hotel?.rooms?.map((room, index) => (
              <li key={index}>
                {room?.roomType} ({room?.amount} available)
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
