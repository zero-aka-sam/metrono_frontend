import React from 'react'
import '../css/style.css'


class header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
            <h3 className="header_title">{this.props.headerTitle}</h3>
            </div>
               
        )
    }
}

export default header;