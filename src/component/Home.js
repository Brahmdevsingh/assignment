import React from 'react';
import homepageImage1 from '../images/bg.jpg';

 function Home(){
     return <div>
         
         <font face="Comic sans MS" size="20px" color="white">
           <h2>WELCOME TO MY PAGE</h2>  <br/>
           </font>
           <p><font face="courier" size = "+2" color = "white">
           "If you thik Math's is hard,try web design".
         </font>
      </p>

         <img src={homepageImage1}/>        
     </div>
   
   
    
 }
 export default Home;