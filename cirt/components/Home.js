import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  const items = [];

  for (let i = 1; i <= 1000; i++) {
    if (i % 5 === 0) {
      items.push(<Text style={styles.beep}>{i + " beep"}</Text>);
    }

    if (i % 20 === 0) {
      items.push(<Text style={styles.boop}>{i + " boop"}</Text>);
    }

    if (i % 100 === 0) {
      items.push(<Text style={styles.beop}>{i + " beep boop"}</Text>);
    }
  }
  const pressHandler = () => {
    navigation.navigate("Display");
  };
  const captureHandler = () => {
    navigation.navigate("Capture");
  };
  return (
    <View style={styles.container}>
      <Button
        color="orange"
        title="Go to Users Details"
        onPress={pressHandler}
      />
      <Button
        color="#841584"
        title="Go to Capture user details"
        onPress={captureHandler}
      />
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 10,
          marginTop: 10,
          marginBottom: 10,
        }}
      />
      {items}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    margin: 5,
  },
  beep: {
    padding: 20,
    margin: 10,
    overflow: "hidden",
    fontSize: 20,
    lineHeight: 3,
    width: "100%",
    maxHeight: 0,
    backgroundColor: "lightgray",
  },
  boop: {
    padding: 20,
    margin: 10,
    overflow: "hidden",
    fontSize: 20,
    lineHeight: 3,
    width: "100%",
    maxHeight: 0,
    backgroundColor: "brown",
  },
  beop: {
    padding: 20,
    margin: 10,
    overflow: "hidden",
    fontSize: 20,
    lineHeight: 3,
    width: "100%",
    maxHeight: 0,
    backgroundColor: "lightblue",
  },
  input: {
    margin: 10,
  },
});
