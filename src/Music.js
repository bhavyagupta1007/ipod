import React from 'react';


class Music extends React.Component
 {
  componentDidMount()
  {
     //once the music component has been rendered in the start
     const {mselected}=this.props;
     //based on whichever tab is sselected, add active class to it
     if(mselected===1)
     {
     document.getElementById("mlist1").classList.add("active");
     }
     else if(mselected===2)
     {
     document.getElementById("mlist2").classList.add("active");
     }
     else if(mselected===3)
     {
     document.getElementById("mlist3").classList.add("active");
     }
  }
  componentDidUpdate()
  {
   const {pmselected,mselected}=this.props;
   //every time the component updates, remove the active class from prevously selected tab and move on to the new selected tab
   if(pmselected===1)
   document.getElementById("mlist1").classList.remove("active");
   else if(pmselected===2)
   document.getElementById("mlist2").classList.remove("active");
   else if(pmselected===3)
   document.getElementById("mlist3").classList.remove("active");
   if(mselected===1)
   document.getElementById("mlist1").classList.add("active");
   else if(mselected===2)
   document.getElementById("mlist2").classList.add("active");
   else if(mselected===3)
   document.getElementById("mlist3").classList.add("active");
   
  }
 
  
   render()
   {
        return (
          <div className="outerbox">
          <div className="msidebar">
                <ul>
                <header className="head">Music</header>
                 <li className="indlist" id="mlist1">
                      <a href="#abc"className="indtab">All Songs</a>
                  </li>
                  <li className="indlist" id="mlist2">
                    <a href="#abc" className="indtab">Artists</a>
                 </li>
                  <li className="indlist" id="mlist3">
                     <a href="#abc" className="indtab">Playlists</a>
                  </li>
                 </ul>
            </div>  
     </div>    
     );
  }
}


export default Music;