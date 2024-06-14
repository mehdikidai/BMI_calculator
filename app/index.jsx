import { Text, View, TextInput, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import AppSetup from "../components/appSetup";
import styles from "../style/home.style";
import SvgBmi from "../components/bmiSvg";
import { StatusBar } from "expo-status-bar";
import { getBMIDescription } from "./../helper";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

const index = () => {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [bmi, setBmi] = useState(null);
    const [rotate, setRotate] = useState(0);

    const listData = [
        {
            key: 1,
            title: "Underweight",
            description: "Under 18.5",
            color: "#52c9f7",
        },
        {
            key: 2,
            title: "Normal",
            description: "18.5 - 24.9",
            color: "#97cd17",
        },
        {
            key: 3,
            title: "Overweight",
            description: "25 - 29.9",
            color: "#feda00",
        },
        {
            key: 4,
            title: "Obese",
            description: "30 and over",
            color: "#fe0000",
        },
    ];

    const onChangeHeight = (v) => {
        setHeight(v);
    };

    const onChangeWeight = (v) => {
        setWeight(v);
    };

    useEffect(() => {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        console.log(rotate - 90);
        setBmi(bmi ? bmi.toFixed(2) : null);

        if (bmi && bmi !== 16) {
            if (bmi > 32) {
                setRotate(16 * (180 / 16));
            } else {
                setRotate((bmi - 16) * (180 / 16));
            }
        }
    }, [weight, height]);

    return (
        <AppSetup>
            <View style={styles.boxInputs}>
                <View style={styles.box}>
                    <Text style={styles.label}>Height</Text>
                    <View style={styles.continerInput}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeHeight}
                            value={height}
                            keyboardType="numeric"
                            placeholder="Height"
                            placeholderTextColor="#ffffff6b"
                        />
                        <View style={styles.boxCmKg}>
                            <Text style={styles.txtCmKg}>Cm</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.box}>
                    <Text style={styles.label}>Weight</Text>
                    <View style={styles.continerInput}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeWeight}
                            value={weight}
                            keyboardType="numeric"
                            placeholder="Weight"
                            placeholderTextColor="#ffffff6b"
                        />
                        <View style={styles.boxCmKg}>
                            <Text style={styles.txtCmKg}>Kg</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.resultBox}>
                <View style={styles.totalBmi}>
                    <Text style={styles.totalBmiTxt}>
                        {bmi ? bmi : "00.00"}
                    </Text>
                </View>
                <View
                    style={[
                        styles.resultTxtBox,
                        { backgroundColor: "#3b3b3b" },
                    ]}
                >
                    <Text
                        style={[
                            styles.resulNormal,
                            { color: getBMIDescription(bmi).color },
                        ]}
                    >
                        {bmi ? getBMIDescription(bmi).description : "--"}
                    </Text>
                </View>
                <SvgBmi style={styles.svg} />

                <View
                    style={[
                        styles.arrow,
                        {
                            transform: [
                                { translateX: -8 },
                                { rotate: `${rotate - 90}deg` },
                            ],
                        },
                    ]}
                >
                    {bmi && bmi >= 16 && bmi <= 40 && (
                        <View style={styles.arrowIcon} />
                    )}
                </View>
            </View>
            <View style={styles.list}>
                {listData.map((el) => {
                    return (
                        <View key={el.key} style={styles.listEl}>
                            <View
                                style={{
                                    flex: 1,
                                    backgroundColor: "#fff0",
                                    height: 44,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    paddingHorizontal: 15,
                                    gap: 6,
                                }}
                            >
                                <Entypo
                                    name="controller-record"
                                    size={16}
                                    color={el.color}
                                />
                                <Text style={{ color: Colors.dark.text }}>
                                    {el.title}
                                </Text>
                            </View>
                            <View
                                style={{
                                    width: 1,
                                    backgroundColor: "#fff2",
                                    height: 20,
                                }}
                            ></View>
                            <View
                                style={{
                                    flex: 1,
                                    backgroundColor: "#fff0",
                                    height: 44,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    paddingHorizontal: 15,
                                }}
                            >
                                <Text style={{ color: Colors.dark.text }}>
                                    {el.description}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </View>
            <StatusBar hidden />
        </AppSetup>
    );
};

export default index;
