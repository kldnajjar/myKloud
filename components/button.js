import React from "react";
import { Text, Pressable } from "react-native";

export default function Button(props) {
  const { onPress, buttonStyle, textStyle, title = "Save" } = props;
  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}
