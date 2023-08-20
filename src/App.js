import logo from "./logo.svg";
import "./App.css";
import React, { Component } from 'react'
// import styles from "flowy/engine/index.css";
import flowy from "flowy";
import Arrow from "./assets/arrow.svg";
import Closeleft from "./assets/closeleft.svg";
import Search from "./assets/search.svg";
import Grabme from "./assets/grabme.svg"; 
import Eye from "./assets/eye.svg";
class App extends Component {
  state = { 
    blocks : [
      {
        'id' : 1,
        'type' : 1,
        'title' : 'New Visitor',
        'desc' : 'Triggers when somebody visits a specified page',
        "img": 'src/assets/eye.svg'
      },
      {
        'id' : 2,
        'type' : 1,
        'title' : 'Action is performed',
        'desc' : 'Triggers when somebody performs a specified action',
        "img": 'src/assets/action.svg'
      },
      {
        'id' : 3,
        'type' : 1,
        'title' : 'Time has passed',
        'desc' : 'Triggers after a specified amount of time',
        "img": 'src/assets/time.svg'
      },
      {
        'id' : 4,
        'type' : 1,
        'title' : 'Error prompt',
        'desc' : 'Triggers when a specified error happens',
        "img": 'src/assets/error.svg'
      },
    ]
   } 

  async selectBlock (block) {
    console.log('event' , JSON.stringify(block));
  } 
  render() { 
    const {blocks} = this.state;
    return (
      <div>
        <div id="navigation">
          <div id="leftside">
            <div id="details">
              <div id="back">
                <img src={Arrow} />
              </div>
              <div id="names">
                <p id="title">Your automation pipeline</p>
                <p id="subtitle">Marketing automation</p>
              </div>
            </div>
          </div>
          <div id="centerswitch">
            <div id="leftswitch">Diagram view</div>
            <div id="rightswitch">Code editor</div>
          </div>
          <div id="buttonsright">
            <div id="discard">Discard</div>
            <div id="publish">Publish to site</div>
          </div>
        </div>
        <div id="leftcard">
          <div id="closecard">
            <img src={Closeleft} />
          </div>
          <p id="header">Blocks</p>
          <div id="search">
            <img src={Search} />
            <input type="text" placeholder="Search blocks" />
          </div>
          <div id="subnav">
            <div id="triggers" class="navactive">
              Triggers
            </div>
            <div id="actions" class="navdisabled">
              Actions
            </div>
            <div id="loggers" class="navdisabled">
              Loggers
            </div>
          </div>
          <div id="blocklist">
          {blocks.map((block, index) => (
            <div 
            class="blockelem create-flowy noselect"
            key={index}
            onClick={() => this.selectBlock(block)}                
            >
                <input type="hidden" 
                name='blockelemtype' 
                class="blockelemtype"
                value={block.type}
                />
                <div class="grabme">
                    <img src={Grabme} />
                </div>
                <div class="blockin">
                    <div class="blockico">
                        <span></span>
                        <img src={Eye} />
                        {/* <img src={block.img} /> */}
                    </div>
                    <div class="blocktext">
                        <p class="blocktitle">{block.title}</p>
                        <p class="blockdesc">{block.desc}</p>
                    </div>
                </div>
            </div>
            ))}
            </div>

          {/* <div id="blocklist">
            {blocks.map((block, index) => (
              <div
                class="blockelem create-flowy noselect"
                key={index}
                onClick={() => this.selectBlock(block)}
              >
                <input
                  type="hidden"
                  name="blockelemtype"
                  class="blockelemtype"
                  value={block.type}
                />
                <div class="grabme">
                  <img src={Grabme} />
                </div>
                <div class="blockin">
                  <div class="blockico">
                    <span></span>
                    {block.type === 1 ? <img src={Eye} /> : null}
                  </div>
                  <div class="blocktext">
                    {block.type === 1 ? (

                    <div class="blocktext">
                    <p class="blocktitle">{block.title}</p>
                      <p class="blocktitle">{block.desc}</p>
                    </div> 
                    ) : null}
                    {block.type === 2 ? (
                      <p class="blocktitle">Action is performed</p>
                    ) : null}
                    {block.type === 3 ? (
                      <p class="blocktitle">Time has passed</p>
                    ) : null}
                    {block.type === 4 ? (
                      <p class="blocktitle">Error prompt</p>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div> */}


        </div>
        <div id="propwrap">
          <div id="close">
            <img src="assets/close.svg" />
          </div>
          <p id="header2">Properties</p>
          <div id="proplist">
            <p class="inputlabel">Select database</p>
            <div class="dropme">
              Database 1 <img src="assets/dropdown.svg" />
            </div>
          </div>
          <div id="divisionthing"></div>
          <div id="removeblock">Delete blocks</div>
        </div>
        <div id="canvas"></div>
      </div>
    );
  }
}
 
export default App; 
