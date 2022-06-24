/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AnimatedScroll from './AnimatedScroll'
import RNGesters from './RNGesters'
import TestAnimation from './TestAnimation'
import Skeleton from './src/SkeletonShimmer/Skeleton'
import ProductsScene from './src/SkeletonShimmer/ProductsScene'
import TestApi from './src/components/TestAPI/TestApi'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TestApi);
