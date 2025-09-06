import { child, push, ref, set } from "firebase/database";
import { useState } from "react";
import { db } from "@/services/firebase";

function useCreateValue<T = unknown>() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{ key: string | null; value: T } | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  const pushValue = async (path: string, value: T) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const dbPath = child(ref(db), path);
      const dbPush = await push(dbPath, value);
      setData({ key: dbPush.key, value });
      setSuccess(true);
    } catch (pushError) {
      setError((pushError as Error).message);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const setValue = async (path: string, value: T) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const dbPath = child(ref(db), path);
      await set(dbPath, value);
      setData({ key: path, value });
      setSuccess(true);
    } catch (setErr) {
      setError((setErr as Error).message);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    pushValue,
    setValue,
    error,
    success,
    loading,
    data,
  };
}

export default useCreateValue;
