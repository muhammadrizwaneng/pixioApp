/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './app/App';
import AppWrapper from './AppWrapper';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppWrapper);
