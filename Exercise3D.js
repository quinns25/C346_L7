// Exercise3D.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    backgroundColor: "#F5fcff",
    borderColor: "#0099AA",
    borderWidth: 5,
  },
  child: {
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
  },
});

const Exercise3D = () => {
  return (
    <View style={styles.parent}>
      <View style={[styles.child, { flex: 1, backgroundColor: "powderblue" }]}>
        <Text style={styles.text}>Child One</Text>
      </View>
      <View style={[styles.child, { flex: 2, backgroundColor: "skyblue" }]}>
        <Text style={styles.text}>Child Two</Text>
      </View>
      <View style={[styles.child, { flex: 3, backgroundColor: "steelblue" }]}>
        <Text style={styles.text}>Child Three</Text>
      </View>
    </View>
  );
};

export default Exercise3D;
