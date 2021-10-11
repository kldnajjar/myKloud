import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import Login from "./screens/login";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2E2E2",
  },
});
