import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button,SafeAreaView, StyleSheet, TextInput, Text, View } from 'react-native';

export default function App() {
  const[materia_uno, setMateriaUno]= useState()
  const[materia_dos, setMateriaDos]= useState()
  const[materia_tres, setMateriaTres]= useState()
  const getMaterias=(materia_uno,materia_dos,materia_tres) =>{
    return materia_uno + "" + materia_dos + "" + materia_tres;
  }

  return (
   <View style={styles.container}>
    <StatusBar style="auto"/>
      <TextInput
        style={styles.inputText}
       placeholder="Introduce la primera Materia"
       onChangeText={setMateriaUno}
       value={materia_uno}
      />
     <TextInput
        style={styles.inputText}
       placeholder="Introduce la segunda Materia"
       onChangeText={setMateriaDos}
       value={materia_dos}
      />
        <TextInput
        style={styles.inputText}
       placeholder="Introduce la tercera Materia"
       onChangeText={setMateriaTres}
       value={materia_tres}
      />
      
      <Button title="Carga de Materias" onePress={getMaterias} />
      <Text style={styles.getMaterias}></Text>
     
   </View>
  );
 
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText:{
    width:"50%",
    height:40,
    borderWidth:1,
    borderColor: '#FF0000',
    marginVertical:15
  }
});
