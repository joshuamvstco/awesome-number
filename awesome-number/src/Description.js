import React from 'react';
import './Description.css';
import Randomize from './Randomize'


class Description extends React.Component {
    render () {
        return <div style={{
            marginTop: 100,
            textAlign: 'center'
        }}>
                <h2>That's an awesome number</h2>
                <p>{this.props.description}</p>
                <Randomize />
        </div>
    }
}


export default Description;