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
     
        
        // estilos a crear son: ListContainer, listTitle, listItemContainer, listItemTitle
        listContainer: {
            marginHorizontal:20,
            scrollbarindicator:false,
        },
        listTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
            color: '#212121',
        },
        

        // ESTILOS DE LOS MODALES PARA BORRAR LAS TAREAS

        modalContainer: {
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          paddingVertical: 20,
          marginHorizontal: 80,

        },
        modalTitle: {
          fontSize: 20,
          fontWight: 'bold',
          marginBottom: 10,

        },
        modalDetailContainer: {  //tarea seleccionada
          paddingVertical: 20,
          justifyContent: 'center',
          alignItems: 'center',
        },
        modalDetailText: {
          fontSize: 14,
          color: '#212121',
        },
        selectedTask: {
          fontSize: 14,
          color: '#212121',
          fontWeight: 'bold',
          paddingVertical: 20,

        },
        modalButtonContainer: {
          width: '70%', //aquí ocupó un background color para ver que los botones ocupaban poco espacio por defecto
          flexDirection: 'row', //poner los botones uno al lado del otro
          justifyContent: 'space-around', //para que se separen los botones
          marginHorizontal: 20, 
          
        },

    
        
      }
    );