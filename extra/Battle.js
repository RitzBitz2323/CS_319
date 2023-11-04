import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import player_character from '../assets/player_character.png';
import { damageEnemy } from "../utils/health";


export default class Battle extends React.Component {
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.sky_battle}>
                <Image style={styles.player_battle} source={player_character} />
                <TouchableOpacity
                style={styles.enemy_battle}
                onPress={() => damageEnemy(10)}
                >
                </TouchableOpacity>
            </View>
            <View style={styles.grass_battle} />

           
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
    },
    sky_battle: {
        width:'100%',
        flex: 1,
        color: "#87CEEB",
    },
    grass_battle: {
        width:'100%',
        flex: 2,
        color: "7CFC00",
    },
    enemy_battle:{
     //   alignContent: 'right',
        paddingRight: 30,

    },
    player_battle:{
       // alignContent: 'left',
        paddingLeft: 30,
        
    },

});
