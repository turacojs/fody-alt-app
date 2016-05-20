import DefaultApp from 'fody-app';
import React, { Component, PropTypes } from 'react';


export default class AltApp extends Component {
    static propTypes = {
        context: PropTypes.shape({
            context: PropTypes.shape({
                alt: PropTypes.object.isRequired,
            }),
        }),
    };

    static childContextTypes: {
        alt: React.PropTypes.object,
    };

    getChildContext() {
        return { alt: this.props.context.context.alt };
    }

    render() {
        return <DefaultApp {...this.props} />;
    }
};
