import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import CardComponent from "../components/CardComponent";
import {responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
export default function BuildingScreen() {
    return (

        <View style={styles.container}>
            {/*<HeaderComponent/>*/}
            <HeaderComponent/>
            <Image
                style={styles.imgFlat}
                source={require('../assets/images/building-illustration.png')}
                resizeMode="contain"
            />
            <ScrollView style={{flex:1}}>

                <CardComponent text={"Building Number"} number={"Building Number"}/>
                <CardComponent text={"Building Number"} number={"Building Number"}/>
            </ScrollView>
        </View>
    );
}

FlatScreen.navigationOptions = {
    header: null,
};


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        flexDirection:'column',

    },
    imgFlat:{
        flex:1,
        alignSelf: "center",
        width:responsiveWidth(80),
        justifyContent:"center",
    },

});