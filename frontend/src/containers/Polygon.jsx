import React, {Component, Fragment} from "react"
import {connect} from "react-redux"

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = {}

class Polygon extends Component {
    render() {
        return <Fragment>
            {this.props.match.params.id}
        </Fragment>
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Polygon)
export default Polygon