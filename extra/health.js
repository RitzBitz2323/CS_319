import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import store from "../state/storeItemStore";

const total_health = 100;
const temp_health = total_health;
export function damageEnemy(value) {
    temp_health = temp_health - value;
    if(temp_health < 0){
        showAlert;
        setMoney(10);
    }
}

const showAlert = () =>
  Alert.alert(
    "You've killed the boss!",
    "You have received 10 gold",
    [
      {
        text: "Cancel",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        onPress: () => Alert.alert("Cancel Pressed"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  );


