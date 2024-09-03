import React from 'react'

import video from '../../assets/videoFly.mp4'
import aeropolane from '../../assets/flight.png'
const Home = () => {
  return (
    <div className="home flex container">

      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted className='video'></video>
        </div>

        <img src={aeropolane} className='plane' />
      </div>
    </div>
  )
}

export default Home