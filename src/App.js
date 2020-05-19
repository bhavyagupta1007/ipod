import React from 'react';
/* for using different components */
import Wheel from './Wheel';
import Screen from './Screen';
import Settings from './Settiings';
import Games from './Games';
import CoverFlow from './Coverflow';
import Music from './Music';
import Artists from './Artists';
import Playlists from './Playlists';
import Songs from './Songs';
//comments have been made at all appropriate positions wherever logic is to be defined
//for basic syntax, no components have been made
class App extends React.Component
 {
     constructor()
     {
         super();
         this.state =
         {
            prevSelected:1, //the tab which was previously selected in SCREEN Component
            selected:1, //the tab which is currwntly selected in SCREEN Component
            showScreen:0, //the screen number which shows
            mselected:1, //the tab which is selected on musi screen
            pmselected:1, //the tab which is previously selected on music screen
         }
     }
     //the function that changes screen to be diisplayed based on rotation through wheel
     updateScreen=(h) =>
     {
      var {selected,showScreen,mselected,pmselected}=this.state;
        //if the component being displayed is the screen component
        if(showScreen===0)
        {
          var prevSelected=selected
          //if rotated in one direction(distance from last is positive)
           if(h===3)
           selected=(prevSelected+1)%5;
           //if rotated in another direction(distance from last is negative)
            else if(h===-3)
            {
               selected=(selected-1);
               //to keep the tab selected between 1 to 4
              if(selected<=0)
                selected=4;
            }
            this.setState({
              selected:selected,
               prevSelected:prevSelected,
               showScreen:0,
               mselected:mselected,
               pmselected
           })
        }
        //if the component being dispalyed is the music component
        else if(showScreen===2)
        {
          //mselected should always be between 1 and 3
          var prevmselected=mselected;
          //if rotted in one direction
          if(h===3)
          mselected=(mselected+1)%4;
          //if rorated in another direction
          else if(h===-3)
          {
            mselected=(mselected-1);
              if(mselected<=0)
               mselected=1;
          }
          this.setState({
            selected:selected,
             prevSelected:prevSelected,
             showScreen:2,
             mselected:mselected,
             pmselected:prevmselected
         })
        }
     }
     showMenu=()=>
     {
       //function to be executed when you click on Menu
      var {selected,prevSelected,mselected,pmselected,showScreen}=this.state;
      //if screen being displayed is the first screen that appears on the click  
      //that is we have not gone inside the music menu
      if(showScreen===1 || showScreen===2 || showScreen===3 || showScreen===4)
      {
         this.setState({
          selected:selected,
          prevSelected:prevSelected,
          showScreen:0, //show the screen number zero
          mselected:mselected,
          pmselected
          })
      }
      //if we are inside music tab
      else
      {
        this.setState({
          selected:selected,
          prevSelected:prevSelected,
          showScreen:2, //go back to music screen
          mselected:mselected,
          pmselected
          })
      }
     }
     showInnerScreen=()=>{
       //show the screen of active tab
          var {selected,prevSelected,pmselected,mselected,showScreen}=this.state;
          //if not on music screen
          if(showScreen===0)
          {
               this.setState({
               selected,
               prevSelected,
               showScreen:selected,//show screen of the active tab
               mselected:mselected,
               pmselected:pmselected
              })
          }
          //if on the music screen
          if(showScreen===2)
          {
            this.setState({
              selected,
              prevSelected,
              showScreen:4+mselected,
              mselected:mselected,
              pmselected:pmselected
             })
          }
     }
   render()
   {
        const {showScreen,selected,prevSelected,mselected,pmselected}=this.state;
        return (
          /*Rendering appropriate component with relevant props based on conditional rendering */
        <div className="App">
            { showScreen===0 &&<Screen selected={selected}
                      prevSelected={prevSelected}/>  }
            { showScreen===1 && <CoverFlow/>}   
            { showScreen===2 && <Music mselected={mselected} pmselected={pmselected}/>}
            { showScreen===3 && <Games/>}
            { showScreen===4 && <Settings/>}
            {showScreen===5 && <Songs/>}
            {showScreen===6 && <Artists/>}
            {showScreen===7 && <Playlists/>}
             <Wheel updateScreen={this.updateScreen}
                     showInnerScreen={this.showInnerScreen}
                     showMenu={this.showMenu}/>
            
        </div>
     );
  }
}

export default App;
