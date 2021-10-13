import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
} from "react-native";

import Button from "../components/button";
import Separator from "../components/separator";

const oAuthLogin = () => {
  Alert.alert("oAuth");
};

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/essentials/background.png")}
        resizeMode="contain"
        style={styles.image}
      >
        <View style={styles.layout}>
          <Image
            style={styles.logo}
            source={require("../assets/logos/app-logo.png")}
          />
        </View>
        <View style={styles.layout}>
          <Text style={styles.text}>Data privacy platform over Blockchain</Text>
        </View>
        <View style={styles.button_container}>
          <Button
            onPress={oAuthLogin}
            buttonStyle={styles.button_1}
            textStyle={styles.button_text}
            title="OAuth Login"
          />
          <Separator />
          <Button
            onPress={() => Alert.alert("In the next stage")}
            buttonStyle={styles.button_2}
            textStyle={styles.button_text}
            title="Register"
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
  },
  text: {
    color: "#445DA7",
    fontSize: 28,
    lineHeight: 38,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    backgroundColor: "rgba(238, 238, 238, 0.5)",
  },
  logo: {
    width: 140,
    height: 130,
  },
  button_container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: 10,
  },
  button_1: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#445DA7",
  },
  button_2: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#5c7fe0",
  },
  button_text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#ffffff",
  },
});
