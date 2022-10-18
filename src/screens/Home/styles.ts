import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainPortion: {
        flex: 1,
        backgroundColor: '#0c0d0c'
    },
    upperPortion: {
        flex: 1,
        backgroundColor: '#1e1f1e',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        justifyContent: 'space-between'
    },
    lowerPortion: {
        flex: 2,
        backgroundColor: '#0c0d0c'
    },
    title: {
        color: 'white',
        fontSize: 40,
        paddingLeft: 30,
        paddingTop: 40
    },
    valueText: {
        color: 'white',
        fontSize: 40,
        textAlign: 'right',
        padding: 30
    },
    calcBtnsLayout: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    resultStyle: {
        flex: 1,
        backgroundColor: 'red',
        borderRadius: 10
    }
});