/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Weather from './src/components/weather/Index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Weather);
