import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button,SafeAreaView, StyleSheet, TextInput, Text, View } from 'react-native';

export default function App() {
  const[materiaUno, setMateriaUno]= useState("Ingrese materia uno")
  const[materiaDos, setMateriaDos]= useState("Ingrese materia dos")
  const[materiaTres, setMateriaTres]= useState("Ingrse materia tres")
  const[isActivo, setActivo]=useState(true)
  // const getMaterias=(materia_uno,materia_dos,materia_tres) =>{
  //   return materia_uno + "" + materia_dos + "" + materia_tres;
  // }
const Materia=(props)=> {
  return(
    <View>
      <Text>{props.nombre}</Text>
    </View>
  )
};
  
return (
   <View style={styles.container}>
      <TextInput
        style={styles.inputText}
       placeholder="Introduce la primera Materia"
       onChangeText={(newText)=>setMateriaUno(newText)}
       value={materiaUno}
      />
     <TextInput
        style={styles.inputText}
       placeholder="Introduce la segunda Materia"
       onChangeText={(newText)=>setMateriaDos(newText)}
       value={materiaDos}
      />
        <TextInput
        style={styles.inputText}
       placeholder="Introduce la tercera Materia"
       onChangeText={(newText)=>setMateriaTres(newText)}
       value={materiaTres}
      />
      <Text>Carga de Materias</Text>
      <Materia nombre = {materiaUno}/>
      <Materia nombre = {materiaDos}/>
      <Materia nombre = {materiaTres}/>
      <Button 
      onPress={()=>{
        setActivo(false );
      }}
      disabled={!isActivo}
      title={isActivo ? "Carga de Materias" : " " + materiaUno + " ," + materiaDos + " ," + materiaTres}
      />

      <Text>Ismael Zarate</Text>
      <StatusBar style="auto"/>
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
