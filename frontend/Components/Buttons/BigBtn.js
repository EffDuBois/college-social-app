import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

const BigBtn = ({ title, onPress }) => {
  return (
    <View
      className="bg-purple-600 p-[7vh] my-[3vh] mx-[13vw] rounded-xl text-center"
      onPress={onPress}
    >
      <Text className="text-white text-center text-[20px]">{title}</Text>
    </View>
  );
};

export default BigBtn;
