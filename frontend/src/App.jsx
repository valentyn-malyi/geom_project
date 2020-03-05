import React, {Component, Fragment} from "react"
import {HashRouter, Switch, Route} from "react-router-dom"
import Points from "@containers/Points"
import Polygons from "@containers/Polygons"
import Header from "@containers/Header"
import "@assets/bootstrap.min.css"
import {Provider} from "react-redux"
import store from "@src/store"
import Home from "@containers/Home";


class App extends Component {
    render() {
        return <Provider store={store}>
            <HashRouter>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/polygons">
                        <Polygons/>
                    </Route>
                    <Route path="/points">
                        <Points/>
                    </Route>
                </Switch>
            </HashRouter>
        </Provider>
    }
}

export default App