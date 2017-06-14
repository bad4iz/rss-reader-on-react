import React, { Component } from 'react';
import RssList from "./list/RssList";
import RssGrid from "./grid/RssGrid";

class Reader extends Component {

    render() {
        return (
            <div>
                <RssList/>
                <RssGrid/>
            </div>
        );
    }
}

export default Reader;
