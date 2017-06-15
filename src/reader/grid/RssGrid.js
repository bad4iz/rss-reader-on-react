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
                {
                    this.props.rssArr.map( (item, idx) => {
    
                        const {title, image, description} = item;
                        return (
                            <div key={idx}>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <img src={image.link} alt={item.title}/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default RssGrid;
