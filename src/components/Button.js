/**
 * Created by gbitis on 6/20/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Button.css'

class Button extends Component {
    render() {
        const { children, onButtonClick, type } = this.props;
        return (
            <div className={"button " + type} onClick={onButtonClick}>
                {children}
            </div>
        );
    }
}

Button.propTypes = {
    type: PropTypes.oneOf(['previous', 'next']),
    onButtonClick: PropTypes.func,
}

Button.defaultProps = {
    type: 'next',
    onButtonClick: () => {},
}

export default Button;