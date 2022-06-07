import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { ParamList, RootStackScreenProps } from '../types';
import React from "react";
import { Card, Divider } from '@rneui/base';
import { RouteProp, useRoute } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

export default function ItemLogged ({ navigation }: RootStackScreenProps<'ItemLogged'>) {
    return (
        <View style={{height:1000,alignItems:'center',justifyContent:'center'}}>
            <Image
                style={{width:200, height:200}}
                source={require('../assets/images/logged.png')}
            />
            {/* <LottieView style={{height:200, width:200}}
                            source={require('../assets/logged.json')}
                            autoPlay
                            
                            /> */}
            <Text style={{fontWeight:'bold',marginTop:20,fontSize:30}}>Item Logged!</Text>

            <View style={{marginTop:40,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity style={{borderRadius:6,marginTop:10,marginBottom: 10,backgroundColor:'#83BF4F',height:40,width:300,alignItems:'center',justifyContent:'center'}} 
                          onPress={() =>
                            navigation.popToTop()}>
                            <Text style={{textAlign:'center',color:'#fff'}}>Continue Logging</Text>
                        </TouchableOpacity>

                        {/* <TouchableOpacity style={{borderRadius:6,marginTop:10,marginBottom: 20,backgroundColor:'#fff',height:40,width:300,alignItems:'center',justifyContent:'center',borderColor:'#E2E8F0',borderWidth:1}} 
                            onPress={() =>
                                navigation.navigate('TabTwo')}>
                            <Text style={{textAlign:'center',color:'#000'}}></Text>
                        </TouchableOpacity>  */}
                       </View>
        </View>
    )
}