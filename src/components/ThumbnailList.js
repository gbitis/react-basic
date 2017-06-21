/**
 * Created by gbitis on 6/20/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';

class ThumbnailList extends Component {
    render() {
        const thumbnails = this.props.imageList.map((item, index) => {
            return (
                <Thumbnail
                    key={item.id}
                    isSelected={index === this.props.selectedIndex}
                    index={index}
                    url={item.thumbnailUrl}
                    onThumbClick={this.props.onThumbClick}
                />
            );
        });

        return <div className="thumbnailList">{thumbnails}</div>;
    }
}

ThumbnailList.propTypes = {
    imageList: PropTypes.arrayOf(PropTypes.shape({
        albumId: PropTypes.number,
        id: PropTypes.number,
        thumbnailUrl: PropTypes.string,
        title: PropTypes.string,
        url: PropTypes.string,
    })),
    onThumbClick: PropTypes.func,
    selectedIndex: PropTypes.number,
}

ThumbnailList.defaultProps = {
    imageList: [],
    onThumbClick: () => {},
    selectedIndex: 0,
}

export default ThumbnailList;