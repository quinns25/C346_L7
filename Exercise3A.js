// Exercise3A
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Exercise3A = () => {
    return (
        <View style={styles.Parent}>
            <Text style={[styles.Child, { backgroundColor: "powderblue" }]}>
                Child One
            </Text>
            <Text style={[styles.Child, { backgroundColor: "skyblue" }]}>
                Child Two
            </Text>
            <Text style={[styles.Child, { backgroundColor: "steelblue" }]}>
                Child Three
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Parent: {
        flexDirection: "row",
        backgroundColor: "#F5fcff",
        borderColor: "#0099AA",
        borderWidth: 5,
    },
    Child: {
        borderWidth: 2,
        textAlign: "center",
        fontSize: 24,
        flex: 1,
    },
});

export default Exercise3A;

