import React from "react";
import { Scene } from "react-native-router-flux";

import {
  APP_LAUNCH_SCENE,
  APP_SCENE,
  SIGN_UP_FORM_SCENE,
} from "../constants/NavigationConstants";

import LaunchScene from "./LaunchScene";
import AppScene from "./AppScene";
import SignUpFormScene from "./SignUpFormScene";

const scenes = [
  <Scene key={APP_LAUNCH_SCENE} component={LaunchScene} />,
  <Scene key={APP_SCENE} component={AppScene} />,
  <Scene initial key={SIGN_UP_FORM_SCENE} component={SignUpFormScene} />,
];

const modalScenes: any = [];

export { scenes as default, modalScenes };
