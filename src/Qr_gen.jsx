import React, { useState } from 'react'
import './Qr_gen.css'
const Qr_gen = () => {
      const [img,setimg]=useState();
      const [qrdata,setqrdata]=useState();
      const [qrsize,setqrsize]=useState(150);

      async function generate(){
        try{
          const data = encodeURIComponent(qrdata);
          const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${data}`;
          setimg(url);
        }catch(error){
            console.log("Error is generating"+error);
        }
      }
      function download(){
           fetch(img)
            .then((response)=>response.blob())
            .then((blob)=>{
              const link=document.createElement("a");
              link.href=URL.createObjectURL(blob);
              link.download="qrcode.png";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            })
            .catch((error)=>{
              console.error("Error occur downloading QR",error);
            });
          }
  return (
      <div>
            <div className="content">
            <h2>QR GENERATOR</h2>
            <img className="image" src={img} onChange={(e)=>setimg(e.target.value)} />
            <label htmlFor="data" className='input-label'>Data for QR code : </label>
            <input type="text" id='data' value={qrdata} placeholder='Enter data..' onChange={(e)=>setqrdata(e.target.value)}/>
            <label htmlFor="size" className='input-label'>QR size : </label>
            <input type="number" id='size' value={qrsize} placeholder="Enter size bro..." onChange={(e)=> setqrsize(e.target.value)}/>
            <div className='btns'>
            <button className='generate' onClick={generate}>Generate</button>
            <button className='download' onClick={()=>download("")}>Download</button>
            </div>
            <h3> Designed by<a href='https://www.linkedin.com/in/balaraman-n-281763260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '> Bala. </a></h3>
            </div>
      </div>
            
    
  )
}

export default Qr_gen
