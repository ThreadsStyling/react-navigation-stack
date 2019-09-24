var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _reactNavigation=require("react-navigation");var _jsxFileName="/Users/john.wright/Workspace/ThreadsStyling/react-navigation-stack/src/views/Header/HeaderTitle.tsx";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var HeaderTitle=function(_React$Component){(0,_inherits2.default)(HeaderTitle,_React$Component);function HeaderTitle(){(0,_classCallCheck2.default)(this,HeaderTitle);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(HeaderTitle).apply(this,arguments));}(0,_createClass2.default)(HeaderTitle,[{key:"render",value:function render(){var _this$props=this.props,style=_this$props.style,rest=(0,_objectWithoutProperties2.default)(_this$props,["style"]);var theme=_reactNavigation.ThemeColors[this.context];return React.createElement(_reactNative.Animated.Text,(0,_extends2.default)({numberOfLines:1},rest,{style:[styles.title,{color:theme.label},style],accessibilityTraits:"header",__source:{fileName:_jsxFileName,lineNumber:17}}));}}]);return HeaderTitle;}(React.Component);HeaderTitle.contextType=_reactNavigation.ThemeContext;var styles=_reactNative.StyleSheet.create({title:_objectSpread({},_reactNative.Platform.select({ios:{fontSize:17,fontWeight:'600',color:'rgba(0, 0, 0, .9)',marginHorizontal:16},android:{fontSize:20,fontWeight:'500',color:'rgba(0, 0, 0, .9)',marginHorizontal:16},default:{fontSize:18,fontWeight:'400',color:'#3c4043'}}))});var _default=HeaderTitle;exports.default=_default;
//# sourceMappingURL=HeaderTitle.js.map