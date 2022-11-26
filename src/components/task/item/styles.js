import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listItemContainer: {
        paddingVertical: 20,
        backgroundColor: '#2D2A32',
        borderRadius: 5,
        //abajo le pone sombra generada en https://ethercreative.github.io/react-native-shadow-generator/
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        justifyContent: 'center',
        marginVertical: 5,
    },  
    listItemTitle: {
        fontSize: 14,
        color: 'white',
        paddingHorizontal: 10,
        justifyContent: 'center',
    },

});