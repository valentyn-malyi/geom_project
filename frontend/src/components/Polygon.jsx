import React, {Component, Fragment} from "react"

class Polygon extends Component {
    render() {
        const style = {fillOpacity: 0, stroke: "purple", strokeWidth: 1}
        return <Fragment>
            <polygon points={this.props.coordinates} style={style}/>
        </Fragment>
    }
}

export default Polygon