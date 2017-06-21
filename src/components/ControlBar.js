/**
 * Created by gbitis on 6/20/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ControlBar extends Component {
    render() {
        return (
            <div className="controlBar">
                <Button type="previous" onButtonClick={this.props.onPrev}>
                    Previous
                </Button>
                <Button type="next" onButtonClick={this.props.onNext}>
                    Next
                </Button>
            </div>
        );
    }
}

ControlBar.propTypes = {
    onPrev: PropTypes.func,
    onNext: PropTypes.func,
};

ControlBar.defaultProps = {
    onPrev: () => {},
    onNext: () => {},
};

export default ControlBar;