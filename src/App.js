import React,{ Component } from 'react';
import Palette from './Palette'
import {Route,Switch} from 'react-router-dom'
import PaletteList from './PaletteList'
import seedColors from './seedColors'
import SingleColorPalette from './SingleColorPalette'
import { generatePalette } from './colorsHelper';

class App extends Component{
  findPalette(id){
    let palette =  seedColors.find(palette => palette.id === id)
    return palette;
  }
  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(routeProps)=> <PaletteList palettes={seedColors} {...routeProps}/>}/>
          <Route exact path="/palette/:id" 
            render= {(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />}/>
          <Route exact path="/palette/:paletteId/:colorId" render={(routeProps) => <SingleColorPalette colorId={routeProps.match.params.colorId} palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} />} />
        </Switch>
        {/* <Palette palette={generatePalette(seedColors[4])} /> */}
      </div>
    );
  }
}
export default App;
