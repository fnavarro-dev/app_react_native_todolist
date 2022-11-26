import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './styles';

const AddItem = ({ task, onHandleTask, onHandleChange }) => {
    return (
        <View style={styles.inputContainer}>
        <TextInput  //AQUÍ PRIMER HOOK USESTATE!!!!!
            style={styles.input}
            value={task} //en carpeta task de components
            placeholder="Escribe tu tarea"
            onChangeText={onHandleChange} //esto me permite que el texto cambie, o va  quedar seteado con el texto ue pille (que es nada, escribes y lo borra sin esto)
        /> 
        <Button disabled={!task} title='Agregar' color='#2D2A32' onPress={onHandleTask}/>
        {/* // el botón Agregar en react tiene que tener titulo, y color.  */}
        {/* onPress null es lo que se ejecuta una vez que se pulsa */}
        </View> 
    )
}

export default AddItem;
        