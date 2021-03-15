import React from 'react'
import './Home.scss'
const Home = () => {
    return (
        <div className="bg-light shadow pb-3">
        <div className="container">
          <br />
          <h1 className="text-primary"> <h1 className="pt-3">
          <b>
            <span className="text-primary">Welcome to Fitness</span>
            <span className="text-secondary">Logger</span>
          </b>
        </h1></h1>
          <br />
          <div className='sub1'>
            Fitness Logger is a workout tracker with a focus on simplicity and clean design.
          </div>
          <div className='sub2'>
            With the help of fitness logger you can log your individual workouts as well as work plan when you hit the gym!
          </div>
        </div>
      </div>
    )
}

export default Home
