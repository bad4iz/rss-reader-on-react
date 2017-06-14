import React, {Component} from 'react';
import RssItem from './RssItem';

import './rssList.css';

class RssList extends Component {
    
    state = {
        urlInput: '',
        error: false
    };
    
    handleInputChange = (event) => {
        const {value} = event.target;
        this.setState({
            urlInput: value
        });
    };
    
    handleAdd = () => {
        const {list} = this.props;
        const {urlInput} = this.state;
        
        const isNone = list.every((item) => {
            const is = item.url !== urlInput;
            console.log(item.url + '  == ' + is + ' ==  ' + urlInput);
            return item.url !== urlInput;
        });
        
        console.log('isNone ' + isNone);
        
        if ((/^http/i.test(urlInput)) && (isNone)) {
            const newRss = {
                url: urlInput,
                id: Date.now()
            };
            
            this.setState({
                urlInput: '',
                error: false
            });
            
            this.props.onChange(newRss);
        } else {
            this.setState({error: true});
        }
    };
    
    
    render() {
        const {list} = this.props;
        const cl = this.state.error ? 'error' : '';
        return (
            <div className="rssList">
                <div className="addRss">
                    <input value={this.state.urlInput}
                           className={cl}
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
