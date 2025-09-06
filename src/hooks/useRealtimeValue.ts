import { ref, onValue, off } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "@/services/firebase";

function useRealtimeValue<T = unknown>(path: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const dbRef = ref(db, path);

    onValue(
      dbRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val() as T);
          setIsEmpty(false);
        } else {
          setData(null);
          setIsEmpty(true);
        }
        setIsLoading(false);
      },
      (err) => {
        setError(err.message);
        setIsLoading(false);
      }
    );

    return () => {
      off(dbRef);
    };
  }, [path]);

  return { data, isLoading, error, isEmpty };
}

export default useRealtimeValue;
