import { Route, Switch} from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../components/auth/Login';

const Routes = () =>{
    return (
        
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
    );
}

export default Routes;
