import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

//create a custom react hook to use the storage
export const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //if there is no file return
    if (!file) return;

    //create a storage ref
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");
    //create a new task
    const task = storageRef.put(file);
    //update the progress
    task.on(
      "state_changed",
      (snap) => {
        //get the percentage
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      () => {
        //get the download url
        task.snapshot.ref.getDownloadURL().then((url) => {
          const createdAt = timestamp();
          collectionRef.add({ url, createdAt });
          setUrl(url);
        });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
