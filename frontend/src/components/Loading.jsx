import React, {Component, Fragment} from "react"
import LoadingImg from "@assets/loading.gif"

class Loading extends Component {
    render() {
        return <Fragment>
            <img src={LoadingImg} alt="Loading Img"/>
        </Fragment>
    }
}

export default Loading