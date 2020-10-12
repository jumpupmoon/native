/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
// var mongoose = require('mongoose')

// var mongo_url = process.env.MONGO_URL

// mongoose.connect(mongo_url, {useNewUrlParser: true ,useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
// .then(() => console.log('connected to mongodb'))
// .catch(e => console.error(e));

AppRegistry.registerComponent(appName, () => App);
