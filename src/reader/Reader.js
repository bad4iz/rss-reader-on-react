import React, { Component } from 'react';
import RssList from "./list/RssList";
import RssGrid from "./grid/RssGrid";

import './reader.css';

class Reader extends Component {

    render() {
        return (
            <div className="reader">
                <RssGrid/>
                <RssList/>
            </div>
        );
    }
}

export default Reader;
