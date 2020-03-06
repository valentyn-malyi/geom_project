import React, {Component} from "react"
import {connect} from "react-redux"
import {select} from "@actions/PolygonSelect"
import PolygonSelectItem from "@components/PolygonSelectItem"
import {get} from "@actions/Polygons"


function mapStateToProps(state) {
    return {
        polygon: state.polygonSelect.polygon,
        isLoadingPolygonSelect: state.polygonSelect.isLoading,
        polygons: state.polygons.polygons,
        isLoadingPolygons: state.polygons.isLoading,
        error: state.polygons.error,
        status: state.polygons.status
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
        return <ul className="list-group">
            {this.props.polygons.map(p => {
                return <PolygonSelectItem
                    key={p.id} id={p.id}
                    isActive={this.polygonSelectItemIsActive(p)}
                    polygonSelectItemClick={() => this.polygonSelectItemClick(p)}/>
            })}
        </ul>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PolygonSelect)