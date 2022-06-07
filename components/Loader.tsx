import React, { useEffect, useRef } from "react";
import { ActivityIndicator, Modal, View } from "react-native";
import { transparent } from "react-native-paper/lib/typescript/styles/colors";
import LottieView from 'lottie-react-native';

import { StyleSheet, TouchableOpacity } from 'react-native';


export default function Loader(props:any){

    const {loading} = props;


    const animation = useRef(null);
        useEffect(() => {
            // You can control the ref programmatically, rather than using autoPlay
            animation.current?.play();
        }, []);
    return(
        <Modal transparent={true} animationType={'none'} visible={loading}>
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    {/* <ActivityIndicator style={styles.activityIndicatorWrapper} animating={loading}> */}
                        <LottieView style={{height:1000, width:1000}}
                         ref={animation}
                                source={require('../assets/loadingScreen.json')}
                            autoPlay
                            loop
                            speed={0.5}
                            />
                    {/* </ActivityIndicator> */}
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
        modalBackground:{
            flex:1,
            alignItems:'center',
            flexDirection:'column',
            justifyContent:'space-around',
            backgroundColor:'#fff'
        },
        activityIndicatorWrapper:{
            backgroundColor:'#FFFFFF',
            flexDirection:'column',
            alignItems:'center',
        }

        

    }
    
)