import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  Animated,
} from "react-native";
import Login from "./Login";

export default class AppLoader extends React.Component {
  state = {
    progressStatus: 0,
  };
  anim = new Animated.Value(0);
  componentDidMount() {
    this.onAnimate();
  }
  onAnimate = () => {
    this.anim.addListener(({ value }) => {
      this.setState({ progressStatus: parseInt(value, 10) });
    });
    Animated.timing(this.anim, {
      toValue: 100,
      duration: 10000,
      useNativeDriver: false,
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image source={require("./images/Logo.png")} />
        </View>
        <View style={styles.progressBar}>
          <Animated.View
            style={[styles.inner, { width: this.state.progressStatus + "%" }]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D64B4B",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  progressBar: {
    width: "80%",
    height: 40,
    padding: 3,
    borderColor: "#fff",
    borderWidth: 3,
    borderRadius: 30,
    marginBottom: 100,
    justifyContent: "center",
  },
  inner: {
    width: "100%",
    height: 30,
    borderRadius: 20,
    backgroundColor: "white",
  },
});
