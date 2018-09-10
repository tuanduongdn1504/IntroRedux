# IntroRedux
introduction about Redux thought out simple app counter
# EXE
SmartSOS


Standard compliant React Native App Utilizing Ignite



⬆ How to Setup
Step 1: git clone this repo:
Step 2: cd to the cloned repo:
Step 3: Install the Application with npm install

▶ How to Run App

cd to the repo
Run Build for either OS


for iOS

run react-native run-ios



for Android

Run Genymotion
run react-native run-android





🚫 Standard Compliant

This project adheres to Standard.  Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.

::Module use

fuzzy: Smart search in array
moment: Date/time module
ramda: Use for rehydrate and dehydrate immutable object for redux-persist
react-native-animatable: Predefine animation
react-native-camera: Call native camera module
react-native-circular-progress: Create circular animation for SOS button
react-native-communications: Phone call ios
react-native-dialogs: Material dialog for android
react-native-drawer: Support drawer for ios
react-native-i18n": Language support
react-native-image-picker: Picker image use native module
react-native-lightbox: Display fullscreen image
react-native-maps: Support android map
react-native-material-kit: Support material design text input and fab
react-native-message-bar: notification message
react-native-push-notification: Support push notification for android
react-native-scrollable-tab-view: Viewpager pattern for ios
react-native-search-bar: Nice search bar
react-native-send-intent: Phone call for android
react-native-swiper: Swiper for app intro
react-native-vector-icon: Support for icon
react-redux: Redux
react-timer-mixin: Clear timer after destroy component, take care memory leak. Recommend by facebook
redux-logger: Print pretty debug log
redux-persist: Auto persist reducer data use AsyncStorage
redux-saga: Take care aysnc action, easier to test compare to redux-thunk
seamless-immutable: Immutable object, improve performant when use with react

Understanding Linting Errors
The linting rules are from JS Standard and React-Standard.  Regular JS errors can be found with descriptions here, while React errors and descriptions can be found here.

📂 Related Articles

Understanding Keyboard Avoiding Code
Understanding Redux Sagas


For custom Icon fonts, we can use following command to generate the Custom using https://github.com/oblador/react-native-vector-icons (make sure putting the icomoon .css & .tff font file into the App/Images/customFont folder)
./node_modules/.bin/generate-icon ./App/Images/customFont/style.css --componentName=icomoon --fontFamily=icomoon > ./node_modules/react-native-vector-icons/icomoon.js && cp ./App/Images/customFont/icomoon.ttf ./node_modules/react-native-vector-icons/Fonts/icomoon.ttf
or
npm run createIconFont
!Trouble Shooting: Red screen with "Unrecognized font family" error on iOS
Make sure you've added the fonts to your XCode project.
Check that the font you are trying to use appears in Info.plist, if you've added the whole folder and it's blue in color, then you need to add it to the path.
Check that the font is copied in the Copy Bundle Resources in Build Phases.
Recompile the project.
