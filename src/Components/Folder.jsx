import React, { Component } from 'react'

import './Folder.css'

class Folder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filesVisible: true,
        }
    }

    // change the status of filesVisible when the toggle button is pressed
    toggle = () => {
        this.setState({filesVisible: !this.state.filesVisible});
    }

    render() {
        if(this.state.filesVisible){
            return (
                <div className='container'>
                    <p>Folder</p>
                    <div className='files'>
                        <ul>
                            <li>File 1</li>
                            <li>File 2</li>
                            <li>File 3</li>
                        </ul>                    
                    </div>
                    <button onClick={this.toggle}>Toggle</button>
                </div>
            );
        }
        else{
            return (
                <div className='container'>
                    <p>Folder</p>
                    <button onClick={this.toggle}>Toggle</button>
                </div>
            );
        }
    }
}

export default Folder;
