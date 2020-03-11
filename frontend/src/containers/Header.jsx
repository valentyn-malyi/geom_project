import React, {Component} from "react"
import HeaderItem from "@components/HeaderItem"
import {connect} from "react-redux"
import {select} from "@actions/PolygonSelect"

const mapStateToProps = state => {
    return {
        polygon: state.polygonSelect.polygon,
    }
}

const mapDispatchToProps = {select}


class Header extends Component {


    render() {
        const polugonComponent = poligon => {
            if (poligon !== null) {
                return <HeaderItem key={`Polygon(${poligon.id})`} linkTo={`/polygon/${poligon.id}`} text="Poligon"/>
            }
        }

        return <ul className="nav nav-pills">
            <HeaderItem key="home" linkTo="/" text="Home"/>
            <HeaderItem key="polygons" linkTo="/polygons" text="Polygons"/>
            <HeaderItem key="points" linkTo="/points" text="Points"/>
            <HeaderItem key="polygonselect" linkTo="/polygonselect" text="Select Poligon"/>
            {polugonComponent(this.props.polygon)}
        </ul>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)