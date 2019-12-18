import React from 'react'

class Filter extends React.Component {
    render() {
        return <div className="ui four column grid">
            <div className="row">
                <select className="ui selection dropdown" onChange={this.props.handleChange}>
                    <option value="All">All</option>
                    <option value="Support">Support</option>
                    <option value="Defender">Defender</option>
                    <option value="Assault">Assault</option>
                </select>
            </div>
        </div>
    }
}

export default Filter