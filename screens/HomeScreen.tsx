import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image,Button, TouchableOpacity,StatusBar } from 'react-native';
import { Card, Divider } from "@rneui/themed";
import { ScrollView } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Ionicons } from '@expo/vector-icons';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";



//functions



// create a component
export default function HomeScreen() {
    const series = [40, 27, 18, 15]
    const numOfRcyc = 40;
    const numOfcomp = 27;
    const numOflandf = 18;
    const numOfhaza= 15;
    const sumOfItems = numOfRcyc + numOfcomp + numOflandf + numOfhaza
    const sliceColor = ['#CE5731','#A5CE31','#3182CE', '#B831CE']
    const pieData = [
        {value: numOflandf, color: '#CE5731', text: (numOflandf/sumOfItems).toString()+'%' },
        {value: numOfRcyc, color: '#A5CE31', text: (numOfRcyc/sumOfItems).toString()+'%' },
        {value: numOfcomp, color: '#3182CE', text: (numOfcomp/sumOfItems).toString()+'%' },
        {value: numOfhaza, color: '#B831CE', text: (numOfhaza/sumOfItems).toString()+'%' },

    ];
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
                <View style = {styles.userName}>
                    <Text style={
                        {fontSize:18,
                         marginBottom:5
                        }}>Hi User,</Text>
                </View>
                
                {/* Card stats -1*/}
                <View style={{backgroundColor:'#F4F4F4',marginHorizontal:0, borderRadius:7}}>
                    <Text style={{marginHorizontal:10, marginTop:15,fontSize:14}}>You're <Text style={{color:'#5ACE31',fontWeight:'bold'}}>{10}</Text> logs away from planting a tree!</Text>
                    <Progress.Bar style={{marginLeft:15,marginVertical:7}} progress={0.9} width={320} color={'#5ACE31'} unfilledColor={'#4D5ACE31'}/>
                    <Text style={{color:'#7C7C7C',marginLeft:145,marginBottom:10}}>You’re planted {20} trees so far</Text>
                </View> 

                <View style={{backgroundColor:'#F4F4F4',marginHorizontal:0, borderRadius:7, marginVertical:20}}>
                    <View style={{flexDirection:'row',alignItems:'center',marginVertical:15}}>
                        <View style={{backgroundColor:'#D9D9D9',height:14,width:14,borderRadius:14/2,marginHorizontal:15}} />
                        <Text>Tip of The Day</Text>
                    </View>

                    <View>
                        {/* <Text style={{marginHorizontal:15,marginBottom:15}}>
                            "Combined materials" are trash.
                        </Text> */}
                        <Text style={{marginHorizontal:15,marginBottom:15}}>
                            Never, ever, throw a plastic bag in the recycling.
                        </Text>
                    </View>

                       
                   
                </View> 
                    
                <View style={{marginHorizontal:0, marginBottom:20}}>
                    <Text style={{fontSize:18, fontWeight:'bold', marginBottom:15}}>My Impact</Text>
                    <View style={{backgroundColor:'#F4F4F4',marginRight:0,borderRadius:7,flexDirection:'row'}}>
                       

                        
                        <View style={{marginLeft:20,marginVertical:15}}>
                            <Text style={{color:'#CE5731',marginVertical:5}}>{40}% Landfill</Text>
                            <Text style={{color:'#A5CE31',marginVertical:5}}>{27}% Recycle</Text>
                            <Text style={{color:'#3182CE',marginVertical:5}}>{18}% Compost</Text>
                            <Text style={{color:'#B831CE',marginVertical:5}}>{15}% Hazardous Waste</Text>

                        </View>
                        <View style={{marginHorizontal:30,marginVertical:15}}>
                        <PieChart
        
                            donut
                            // isThreeD
                            // showText
                            // textColor="black"
                            innerRadius={50}
                            radius={60}
                            // textSize={20}
                            // showTextBackground
                            // textBackgroundRadius={26}
                            data={pieData}
                            centerLabelComponent={() => {
                                return <View style={{alignItems:'center'}}>
                                            <Text style={{fontSize: 20,fontWeight:'bold'}}>100</Text>
                                            <Text style={{fontSize: 10}}>Items Logged</Text>
                                        </View>
                                        ;}}
                            />
                        </View>
                    </View>
                   
                </View>


                
                
                {/* You saved View */}
                <View>
                    <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>You've Saved</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={{borderRadius:3, width:180,height:100,backgroundColor:'#F4F4F4', alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:20, marginBottom:5}}>{18} hr</Text>
                            <Text>Electicity</Text>
                        </View>

                        <View style={{borderRadius:3,width:180,height:100,backgroundColor:'#F4F4F4', alignItems:'center',justifyContent:'center', marginHorizontal:30}}>
                            <Text style={{fontWeight:'bold',fontSize:20,marginBottom:5}}>{5} gal</Text>
                            <Text>Oil</Text>
                        </View>
                    </View>

                    <View style={{borderRadius:3,marginVertical:20, flexDirection:'row'}}>
                        <View style={{width:180,height:100,backgroundColor:'#F4F4F4', alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:20,marginBottom:5}}>{20}</Text>
                            <Text>Trees</Text>
                        </View>

                        <View style={{borderRadius:3,width:180,height:100,backgroundColor:'#F4F4F4', alignItems:'center',justifyContent:'center', marginHorizontal:30}}>
                            <Text style={{fontWeight:'bold',fontSize:20,marginBottom:5}}>{53} gal</Text>
                            <Text>Water</Text>
                        </View>
                    </View>
                </View>
                {/* My Most Popular Scans */}
                <View style={{marginTop:10, marginHorizontal:0}}>
                    <Text style={{fontSize:18, fontWeight:'bold',marginLeft:5}}>My Most Popular Scans</Text>  
                    {/* <Divider style={{marginTop:5,
                                     width:"65%",
                                        }}/> */}
                    <ScrollView horizontal={true}
                                contentContainerStyle={{ width: `${100*1.5}%` }}>
                        
                        {/* use Map() function */}
                        <Card containerStyle={styles.squareCard}>
                            <Image
                            style={{width: 50,
                                height: 50}}
                            resizeMode="cover"
                            source={require("../assets/images/banana.png")}
                            />
                        </Card>
                        <Card containerStyle={styles.squareCard}>
                            <Image
                            style={{width: 50,
                                height: 50}}
                            resizeMode="cover"
                            source={require("../assets/images/cucumber.png")}
                            />
                        </Card>
                        <Card containerStyle={styles.squareCard}>
                            <Image
                            style={{width: 58,
                                height: 58}}
                            resizeMode="cover"
                            source={require("../assets/images/waterbottle.png")}
                            />
                        </Card>
                        <Card containerStyle={styles.squareCard}>
                        <Image
                            style={{width: 58,
                                height: 58}}
                            resizeMode="cover"
                            source={require("../assets/images/bagofchips.png")}
                            />
                        </Card>
                        
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
    
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
    },
    userName: {
        marginHorizontal: 10,
        marginTop:5,
    },
    card_1_context:{
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
    },
    log_number:{
        fontWeight: 'bold',
    },
    trees_record: {
        marginTop:10,
        fontSize: 12,
        color:'#7C7C7C',
    },
    card_homeTop: {  
        justifyContent:'space-evenly',
        backgroundColor: '#e9ecef',
        borderRadius: 7,
    },
    card_left:{
        flex: 1,
    },
    scanButton:{
        marginStart: 215,
            marginTop: 20,
            borderRadius: 5,
            borderWidth: 0,
            width:120,
            height:30,
            display: 'flex',
            flexDirection: 'row',
            backgroundColor:'#e9ecef',
            justifyContent:'center',
            alignItems:'center',
    },
    circleCard:{
        backgroundColor: '#e9ecef',
        width: 60,
        height: 60,
        borderRadius: 100/2,
        justifyContent:'center',
        alignItems:'center',
    },
    squareCard:{
        backgroundColor: '#e9ecef',
        width: 70,
        height: 70,
        borderRadius: 3,
        justifyContent:'center',
        alignItems:'center',
    },
    squareCard_hist:{
        backgroundColor: '#e9ecef',
        width: 95,
        height: 70,
        borderRadius: 3,
        justifyContent:'center',
        alignItems:'center',
    }
});

