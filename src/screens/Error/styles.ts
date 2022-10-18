import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainPortion: {
        flex: 1,
        backgroundColor: '#0c0d0c',
        alignItems: 'center',
        justifyContent: 'center'
    },
    errText: {
        color: 'white',
        fontSize: 50,
        fontWeight: '500',
        textAlign: 'center'
    },
    descText: {
        color: 'white',
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center'
    },
    btnBack: {
        backgroundColor: '#2E8BC0',
        borderRadius: 10,
        marginTop: 50
    },
    btnText: {
        color: 'white',
        paddingHorizontal: 40,
        paddingVertical: 20,
        fontSize: 20,
        fontWeight: '600'
    }
});