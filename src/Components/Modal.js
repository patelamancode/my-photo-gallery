import React from 'react'

const Modal = (selectedImg, setSelectedImg) => {
    // this handler is use to reset the page
    const handleClick = (e)=>{
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        } 
        console.log()
    }
    return (
        <div className='backdrop' onClick={handleClick}>
            <img src={selectedImg} alt="enlarged pic"/>
        </div>
    )
}
export default Modal;