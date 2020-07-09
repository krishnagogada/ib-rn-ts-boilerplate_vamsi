/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useState } from "react";
import { StyleSheet, View, Text, Alert, Image } from "react-native";

import NavigationRouter from "./app/navigation/NavigationRouter";

const App = () => {
  const [noOfLines, setNoOfLines] = useState(1);
  const handleOnPress = () => setNoOfLines(noOfLines + 1);

  return (
    <Fragment>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
            width: 200,
            height: 200,
          }}
        />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
