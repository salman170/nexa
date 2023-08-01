import React from 'react';
import jimnyVideo from '../../assets/JIM.webm';
import Slider from './Slider';
// import JimnyBanner from '../../assets/Jimny_HeaderBanner_1500x634 webp.webp';

const Homepage = () => {
  return (
    <>
      <div>
        <div className=' top-0 left-0 w-full h-screen '>
          <video
            className='w-full h-full object-cover hidden lg:block'
            preload='metadata'
            loop
            autoPlay
            playsInline
            muted
          >
            <source src={jimnyVideo} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <img
            src='https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Jimny/6182/1686117643111/front-left-side-47.jpg?impolicy=resize&imwidth=420'
            alt=''
            srcset=''
            className='object-cover w-full h-full lg:hidden'
          />
        </div>
        
<Slider/>
       
      </div>
    </>
  );
};

export default Homepage;
