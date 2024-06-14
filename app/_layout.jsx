
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "./../constants/Colors";
import IconTab from "../components/iconTab";

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: Colors.dark.background,
                    height: 70,
                    borderTopColor: "#fff0",
                },
                headerTitleStyle: {
                    color: Colors.dark.text,
                },
                tabBarShowLabel: false,
                headerStyle: {
                    backgroundColor: Colors.dark.background,
                    borderBottomColor: "red",
                    shadowColor: "transparent", // this covers iOS
                    elevation: 0,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    //headerStyle: { backgroundColor: Colors.dark.background },
                    tabBarIcon: (tabInfo) => {
                        return (
                            <IconTab
                                title="home"
                                active={tabInfo.focused}
                                icon="home"
                            />
                        );
                    },
                    headerShown:false
                    
                }}
            />
            <Tabs.Screen
                name="setting"
                options={{
                    title: "Setting",
                    headerStyle: { backgroundColor: Colors.dark.background },
                    tabBarIcon: (tabInfo) => {
                        return (
                            <IconTab
                                title="setting"
                                active={tabInfo.focused}
                                icon="setting"
                            />
                        );
                    },
                }}
            />
        </Tabs>
    );
};

export default _layout;
