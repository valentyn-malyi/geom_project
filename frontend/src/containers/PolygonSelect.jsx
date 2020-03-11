import React, {Component} from "react"
import {connect} from "react-redux"
import {select} from "@actions/PolygonSelect"
import PolygonSelectItem from "@components/PolygonSelectItem"
import {get} from "@actions/Polygons"
import ErrorLoadingBoundary from "@components/ErrorLoadingBoundary"


const mapStateToProps = state => {
    return {
        polygons: state.polygons.polygons,
        isLoading: state.polygons.isLoading,
        error: state.polygons.error,
        polygon: state.polygonSelect.polygon
    }
}

const mapDispatchToProps = {select, get}

class PolygonSelect extends Component {
    constructor() {
        super()
        this.polygonSelectItemClick = this.polygonSelectItemClick.bind(this)
        this.polygonSelectItemIsActive = this.polygonSelectItemIsActive.bind(this)
    }

    componentDidMount() {
        if (Object.keys(this.props.polygons).length === 0)
            this.props.get()
    }

    polygonSelectItemClick(polygon) {
        this.props.select(polygon)
    }

    polygonSelectItemIsActive(polygon) {
        if (this.props.polygon)
            return polygon.id === this.props.polygon.id
        else
            return false
    }

    render() {
        const polygonsComponents = function (self, polygons) {
            const components = []
            for (let polygon of Object.values(polygons)) {
                components.push(
                    <PolygonSelectItem
                        key={polygon.id} id={polygon.id}
                        isActive={self.polygonSelectItemIsActive(polygon)}
                        polygonSelectItemClick={() => self.polygonSelectItemClick(polygon)}
                    />)
            }
            return components
        }
        return <ErrorLoadingBoundary isLoading={this.props.isLoading} error={this.props.error}>
            <ul className="list-group">
                {polygonsComponents(this, this.props.polygons)}
            </ul>
        </ErrorLoadingBoundary>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PolygonSelect)