import { StyleSheet, ScrollView } from "react-native";
import React from "react";

const AppSetup = ({ children }) => {
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            endFillColor="red"
            overScrollMode="never"
        >
            {children}
        </ScrollView>
    );
};

export default AppSetup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222",
        paddingHorizontal: 15,
    },
});
