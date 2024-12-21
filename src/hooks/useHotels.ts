import { useState, useEffect } from "react";
import { getHotels } from "../config/api";
import { Hotel } from "../types/hotels";

export const useHotels = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getHotels()
      .then((res) => {
        setTimeout(() => {
          setHotels(res?.data || []);
        }, 2000);
        setError(null);
      })
      .catch(() => {
        setError("Failed to fetch hotels.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { hotels, loading, error };
};
