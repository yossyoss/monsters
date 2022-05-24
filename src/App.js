
import './App.css'

import { Component } from 'react';

class App extends Component {
  state = {
    monsters : [
      {
        name: 'yoss',
        id: 123213
      },
      {
        name: 'ell',
        id: 444
    },
      {
        name: 'bell',
        id: 555
      }
    ]
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
         <div>
         {this.state.monsters.map(mon => {
         return <h1 key={mon.id}>{mon.name}</h1>
         })}
           </div>
        </header>
      </div>
    )
  }
}

export default App;
