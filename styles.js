import { StyleSheet } from 'react-native';

//aquí hacemos los estilos dentro del javascript, aquí ya no es background-color, es backgroundColor
export const styles = StyleSheet.create({
    //existe el StyleSheet.create, el StyleSheet.otracosa. Esto en Web es el CSS, acá se compila para poder interpretar al compnente nativo del teléfono
      container: {
        flex: 1,
    //entre comilla del o al 1 significa 0 al 100%
    //flex uno dice que ocupa por defecto todo el espacio disponible 
        backgroundColor: '#e1bc29',
      },
    
      // aquí en el input container está el input y el container 
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
        
        // estilos a crear son: ListContainer, listTitle, listItemContainer, listItemTitle
        listContainer: {
            marginHorizontal:20,
        },
        listTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
            color: '#212121',
        },
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

    
        
      }
    );