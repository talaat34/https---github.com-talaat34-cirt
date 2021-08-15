import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import * as UserData from "../Service/user.data.js";

export default class Capture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Surname: "",
      Email: "",
      Cell_n: "",
    };
  }

  f1 = () => {
    let name = this.state.Name;
    let surname = this.state.Surname;
    let email = this.state.Email;
    let cell_n = this.state.Cell_n;

    const users = UserData.getAllUsers();

    {
      users.map((item) => {
        if (item.Name == name && item.Surname == surname) {
          if (UserData.updateUser(name, surname, email, cell_n)) {
            alert(
              "The user already existed (Evaluation is done on Name AND Surname) and thus he/she got UPDATED!"
            );
          }
        } else {
          if (UserData.addUser(name, surname, email, cell_n)) {
            alert(
              "The user did not exist (Evaluation is done on Name AND Surname) and thus he/she got ADDED!"
            );
          }
        }
      });
    }
  };
  render() {
    return (
      <View style={this.styles.container}>
        <StatusBar style="auto" />
        <Text style={this.styles.inputLabel}>Name:</Text>
        <TextInput
          style={this.styles.input}
          onChangeText={(Name) => this.setState({ Name })}
        />
        <Text style={this.styles.inputLabel}>Surname:</Text>
        <TextInput
          style={this.styles.input}
          onChangeText={(Surname) => this.setState({ Surname })}
        />
        <Text style={this.styles.inputLabel}>Email:</Text>
        <TextInput
          style={this.styles.input}
          onChangeText={(Email) => this.setState({ Email })}
        />
        <Text style={this.styles.inputLabel}>Cell Number:</Text>
        <TextInput
          style={this.styles.input}
          onChangeText={(Cell_n) => this.setState({ Cell_n })}
        />
        <Button
          style={{
            margin: 10,
          }}
          title="Add OR Update User"
          onPress={this.f1}
        />
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      width: "100%",
      borderColor: "gray",
      borderWidth: 10,
      borderRadius: 20,
      fontSize: 20,
      padding: 10,
      margin: 10,
    },
    inputLabel: {
      padding: 20,
      margin: 10,
      overflow: "hidden",
      fontSize: 20,
      lineHeight: 3,
      width: "100%",
      maxHeight: 0,
      backgroundColor: "lightgray",
    },
  });
}
