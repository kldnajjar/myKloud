import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  Pressable,
} from "react-native";

const oAuthLogin = () => {
  Alert.alert("Simple Button pressed");
};

const Separator = () => <View style={styles.separator} />;

export default function Login() {
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
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            paddingVertical: 10,
          }}
        >
          {/* <Button
            title="Soical Login"
            onPress={oAuthLogin}
            color="#445DA7"
            style={styles.button}
          />
          <Separator />
          <Button
            title="Register"
            onPress={() => Alert.alert("In the next stage")}
            color="#5c7fe0"
            style={styles.button}
          /> */}

          <Pressable style={styles.button_1} onPress={oAuthLogin}>
            <Text style={styles.button_text}>Soical Login</Text>
          </Pressable>
          <Separator />
          <Pressable
            style={styles.button_2}
            onPress={() => Alert.alert("In the next stage")}
          >
            <Text style={styles.button_text}>Register</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  separator: {
    marginVertical: 6,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
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
