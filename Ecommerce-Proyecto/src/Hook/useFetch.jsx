import { useEffect, useState } from 'react';
import { db } from '../config/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

 const useFetch = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const items = querySnapshot.docs.map((doc) => ({
          id: `${collectionName}-${doc.id}`,  
          ...doc.data(),
        }));
        setData(items);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName]);

  return { data, loading, error };
};

export default useFetch;


