import React from 'react';
import useFirestore from '../hooks/useFirestore';
import {motion} from "framer-motion";

const ImageGrid = () => {
    const {docs} = useFirestore('images');
    console.log(docs);


    return (
        <div className = "img-grid">
            { docs && docs.map(doc =>(
                <motion.div
                   className="img-wrap" key={doc.id}
                   layout
                   whileHover={{ opacity:1.5}}
                  >
                  <img src={doc.url} alt="uploading images"/>
                </motion.div>
               
                
            ))}
        </div>
    )
}

export default ImageGrid;
