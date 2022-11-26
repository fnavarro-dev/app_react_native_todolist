import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        //por defecto el flex te pone las cosas uno debajo del otro, con row queda al lado del otro
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 50,
      },
    
    input: {
        //estoy haciendo línea inferior de la pantalla
        width: '80%',
        //si no tuviera el 80% me subraya la parte mínima que ocupa, width dinamico
        borderBottomWidth: 1, 
        borderBottomColor: '#9A848F',
        //para hacer un espacio abajo por si hay algo
        paddingVertical: 10,
        },



})

