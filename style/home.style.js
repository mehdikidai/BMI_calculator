import { StyleSheet } from "react-native";

import { Colors } from "../constants/Colors";

const styles = StyleSheet.create({
    boxInputs: {
        height: "auto",
        //backgroundColor: "blue",
        marginVertical: 15,
        marginTop: 50,
        flexDirection: "row",
        gap: 15,
    },
    box: {
        //backgroundColor: "#111111",
        height: "auto",
        flex: 1,
        flexDirection: "column",
        gap: 10,
    },
    input: {
        backgroundColor: "#3b3b3b",
        height: 46,
        paddingHorizontal: 10,
        borderRadius: 4,
        flex: 1,
        color: "#fff",
    },
    label: {
        fontSize: 12,
        color: Colors.dark.text,
    },
    continerInput: {
        flexDirection: "row",
        position: "relative",
    },
    boxCmKg: {
        backgroundColor: "#fff1",
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        height: 30,
        right: 8,
        top: 8,
        borderRadius: 2,
    },
    txtCmKg: {
        fontSize: 12,
        color: "#fff",
    },

    // ------ result

    resultBox: {
        height: 200,
        backgroundColor: "#3b3b3b",
        backgroundColor: "#fff0",
        borderRadius: 4,
        position: "relative",
    },
    svg: {
        position: "absolute",
        left: "50%",
        bottom: 0,
        transform: [{ translateX: -170 }],
    },
    arrow: {
        width: 16,
        height: 120,
        position: "absolute",
        left: "50%",
        bottom: 0,
        backgroundColor: "#fff0",
        transformOrigin: "50% 100% 0",
    },
    arrowIcon: {
        width: 6,
        height: 10,
        backgroundColor: "#fff",
        position: "absolute",
        left: 5,
        borderRadius: 3,
    },
    totalBmi: {
        position: "absolute",
        left: "50%",
        bottom: 50,
        //backgroundColor:'red',
        height: 40,
        width: 60,
        transform: [{ translateX: -30 }],
        alignItems: "center",
        justifyContent: "center",
    },
    totalBmiTxt: {
        fontSize: 20,
        fontWeight: "600",
        color: "#fff",
    },
    resultTxtBox: {
        backgroundColor: "#97cd17",
        position: "absolute",
        width:140,
        alignItems:"center",
        justifyContent:"center",
        bottom:0,
        transform:[{translateX:-70}],
        left:'50%',
        height:30,
        borderRadius:4
    },
    resulNormal:{
        color:"#fff",
        fontSize:14
    },

    // list 

    list:{
       height:"auto",
       backgroundColor:'#fff0',
       gap:15,
       marginVertical:80
    },
    listEl:{
        backgroundColor:"#3b3b3b",
        height:44,
        borderRadius:4,
        flexDirection:'row',
        alignItems:"center"
    }
});

export default styles;
