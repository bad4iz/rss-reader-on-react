import React, {Component} from 'react';
import RssItem from './RssItem';

import './rssList.css';

class RssList extends Component {
    
    state = {
        urlInput: '',
        nameInput: ''
    };

    handleInputChange = (event) => {
        this.setState({
            urlInput: event.target.value
        });
    };

    handleAdd = () => {
        if (this.state.urlInput.length) {
            const newRss = {
                url: this.state.urlInput,
                id: Date.now()
            };
            this.setState({urlInput: ''});
            this.props.onChange(newRss);
        }
    };

    render() {
        const { list } = this.props;
        return (
            <div className="rssList">
                <div className="addRss">
                    <input value={this.state.urlInput}
                           onChange={this.handleInputChange}
                           type="text"
                           placeholder="url rss"
                    />
                    <button onClick={this.handleAdd}>add</button>
                </div>
                <ul>
                    {
                        list &&
                        list.map(item => {
                            return (
                                    <RssItem
                                        key={item.id}
                                        rss={item}
                                    />
                            );
                        }
                        )

                    }
                </ul>
            </div>
        );
    }


}

export default RssList;
