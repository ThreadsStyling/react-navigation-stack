var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _reactNative=require("react-native");var _StackViewStyleInterpolator=_interopRequireDefault(require("./StackViewStyleInterpolator"));var _ReactNativeFeatures=require("../../utils/ReactNativeFeatures");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var IOSTransitionSpec;if((0,_ReactNativeFeatures.supportsImprovedSpringAnimation)()){IOSTransitionSpec={timing:_reactNative.Animated.spring,stiffness:1000,damping:500,mass:3,overshootClamping:true,restDisplacementThreshold:0.01,restSpeedThreshold:0.01};}else{IOSTransitionSpec={duration:500,easing:_reactNative.Easing.bezier(0.2833,0.99,0.31833,0.99),timing:_reactNative.Animated.timing};}var SlideFromRightIOS={transitionSpec:IOSTransitionSpec,screenInterpolator:_StackViewStyleInterpolator.default.forHorizontal,containerStyleLight:{backgroundColor:'#eee'},containerStyleDark:{backgroundColor:'#000'}};var ModalSlideFromBottomIOS={transitionSpec:IOSTransitionSpec,screenInterpolator:_StackViewStyleInterpolator.default.forVertical,containerStyleLight:{backgroundColor:'#eee'},containerStyleDark:{backgroundColor:'#000'}};var FadeInFromBottomAndroid={transitionSpec:{duration:350,easing:_reactNative.Easing.out(_reactNative.Easing.poly(5)),timing:_reactNative.Animated.timing},screenInterpolator:_StackViewStyleInterpolator.default.forFadeFromBottomAndroid};var FadeOutToBottomAndroid={transitionSpec:{duration:150,easing:_reactNative.Easing.in(_reactNative.Easing.linear),timing:_reactNative.Animated.timing},screenInterpolator:_StackViewStyleInterpolator.default.forFadeToBottomAndroid};var NoAnimation={transitionSpec:{duration:0,timing:_reactNative.Animated.timing},screenInterpolator:_StackViewStyleInterpolator.default.forNoAnimation,containerStyleLight:{backgroundColor:'#eee'},containerStyleDark:{backgroundColor:'#000'}};function defaultTransitionConfig(transitionProps,prevTransitionProps,isModal){if(_reactNative.Platform.OS!=='ios'){if(prevTransitionProps&&transitionProps.index<prevTransitionProps.index){return FadeOutToBottomAndroid;}return FadeInFromBottomAndroid;}if(isModal){return ModalSlideFromBottomIOS;}return SlideFromRightIOS;}function getTransitionConfig(transitionConfigurer,transitionProps,prevTransitionProps,isModal){var defaultConfig=defaultTransitionConfig(transitionProps,prevTransitionProps,isModal);if(transitionConfigurer){return _objectSpread({},defaultConfig,{},transitionConfigurer(transitionProps,prevTransitionProps,isModal));}return defaultConfig;}var _default={defaultTransitionConfig:defaultTransitionConfig,getTransitionConfig:getTransitionConfig,SlideFromRightIOS:SlideFromRightIOS,ModalSlideFromBottomIOS:ModalSlideFromBottomIOS,FadeInFromBottomAndroid:FadeInFromBottomAndroid,FadeOutToBottomAndroid:FadeOutToBottomAndroid,NoAnimation:NoAnimation};exports.default=_default;
//# sourceMappingURL=StackViewTransitionConfigs.js.map