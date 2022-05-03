import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";


const MonsterSearch = () => {
  return (
    <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
  );
}

export default MonsterSearch