import React, {Component} from 'react';

import './rssGrid.css';

class RssGrid extends Component {

    render() {
        return (
            <div className="rssGrid">
                <div className="sort">
                    <button>сортировать по заголовку</button>
                    <button>сортировать по дате</button>
                </div>
                RssGrid
            </div>
        );
    }
}

export default RssGrid;
