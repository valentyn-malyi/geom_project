import React, {Component, Fragment} from "react"
import {Link} from "react-router-dom"


class HeaderItem extends Component {
    render() {
        return <Link to={this.props.linkTo}>
            <li className="nav-item">
                <p className="nav-link active">{this.props.text}</p>
            </li>
        </Link>
    }
}

export default HeaderItem