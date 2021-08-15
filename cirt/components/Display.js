import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import * as UserData from "../Service/user.data.js";

export default function Display() {
  const users = UserData.getAllUsers();

  return (
    <View style={styles.container}>
      {users.map((item) => {
        return (
          <Text style={styles.userInfo}>
            {"Name: " +
              item.Name +
              " - Surname: " +
              item.Surname +
              " - Email: " +
              item.Email +
              " - Cell_n: " +
              item.Cell_n}
          </Text>
        );
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  userInfo: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
});
