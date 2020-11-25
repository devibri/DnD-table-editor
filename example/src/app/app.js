import React from 'react';
import {render} from 'react-dom';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectTapEventPlugin from 'react-tap-event-plugin';
import CharacterEditor from './CharacterEditor'; // Our custom react component
import LocationEditor from './LocationEditor';
import InfoEditor from './InfoEditor';
import Navigation from './Navigation';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
//render(<LocationEditor />, document.getElementById('app'));


 const rootElement = document.getElementById("app");
    ReactDOM.render(
    	<BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={CharacterEditor} exact/>
             <Route path="/LocationEditor" component={LocationEditor}/>
             <Route path="/InfoEditor" component={InfoEditor}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>,
      rootElement
    );