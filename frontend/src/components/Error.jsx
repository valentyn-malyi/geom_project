import React, {Component, Fragment} from "react"
import errorImg from "@assets/error.gif"

class Error extends Component {
    render() {
        return <Fragment>
            <img src={errorImg} alt="Error Img"/>
        </Fragment>
    }
}

export default Error