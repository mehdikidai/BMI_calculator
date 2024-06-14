import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "./../constants/Colors";
const IconTab = ({ title, icon, active }) => {
    return (
        <View style={[styles.box, active && styles.boxActive]}>
            <AntDesign
                style={[styles.icon,active && styles.iconActive]}
                name={icon}
                size={18}
                color={Colors.dark.text}
            />
            <Text style={[{ color: Colors.dark.text }, styles.txt]}>{title}</Text>
        </View>
    );
};

export default IconTab;

const styles = StyleSheet.create({
    box: {
        height: "auto",
        width: "auto",
        backgroundColor: "#fff0",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        paddingHorizontal: 15,
        borderRadius: 15,
    },
    icon: {
        paddingHorizontal: 20,
        paddingVertical: 4,
        borderRadius: 20,
    },
    iconActive: {
        backgroundColor: "#ffffff0f",
    },
    txt: {
        fontSize: 12,
    },
});
