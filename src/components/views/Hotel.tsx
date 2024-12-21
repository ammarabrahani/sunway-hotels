import React from "react";
import { useHotels } from "../../hooks/useHotels";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import RatingStars from "../Ratings";

const Hotel = () => {
  const { hotels, loading, error } = useHotels();

  const navigate = useNavigate();

  return (
    <div className="px-20 py-5">
      <div className="py-3">
        <h1 className="font-semibold">Deals for the weekend</h1>
        <p className="text-sm">Save on stays for 20 December - 22 December</p>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {hotels?.map((hotel) => (
            <div
              className="rounded overflow-hidden shadow-lg cursor-pointer hover:shadow-lg transition-all"
              key={hotel?.id}
              onClick={() => navigate(`/hotels/${hotel?.id}`)}
            >
              <img
                className="w-full h-[250px]"
                src={hotel.imageUrl}
                alt={`${hotel.name}`}
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
          ))}
        </div>
      )}
    </div>
  );
};

export default Hotel;
