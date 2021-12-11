import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

//creates a hook to use firestore
export const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        //console.log(snap);
        setDocs(
          snap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });

    return () => unsub();
  }, [collection]);

  return { docs };
};
export default useFirestore;
