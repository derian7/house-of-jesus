import React from 'react'
import './styles/HomeStatBanner.css'
import HomeBannerStats from '../data/homebannerstats.json'

const HomeStatBanner = () => {
  return (
    <>
      <div id='home-stat-banner'>
        <div className='container' id='home-stat-banner-container'>
          {HomeBannerStats.map((stat, index) => {
            return(
              <div className='banner-stat' key={index}>
                <img src={require("../img/" + stat.icon)} className="banner-stat-icon"/>
                <div>
                  <h4>{stat.number}</h4>
                  <p>{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default HomeStatBanner