import React, {Component} from 'react';

class RssItem extends Component {
    render() {
        const { url } = this.props.rss;
        return (
            <li>
                <a href="#">{url}</a>
            </li>
        );
    }
}

export default RssItem;
