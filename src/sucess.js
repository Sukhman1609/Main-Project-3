import React from 'react'
import './Project/Styles/sucess.css'
// import Footer from './Project/Footer/Footer'
const Sucess = () => {
  return (
    <>
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',marginTop:'160px'}}>
        <div className="circle">
      <div className="tick">&#10003;</div>
    </div>
        <div style={{fontSize:'30pt',marginLeft:'20px'}}>
       Transaction Sucessfull!!!</div>
     
    </div>
     </>
  )
}

export default Sucess
