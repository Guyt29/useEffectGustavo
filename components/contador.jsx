import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Contador(){
    const [contador, setContador] = useState(0)


    function aumentar(){
        setContador(contador + 1)
    }
    function diminuir(){
        setContador(contador - 1)
    }
    useEffect(() =>{
        console.log("Contador foi alterado!")
    },[contador]);
    return (
        <View style={styles.container}>
                    <Text style={styles.texto}>{`${contador}`}</Text>

                    <Button onPress={aumentar}
                            title = "+"
                    /> 
                    
                    <Button onPress={diminuir}
                            title = "-"
                    /> 

                </View>
    );
}

const styles = StyleSheet.create({
container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },

    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },

    texto: {
        fontSize: 20,
        color: "#007AFF",
    },
})