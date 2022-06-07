import { ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { ParamList, RootStackScreenProps } from '../types';
import React, { useState } from "react";
import { Card, Divider } from '@rneui/base';
import { RouteProp, useRoute } from '@react-navigation/native';

export default function Test_1 ({ navigation }: RootStackScreenProps<'Test_1'>) {
    
  
  const [sample,setSample]= useState(false);
  const demo=['banana','water bottle','packet','cucumber'];
  const [location,setLocate] = useState('');
  const route = useRoute<RouteProp<ParamList, 'Detail'>>();
  const ic = route.params.icon;
  console.log(ic);

  // demo.forEach(element => {
  //   if(element.includes(route.params.templst)){
  //     setSample(true);
  //   }
  // });

 

    return (
      <ScrollView style={{backgroundColor:'#fff'}}>
        {/* <Avatar size="medium" rounded icon={{ name: 'home' }} 
        containerStyle={{ marginTop: 30}}
        /> */}
        <View style={{backgroundColor:'#F9FFE8'}}>
          <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:50,marginTop:40,backgroundColor:'#F9FFE8',marginBottom:30}}>
            <View style={{height:120,width:120,borderRadius:120/2,borderColor:'#000',borderWidth:0.5,
                backgroundColor:'#F9FFE8',justifyContent:'center',alignItems:'center'}}>
             {/* {<Image style={{height:70,width:70}}source={require('../assets/images/bagofchips.png')}/>} */}
            </View>
            <View style={{backgroundColor:'#F9FFE8'}}>
              <Text style={styles.popUpCardTitle}>
                {route.params.templst}
              </Text>
              <Text style={{color:'#7C7C7C',textAlign:'center',fontSize:16}}>{route.params.tempCate}</Text>
            </View>
          </View>
        </View>
        
        <View>
        <View style={{justifyContent:'center',alignContent:'center',backgroundColor:'#C1DD71',height:40}}>
          {/* <Text style={{color:'#7C7C7C',textAlign:'left',marginHorizontal:10,marginVertical:10,marginLeft:20}}>Description of item: {route.params.des}</Text> */}
          <Text style={{color:'#000',textAlign:'center',fontSize: 22, fontWeight:'bold'}}>Recycle It!</Text>
          
        </View>
        
        {/* {route.params.doDetail!=""?   */}
        
        <View style={{display: 'flex',
              flexDirection: 'row',
              justifyContent:'center',
              flex:1,
              marginHorizontal:15,
              marginTop:20}}>
          <View style={{backgroundColor:'#fff',borderRadius:8,marginBottom:10,width:160,flex:1}}>
            <View style={{flexDirection:'row',marginLeft:10,marginTop:10,marginBottom:5,}}>
              <Image style = {{height:15,width: 15,marginRight:10}}source={require('../assets/images/do.png')}/>
              <Text style={{color:'#5ACE31',fontWeight:'bold'}}>Do:</Text>
            </View>
            
            <Text style={{marginHorizontal:10,marginBottom:10}}>{route.params.doDetail}</Text> 
          </View>
          <View style={{backgroundColor:'#fff',borderRadius:8,marginBottom:10,marginLeft:10,width:160,flex:1}}>
          <View style={{flexDirection:'row',marginLeft:10,marginTop:10,marginBottom:5,}}>
              <Image style = {{height:15,width: 15,marginRight:10}}source={require('../assets/images/dont.png')}/>
              <Text style={{color:'#CF152D',fontWeight:'bold'}}>Don't:</Text>
            </View>
           
            <Text style={{marginHorizontal:10,marginBottom:10}}>{route.params.tips}</Text> 
          </View>

        </View> 

        <View style={{display: 'flex',
        // flexDirection: 'row',
        }}>
          <Text style={{marginLeft:10,marginTop:10, fontWeight:'bold',fontSize: 16}}>Where Can I Dispose This? </Text>
          <ScrollView contentContainerStyle={{display: 'flex',
                                  flexDirection: 'row',
                                  
                                  
                                  marginTop:20}}>
                          {/* Card */}
                            <View style={{width:210,backgroundColor:"#F4F4F4", marginHorizontal:30,borderRadius:9}}>
                              <View style={{backgroundColor:"#A3A3A3",height:110}} />
                              <Text style={{fontWeight:'bold',margin:8,fontSize:14}}>
                                E-Waste Inc.
                              </Text>
                              <Text style={{marginBottom: 10, marginRight:10,marginLeft:10,fontSize:12, color:'#6D6D6D'}}>
                                11900 South St, Ste 106
                                Cerritos, CA 90703
                              </Text>
                            </View>

                            <View style={{width:210,backgroundColor:"#F4F4F4",borderRadius:9}}>
                              <View style={{backgroundColor:"#A3A3A3",height:110}} />
                              <Text style={{fontWeight:'bold',margin:8,fontSize:14}}>
                                E-Waste Inc.
                              </Text>
                              <Text style={{marginBottom: 10, marginRight:10,marginLeft:10,fontSize:12, color:'#6D6D6D'}}>
                                11900 South St, Ste 106
                                Cerritos, CA 90703
                              </Text>
                            </View>
                             
                       </ScrollView>
                       
                       {/* <TouchableOpacity style={{marginTop:20,}} onPress={null}>
                          <Text style={{textDecorationLine:'underline',textAlign:'center'}}>Find Nearby Disposal Sites</Text>
                       </TouchableOpacity>    */}
                       
                       <View style={{marginTop:40,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity style={{borderRadius:6,marginTop:10,marginBottom: 10,backgroundColor:'#83BF4F',height:40,width:300,alignItems:'center',justifyContent:'center'}} 
                          onPress={() =>
                            navigation.navigate('ItemLogged')}>
                            <Text style={{textAlign:'center',color:'#fff'}}>Log Item</Text>
                        </TouchableOpacity> 

                        <TouchableOpacity style={{borderRadius:6,marginTop:10,marginBottom: 20,backgroundColor:'#fff',height:40,width:300,alignItems:'center',justifyContent:'center',borderColor:'#E2E8F0',borderWidth:1}} 
                          onPress={()=>
                            navigation.goBack()}>
                            <Text style={{textAlign:'center',color:'#000'}}>Cancel</Text>
                        </TouchableOpacity> 
                       </View>
        

        </View>
        </View>
     </ScrollView>
     
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    
    text: {
      marginTop: 10,
      alignItems: 'center',
      
    },
  
    camera: {
      width: 330,
      height: 330,
      justifyContent: "center",
      alignItems: "center",
      position: 'absolute',
      // backgroundColor: '#fff'
    },
  
    cameraContainer: {
      marginTop: 150,
      justifyContent: "center",
      alignItems: "center",
      height: 336,
      width: 336,
      overflow: 'hidden',
      borderRadius: 12,
      backgroundColor: '#8E8E93',
    },
  
    cameraContainerR: {
      marginTop: 150,
      justifyContent: "center",
      alignItems: "center",
      height: 336,
      width: 336,
      overflow: 'hidden',
      borderRadius: 7,
      backgroundColor: '#30D158',
    },
    logScan:{
      position:'relative',
      width: 130,
      marginTop:100,
      marginBottom: 40,
      borderRadius: 4,
      backgroundColor: '#D1D1D6',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40
    },
    popUpCardTitle:{
      fontSize: 24, 
      fontWeight: 'bold',
      marginHorizontal: 40,
      textAlign: 'center',
      
    },
    circleCard:{
      backgroundColor: '#e9ecef',
      width: 60,
      height: 60,
      borderRadius: 100/2,
      justifyContent:'center',
      alignItems:'center',
  },
  trees_record: {
    marginTop:10,
    fontSize: 12,
    color:'#7C7C7C',
  },
  });