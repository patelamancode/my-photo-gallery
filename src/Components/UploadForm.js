import React, { useState } from 'react';

const UploadForm = () => {

    const [file, setFile] = useState(null);


    const changeHandler = (e) => {
        // console.log('event occur')
        let fileSelected = e.target.files;
        // console.log(fileSelected)

        

    }

    return (
        <form>
            <input type='file' onChange={changeHandler} />
        </form>
    )
}

export default UploadForm;
