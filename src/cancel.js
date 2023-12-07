import React from 'react'
import './Project/Styles/sucess.css'
const Cancel = () => {
  return (
    <>
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',marginTop:'160px'}}>
        <div className="circle1">
      <div className="cross">&#10060;</div>
    </div>
        <div style={{fontSize:'30pt',marginLeft:'20px'}}>
       Transaction Failed!!!</div>
     
    </div>
     </>
  )
}

export default Cancel