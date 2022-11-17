// import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
//el de arriba era cuando el style.js estaba abajo mezclado
import { useState } from 'react'; 
//importamos el useState para hacer el hook
import {Text, View, TextInput, Button } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [task, setTask] = useState('');
  //declaramos un string. setTask se antepone el set porque la variable es Tarea de la lista Todo
  const [taskList, setTaskList] = useState([]);

  const onHandleTask = () => { //este lo accionamos al pulsar ADD, linea 26
    setTaskList ((prevtaskList) => [...prevtaskList, {id: Math.random().toString(), value: task}]) //aquí está entre corchetes, por eso arriba igual
    setTask(''); // esta parte al presionar Add resetea y borra después de guardar el valor en la constante / Entrecomillas por eso va igual arriba entrecomillas
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput  //AQUÍ PRIMER HOOK USESTATE!!!!!
        style={styles.input}
        value={task}
        onChangeText={text => setTask(text)} //esto me permite que el texto cambie, o va  quedar seteado con el texto ue pille (que es nada, escribes y lo borra sin esto)
        /> 
        <Button title='Add' color='#2D2A32' onPress={onHandleTask}/>
        {/* // el botón en react tiene que tener titulo, y color.  */}
        {/* onPress null es loq ue se ejecuta una vez que se pulsa */}
      </View> 

        <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Todo List</Text>
        {taskList.map((item) => ( //lista TODO con sus estilos
            <View key={item.id} style={styles.listItemContainer}> 
              <Text style={styles.listItemTitle}>{item.value}</Text>
            </View>
        ))}
        </View>
      
    </View>
  );
}
/* //comentado porque crearemos un archivo js con los estilos en un archivo aparte
//aquí hacemos los estilos dentro del javascript, aquí ya no es background-color, es backgroundColor
const styles = StyleSheet.create({
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
      borderBottomWidth: 1, 
      borderBottomColor: '#9A848F',
      //para hacer un espacio abajo por si hay algo
      paddingVertical: 10,
    }
  }
);

*/