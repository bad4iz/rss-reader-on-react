import React, {Component} from 'react';
import RssList from './list/RssList';
import RssGrid from './grid/RssGrid';
import feednami from '../libs/feednami-client-v1.1';

import './reader.css';

class Reader extends Component {
    state = {
        rssList: [
            {
                id: '1',
                url: 'http://4pda.ru/feed/rss',
                name: 'adasf'
            },
            {
                id: '2',
                url: 'https://www.liteforex.ru/rss/company-news/',
                name: 'второй'
            }
        
        ],
        rssArr: []
    };
    
    feed = (url) => {
        feednami.load(url)
        .then(feed => {
            this.setState({rssArr: this.state.rssArr.concat(feed.entries)});
        });
    };
    
    concatRss() {
        this.state.rssList.forEach(item => {
            this.feed(item.url)
        });
    }
    
    componentDidMount() {
        
        const localRssList = JSON.parse(localStorage.getItem('rssList'));
        if (localRssList) {
            this.setState({rssList: localRssList});
        }
    }
    
    componentWillMount() {
        this.concatRss();
    }
    
    componentDidUpdate() {
        this._updateLocalStorage();
    }
    
    handlerList = (newRss) => {
        console.log(newRss);
        const newList = this.state.rssList.slice();
        newList.unshift(newRss);
        this.setState({rssList: newList});
    };
    
    render() {
        return (
            <div className="reader">
                <RssGrid rssArr={this.state.rssArr}/>
                <RssList
                    onChange={this.handlerList}
                    list={this.state.rssList}
                />
            </div>
        );
    }
    
    _updateLocalStorage() {
        const rssList = JSON.stringify(this.state.rssList);
        localStorage.setItem('rssList', rssList);
    }
    
}

export default Reader;
