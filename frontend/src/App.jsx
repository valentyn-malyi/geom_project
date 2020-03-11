import React, {Component} from "react"
import {HashRouter, Switch, Route} from "react-router-dom"
import Header from "@containers/Header"
import Polygon from "@containers/Polygon"
import "@assets/bootstrap.min.css"
import {Provider} from "react-redux"
import store from "@src/store"
import Home from "@containers/Home"
import PolygonSelect from "@containers/PolygonSelect"


class App extends Component {
    render() {
        return <Provider store={store}>
            <HashRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" component={() => <Home showPolygons={true} showPoints={true}/>}/>
                    <Route path="/polygons" component={() => <Home showPolygons={true} showPoints={false}/>}/>
                    <Route path="/points" component={() => <Home showPolygons={false} showPoints={true}/>}/>
                    <Route path="/polygonselect" component={PolygonSelect}/>
                    <Route path="/polygon/:id" component={Polygon}/>
                </Switch>
            </HashRouter>
        </Provider>
    }
}

export default App