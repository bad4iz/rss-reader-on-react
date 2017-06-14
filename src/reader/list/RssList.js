import React, {Component} from 'react';
import List from "./List";

import './rssList.css'

class RssList extends Component {

    render() {
        return (
            <div className="rssList">
                <div className="addRss">
                    <input type="text"/>
                    <button>add</button>
                </div>
                <ul>
                    <li>AllRssList</li>
                   <List/>
                </ul>
            </div>
        );
    }
}

export default RssList;