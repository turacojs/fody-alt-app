'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class, _temp;

var _fodyApp = require('fody-app');

var _fodyApp2 = _interopRequireDefault(_fodyApp);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * @function
 * @param obj
*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AltApp = (_temp = _class = class AltApp extends _react.Component {

    getChildContext() {
        return { alt: this.props.context.context.alt };
    }

    render() {
        return _react2.default.createElement(_fodyApp2.default, this.props);
    }
}, _class.propTypes = {
    context: _react.PropTypes.shape({
        context: _react.PropTypes.shape({
            alt: _react.PropTypes.object.isRequired
        })
    })
}, _temp);
exports.default = AltApp;
;
//# sourceMappingURL=AltApp.js.map