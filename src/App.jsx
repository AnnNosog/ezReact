import React from 'react';
import {Switch, Route} from "react-router-dom";

import FoodList from "./components/Food/FoodList";
import Layout from "./shared/Layout";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path='/' component={FoodList}/>
            </Switch>
        </Layout>
    );
}

export default App;