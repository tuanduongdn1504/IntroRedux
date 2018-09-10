# IntroRedux
introduction about Redux thought out simple app counter
# EXE
#  SmartSOS
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

* Standard compliant React Native App Utilizing [Ignite](https://github.com/infinitered/ignite)

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `npm install`


## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`

## :no_entry_sign: Standard Compliant

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
This project adheres to Standard.  Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.

## ::Module use
1. fuzzy: Smart search in array
2. moment: Date/time module
3. ramda: Use for rehydrate and dehydrate immutable object for redux-persist
4. react-native-animatable: Predefine animation
5. react-native-camera: Call native camera module
6. react-native-circular-progress: Create circular animation for SOS button
7. react-native-communications: Phone call ios
8. react-native-dialogs: Material dialog for android
9. react-native-drawer: Support drawer for ios
10. react-native-i18n": Language support
11. react-native-image-picker: Picker image use native module
12. react-native-lightbox: Display fullscreen image
13. react-native-maps: Support android map
14. react-native-material-kit: Support material design text input and fab
15. react-native-message-bar: notification message
16. react-native-push-notification: Support push notification for android
17. react-native-scrollable-tab-view: Viewpager pattern for ios
18. react-native-search-bar: Nice search bar
19. react-native-send-intent: Phone call for android
20. react-native-swiper: Swiper for app intro
21. react-native-vector-icon: Support for icon
22. react-redux: Redux
23. react-timer-mixin: Clear timer after destroy component, take care memory leak. Recommend by facebook
24. redux-logger: Print pretty debug log
25. redux-persist: Auto persist reducer data use AsyncStorage
26. redux-saga: Take care aysnc action, easier to test compare to redux-thunk
27. seamless-immutable: Immutable object, improve performant when use with react

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## :open_file_folder: Related Articles
* [Understanding Keyboard Avoiding Code](https://shift.infinite.red/avoiding-the-keyboard-in-react-native-56d05b9a1e81#.s4bzjlc7l)
* [Understanding Redux Sagas](https://shift.infinite.red/using-redux-saga-to-simplify-your-growing-react-native-codebase-2b8036f650de#.2o2rmz888)

## For custom Icon fonts, we can use following command to generate the Custom using https://github.com/oblador/react-native-vector-icons (make sure putting the icomoon .css & .tff font file into the App/Images/customFont folder)

./node_modules/.bin/generate-icon ./App/Images/customFont/style.css --componentName=icomoon --fontFamily=icomoon > ./node_modules/react-native-vector-icons/icomoon.js && cp ./App/Images/customFont/icomoon.ttf ./node_modules/react-native-vector-icons/Fonts/icomoon.ttf

or

npm run createIconFont

!Trouble Shooting: Red screen with "Unrecognized font family" error on iOS

Make sure you've added the fonts to your XCode project.
Check that the font you are trying to use appears in Info.plist, if you've added the whole folder and it's blue in color, then you need to add it to the path.
Check that the font is copied in the Copy Bundle Resources in Build Phases.
Recompile the project.

