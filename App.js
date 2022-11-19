// import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
//el de arriba era cuando el style.js estaba abajo mezclado
import { useState } from 'react'; 
//importamos el useState para hacer el hook
import {Text, View, TextInput, Button, FlatList } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [task, setTask] = useState('');
  //declaramos un string. setTask se antepone el set porque la variable es Tarea de la lista Todo
  const [taskList, setTaskList] = useState([]);

  const onHandleTask = () => { //este lo accionamos al pulsar ADD, linea 26 // Abajo invierte para que el orden que se agregan las tarjetas, el mathrandom valor y despues el previaTaskList
    setTaskList ((prevtaskList) => [...prevtaskList, {id: Math.random().toString(), value: task}]) //aquí está entre corchetes, por eso arriba igual
    setTask(''); // esta parte al presionar Add resetea y borra después de guardar el valor en la constante / Entrecomillas por eso va igual arriba entrecomillas
  }

  const getRandomBackgroundColor = () => {  //esto es para poner color random a la lista
    const colors = ['blue', 'red', '#212121'];
    return colors[Math.floor(Math.random() * colors.length)]; //con esto la lista tiene un color aleatorio
  }
  //ESTA VARIABLE ES DEL FLATLIST
  
  const renderItem = ({item}) => (
    <View style={[styles.listItemContainer]}> 
      <Text style={styles.listItemTitle}>'{item.value}'</Text>
    </View>
  )
  
  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput  //AQUÍ PRIMER HOOK USESTATE!!!!!
        style={styles.input}
        value={task}
        placeholder="Escribe tu tarea"
        onChangeText={text => setTask(text)} //esto me permite que el texto cambie, o va  quedar seteado con el texto ue pille (que es nada, escribes y lo borra sin esto)
        /> 
        <Button disabled={!task} title='Add' color='#2D2A32' onPress={onHandleTask}/>
        {/* // el botón en react tiene que tener titulo, y color.  */}
        {/* onPress null es loq ue se ejecuta una vez que se pulsa */}
      </View> 

      <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Todo List</Text>
      </View>
          
          <FlatList //El flatlist va a reemplazar el maplist
          style={styles.listContainer}
          data={taskList}
          renderItem={renderItem} //que va a renderizar? lo de arriba const renderItem
          keyExtractor={item => item.id} //no va un toString() porque ya es un string
          />
        
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