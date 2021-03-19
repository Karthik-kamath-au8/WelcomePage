import React from "react";
import Ocard from "./card";
import Task from "./task";


export class Display extends React.Component {

 render () {
    let phoneNumber = JSON.parse(localStorage.getItem('document'));

   return (
     <div className="list-group">
         
           {(!phoneNumber.phoneNumber) ?
           <Task/> :  (
         <div className="cona">
                <h1>man </h1>
                <div className="matter">
                <h1>matters</h1>
                </div>
                <h3>WELOCME</h3>
           
            <div className="cont">
                <Ocard/>
            </div>
            <div>
                <br/>   
                <div>
                <h4 style={{paddingRight:"60px"}}>Where will i get the gift card?</h4>
                <div style={{paddingLeft:'60px',display:'flex', justifyContent:"center"}}>
                <img style={{width:'35px', height:'35px'}} src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Whatsapp2_colored_svg-256.png' alt=""/>
                <p>You will receive it on Whatsapp/SMS on your Mobile</p>
                </div>

                </div>
                <br/>
                <div >
                <h4 style={{paddingRight:"60px"}}>Where will i get the gift card?</h4>
                <div style={{paddingLeft:'60px',display:'flex', justifyContent:"center"}}>
                <img style={{width:'35px', height:'35px'}} src='https://cdn3.iconfinder.com/data/icons/object-emoji/50/Mail-256.png' alt=""/>
                <p>You will receive it on Whatsapp/SMS on your Mobile</p>
                </div>
                </div>
                <br/>
                <div>
                    <h4 style={{paddingRight:"60px"}}>Where will i get the gift card?</h4>
                    <div style={{paddingLeft:'60px',display:'flex', justifyContent:"center"}}>
                    <img style={{width:'35px', height:'35px'}} src='https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color/700/010_x-256.png' alt=""/>
                    <p>You will receive it on Whatsapp/SMS on your Mobile</p>
                    </div>

                </div>
                <br/>
                
            </div>
            </div>)}
            
    </div>
  );
 }
}