import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = 
    [
        'image/jpeg',
        'image/png'
    ]

    const changeHandler = (e) => {
        // console.log('event occur')
        let fileSelected = e.target.files[0];
        // console.log(fileSelected)

        if(fileSelected && types.includes(fileSelected.type)){
            setFile(fileSelected);
            setError('');
        }else{
            setFile(null);
            setError('Please select an image (png or jpeg)')
        }

    }

    return (
        <form>
            <label>
              <input type='file' onChange={changeHandler} />
              <span>+</span>
            </label>
            
            <div className='output'>
                {error && <div className='error'>{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm;

