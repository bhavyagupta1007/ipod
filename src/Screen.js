import React from 'react';
//the below two are imported to be able to use Font Awesome icons in react
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMusic } from '@fortawesome/free-solid-svg-icons'

class Screen extends React.Component
 {
  componentDidMount()
  { //once the screen component has been rendered for te very first time
     const {selected}=this.props;
     //based on whichever tab is selcted add active class to it
     if(selected===1)
     {
     document.getElementById("list1").classList.add("active");
     }
     else if(selected===2)
     {
     document.getElementById("list2").classList.add("active");
     }
     else if(selected===3)
     {
     document.getElementById("list3").classList.add("active");
     }
     else if(selected===4)
     {
     document.getElementById("list4").classList.add("active");
     }
  }
  componentDidUpdate()
  {
     //every time the component updates, remove active class from previously selected tab and add it to the nw selected tab
   const {prevSelected,selected}=this.props;
   if(prevSelected===1)
   document.getElementById("list1").classList.remove("active");
   else if(prevSelected===2)
   document.getElementById("list2").classList.remove("active");
   else if(prevSelected===3)
   document.getElementById("list3").classList.remove("active");
   else if(prevSelected===4)
   document.getElementById("list4").classList.remove("active");
   if(selected===1)
   document.getElementById("list1").classList.add("active");
   else if(selected===2)
   document.getElementById("list2").classList.add("active");
   else if(selected===3)
   document.getElementById("list3").classList.add("active");
   else if(selected===4)
   document.getElementById("list4").classList.add("active");
  }
   render()
   {
        return (
            <div className="outerbox">
         <div className="sidebar">
               <header className="head">
               <FontAwesomeIcon icon={faMusic } />
                      iPod
                  </header>
               <ul>
                <li className="indlist" id="list1">
                     <a href="#abc" className="indtab">CoverFlow</a>
                 </li>
                 <li className="indlist" id="list2">
                   <a  href="#abc"className="indtab">Music</a>
                </li>
                 <li className="indlist" id="list3">
                    <a href="#abc"className="indtab">Games</a>
                 </li>
                  <li className="indlist" id="list4">
                     <a href="#abc" className="indtab">Settings</a>
                  </li>
                </ul>
           </div>  
    </div>    
     );
  }
}

export default Screen;