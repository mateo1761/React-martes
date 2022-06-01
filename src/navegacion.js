import React from "react";
import {Text, View, StyleSheet} from "react-native";
//Importar botones de navegacion
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//importar contenedor las pantallas
import { NavigationContainer } from "@react-navigation/native";
//importar pantallas
import InicioPantalla from "./pantalla/inicio";
import BombilloPantalla from "./pantalla/bombillo";
import PrestamosPantalla from "./pantalla/prestamos";

//Crear objeto tabs
const tab = createBottomTabNavigator();
//Funcion para crear los botones de navegacion
function myTabs(){
    return(
        <tab.Navigator>
            <tab.Screen name="Inicio" component={InicioPantalla} />
            <tab.Screen name="bombillo" component={BombilloPantalla} />
            <tab.Screen name="prestamos" component={PrestamosPantalla} />
        </tab.Navigator>
    )
}

//Funcion para colocar los botones de navegacion en un contenedor
export default function Navegacion(){
    return(
        <NavigationContainer>
            <myTabs/>
        </NavigationContainer>
    );
}