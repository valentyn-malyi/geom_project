import React, {Component, Fragment} from "react"
import HeaderItem from "@components/HeaderItem"

class Header extends Component {
    render() {
        return <ul className="nav nav-pills">
            <HeaderItem key="home" linkTo="/" text="Home"/>
            <HeaderItem key="polygons" linkTo="polygons" text="Polygons"/>
            <HeaderItem key="points" linkTo="points" text="Points"/>
        </ul>
    }
}

export default Header