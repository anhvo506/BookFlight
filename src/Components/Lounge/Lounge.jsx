import React from 'react'
import imageGrid from '../../assets/anh2.jpg'
const Lounge = () => {
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">

        <div className="imgDiv">
          <img src={imageGrid} />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
        </div>

        <div className="grids grid">

          <div className="singleGrid">
            <span className='gridTitle'>
              Help through the airpot
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket
              to one of your favorite destinations.
            </p>
          </div>

          <div className="singleGrid">
            <span className='gridTitle'>
              Help through the airpot
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket
              to one of your favorite destinations.
            </p>
          </div>

          <div className="singleGrid">
            <span className='gridTitle'>
              Help through the airpot
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket
              to one of your favorite destinations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lounge