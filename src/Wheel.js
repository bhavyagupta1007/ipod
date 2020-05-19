import React from 'react';
//to be able to use font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFastForward,faPause,faFastBackward } from '@fortawesome/free-solid-svg-icons'
//to be able to use zingtouch
import ZingTouch from 'zingtouch';

class Wheel extends React.Component
 {
  componentDidMount()
  {
    //once the component has been mounted
    var containerElements = document.getElementById("hello");

    var activeRegion = ZingTouch.Region(containerElements,undefined,false);

     var childElement = document.getElementById('menu');
   
     
     //binding zingtouch to active region where it will detect rotate events
     activeRegion.bind(childElement, 'rotate', (event)=>
     {
               var d=event.detail.distanceFromLast;
               const {updateScreen}=this.props;
              //if rotate din one direction
               if(d>1)
               {
                 //call the function to change the active tab
                updateScreen(3);
               }
               //if rotated in another direction
               else if(d<-1)
               {
                 updateScreen(-3);
               }
               
      }
    );
  }
   render()
   {
       const {showInnerScreen,showMenu}=this.props;

        return (
       
            <div className="container" id="container">
            <div className="toggle" id="toggle" onClick={showInnerScreen} >
            
             </div>
             
              <div className="hello" id="hello">
                     <div className="menu" id="menu" >
                         <p className="tab1" id="tab1" draggable="false" onClick={showMenu}> Menu</p>
                         <a href="#abc"  className="tab2" id="tab2"  draggable="false"><FontAwesomeIcon icon={ faFastForward } /></a>
                         <a href="#abc" className="tab3" id="tab3"  draggable="false"><FontAwesomeIcon icon={ faPause }/></a>
                         <a href="#abc"className="tab4" id="tab4"  draggable="false"><FontAwesomeIcon icon={ faFastBackward  }/></a>
                       
                     </div>
            
              </div>   
              </div>   
     );
  }
}

export default Wheel;
