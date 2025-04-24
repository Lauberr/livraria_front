import React from 'react';
import '../css/global.css';  
import '../css/loading.css'
import logo from '../assets/utfprLogo.png';


const Loading = () => {
    return (    
        <div className='loadingBody'>
            <img src={logo} alt="Logo da UTFPR" />
        </div>
    )}

export default Loading;
