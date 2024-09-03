import React from 'react'
import paris from '../../assets/paris.jpg'

import traveler1 from '../../assets/user.png'
import dubai from '../../assets/dubai.jpeg'
import NewYork from '../../assets/newyork.jpeg'
import london from '../../assets/london.jpeg'

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: 'israTech',
    socialLink: '@isratech8'
  },

  {
    id: 2,
    destinationImage: NewYork,
    travelerImage: traveler1,
    travelerName: 'Wilson Lindsey',
    socialLink: '@wilsonlindsey'
  },

  {
    id: 3,
    destinationImage: dubai,
    travelerImage: traveler1,
    travelerName: 'Nicole Web',
    socialLink: '@nocoleweb'
  },

  {
    id: 4,
    destinationImage: london,
    travelerImage: traveler1,
    travelerName: 'Naresh Lamer',
    socialLink: '@nareshlamer'
  }
]

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this month!</h2>

        <div className="travelersContainer grid">
          {
            travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink})=>{
              return(
                <div key={id} className="singleTraveler">
                  <img src={destinationImage} className="destinationImage" />
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className='travelerImage' />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Travelers