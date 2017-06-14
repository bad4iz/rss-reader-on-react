import React, { Component } from 'react';
import RssList from './list/RssList';
import RssGrid from './grid/RssGrid';

import './reader.css';

class Reader extends Component {
    state = {
        rssList: [
            {
                id: '1',
                url: 'jkljklj',
                name: 'adasf'
            },
            {
                id: '2',
                url: 'второй',
                name: 'второй'
            }
    
        ]
    };

    componentDidMount() {
        const localRssList = JSON.parse(localStorage.getItem('rssList'));
        if (localRssList) {
            this.setState({ rssList: localRssList });
        }
    }
    
    componentDidUpdate() {
        console.log('состояние изменилось');
        console.log(this.state.rssList);
        this._updateLocalStorage();
    }
    handlerList = (newRss) => {  
        console.log(newRss);
        const newList = this.state.rssList.slice();
        newList.unshift(newRss);
        this.setState({ rssList: newList });
    };
    
    render() {
        return (
            <div className="reader">
                <RssGrid/>
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
