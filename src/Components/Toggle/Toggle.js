import React, {Component} from 'react';
import './Toggle.scss'

class Toggle extends Component {

    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <label className='toggle'>
                <input type='checkbox'/>
                <span className='slider'/>
            </label>
        )
    }
}

export default Toggle