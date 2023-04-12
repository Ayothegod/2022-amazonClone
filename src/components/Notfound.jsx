import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent: 'center', height:'100vh'}}>
        <div style={{ textAlign:'center' }} >
            <h1>Ooops you just  came to an unknown Location👀🤣😂</h1>
            <p>Boss, you suppose return home</p>
            <Link to='/'><button>Anyways, Go back home 👈</button></Link>
        </div>
    </div>
  )
}

export default Notfound