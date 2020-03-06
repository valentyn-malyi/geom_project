import React, {Component} from "react"
import {Link} from "react-router-dom"


class PolygonSelectItem extends Component {
    constructor() {
        super()
    }

    render() {
        return <Link to={`polygon/${this.props.id}`}>
            <li className={`list-group-item ${this.props.isActive ? "active" : ""}`}
                onClick={this.props.polygonSelectItemClick}>
                {`Poligon(${this.props.id})`}
            </li>
        </Link>
    }
}

export default PolygonSelectItem
