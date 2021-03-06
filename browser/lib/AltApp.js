'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = /**
                    * @function
                   */ function () { /**
                                     * @function
                                     * @param target
                                     * @param props
                                    */ function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return (/**
                                                                                                                                                                                                                                                                                                                                                                            * @function
                                                                                                                                                                                                                                                                                                                                                                            * @param Constructor
                                                                                                                                                                                                                                                                                                                                                                            * @param protoProps
                                                                                                                                                                                                                                                                                                                                                                            * @param staticProps
                                                                                                                                                                                                                                                                                                                                                                           */ function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; } ); }();

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

/**
 * @function
 * @param instance
 * @param Constructor
*/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @function
 * @param self
 * @param call
*/
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

/**
 * @function
 * @param subClass
 * @param superClass
*/
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AltApp = (_temp = _class = /**
                                * @function
                                * @param _Component
                               */function (_Component) {
    _inherits(AltApp, _Component);

    /**
     * @function
    */
    function AltApp() {
        _classCallCheck(this, AltApp);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AltApp).apply(this, arguments));
    }

    _createClass(AltApp, [{
        key: 'getChildContext',
        value: /**
                * @function
               */function getChildContext() {
            return { alt: this.props.context.context.alt };
        }
    }, {
        key: 'render',
        value: /**
                * @function
               */function render() {
            return _react2.default.createElement(_fodyApp2.default, this.props);
        }
    }]);

    return AltApp;
}(_react.Component), _class.propTypes = {
    context: _react.PropTypes.shape({
        context: _react.PropTypes.shape({
            alt: _react.PropTypes.object.isRequired
        })
    })
}, _temp);
exports.default = AltApp;
;
//# sourceMappingURL=AltApp.js.map