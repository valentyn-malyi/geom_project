import React, {Component} from "react"
import Error from "@components/Error";
import Loading from "@components/Loading";

class ErrorLoadingBoundary extends Component {

    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }

    render() {
        if (!this.props.isLoading) {
            if (this.props.error)
                return <Error data={this.props.error}/>
            else
                return this.props.children
        } else
            return <Loading/>
    }
}

export default ErrorLoadingBoundary
