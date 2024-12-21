import { useState, useEffect } from "react";
import { getHotels } from "../config/api";
import { Hotel } from "../types/hotels";

export const useHotels = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getHotels()
      .then((res) => {
        setHotels(res?.data || []);
      })
      .catch(() => {
        setError("Failed to fetch hotels.");
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);

  return { hotels, loading, error };
};
