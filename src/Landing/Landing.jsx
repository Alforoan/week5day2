import React from 'react'
import Navigation from '../Navigation/Navigation'

const Landing = () => {
  return (
    <>
        <div style={{display:'flex', justifyContent:'center', flexDirection: 'column', alignItems:'center', minHeight:'100vh'}}>
            <h1>Favorite Learning Books / Websites</h1>
            <p>Click below for some of the most helpful books and websites to learn programming! Yay! So excited!</p>
            <Navigation />
        </div>
    </>
  )
}

export default Landing