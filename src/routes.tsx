import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { MapPage } from './pages/MapPage';

export function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/map" exact component={MapPage}/>
            </Switch>
        </BrowserRouter>
    );
}