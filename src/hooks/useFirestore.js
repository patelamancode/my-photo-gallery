import {useState, useEffect} from 'react';
import {projectFirestore} from '../firebase/Config';

const useFirestore = (collection)=>{
    const [docs ,setDocs] = useState([]);

    useEffect(()=>{
        const unSub = projectFirestore.collection(collection)
        // orederBy is use to sort documents in descending oreder i.e latest shows up
           .orderBy('createdAt', 'desc')
           .onSnapshot((snap)=>{
              let documents =[];
              snap.forEach(doc => {
                  documents.push({...doc.data(), id: doc.id});
              });
              setDocs(documents);
            });
        return () => unSub();    


    }, [collection])

    return{
        docs
    };
}

export default useFirestore;