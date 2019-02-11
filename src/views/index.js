import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Views
import Home from './home.js'; 
import Template from './template.js';

export function ContentSwitch(props) {
    return (
        <section id="Content">
            <Switch>
                <Route path="/template" component={Template} /> 
                <Route iexact path="/" component={Home} />
            </Switch>
        </section>
    );
}