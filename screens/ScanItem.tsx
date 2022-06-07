import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Platform, ScrollView, TouchableOpacity, Modal,Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from '@tensorflow-models/mobilenet';
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';
import LoadingMedel from '../components/LoadingScreen/LoadingModel'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotFoundScreen from './NotFoundScreen';
import ModalScreen from './ModalScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../navigation';
import * as scanlib from "../components/scanlib.json";
import { Avatar } from 'react-native-elements';

import { Modalize } from 'react-native-modalize';
import { Card, Divider } from '@rneui/base';
import { Chip } from "@rneui/themed";
import { RootTabScreenProps } from '../types';



const recyclableItem = ['plastic bottle','water bottle','bottle','paper','frying pan','notebook','laptop','Glass bottle','glass','Plastic bottle','Aluminium','Tin','carton'];
const composingItem = ['food','apple','banana','egg','paper towels',"cucumber"];
const landfilledItem = ['Rubber-soled', 'clothing','shirt','sweatshirt','shoe','handbag','packet'];

const textureDims = Platform.OS === 'ios' ?
  {
    height: 1920,
    width: 1080,
  } :
   {
    height: 1200,
    width: 1600,
  };

let frame = 0;
const computeRecognitionEveryNFrames = 60;

const TensorCamera = cameraWithTensors(Camera);

const initialiseTensorflow = async () => {
  await tf.ready();
  tf.getBackend();
}
//const model_1 = tf.loadLayersModel('../Waste_Segregation-master/model_converted_js/model.json');
export default function App({navigation}: RootTabScreenProps<'TabTwo'>) {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [detections, setDetections] = useState<string[]>([]);
  const [net, setNet] = useState<mobilenet.MobileNet>();
  const [recyclable, setRecyclable] = useState(false);
  const [category, setCategory] = useState('Not detected');
  const cameraRef = useRef<Camera>();
  const [theItemName,setName] = useState('kk');
  const [des, setDes] = useState("");
  const [doDetail, setDo] = useState("");
  const [tips, setTips] = useState("");
  const [icon,setIcon] = useState("");
  
  //log scan 
  const modalizeRef = useRef<Modalize>(null);
  const [templst,setTemplst]=useState([]);
  const [tempCate,setTempCate]=useState([]);

  const onOpen = async () => {
    // modalizeRef.current?.open();
    setTemplst(theItemName);
    setTempCate(category);
    if (scanlib.recyclable.category.includes(category)){
      // setDes('Recycle clean bottles, cans,paper, and cardboard.');
      scanlib.recyclable.class.can.id.forEach(id => {
        if(theItemName.includes(id)){
          setDo(scanlib.recyclable.class.can.rule);
          setTips(scanlib.recyclable.class.can.tips);
          setIcon(scanlib.recyclable.class.can.icon);
        }
      });
      scanlib.recyclable.class.carton.id.forEach(id => {
        if(theItemName.includes(id)){
          setDo(scanlib.recyclable.class.carton.rule);
          setTips(scanlib.recyclable.class.carton.tips);
          setIcon(scanlib.recyclable.class.carton.icon);
        }
      });
      scanlib.recyclable.class.glass.id.forEach(id => {
        if(theItemName.includes(id)){
          setDo(scanlib.recyclable.class.glass.rule);
          setTips(scanlib.recyclable.class.glass.tips);
          setIcon(scanlib.recyclable.class.glass.icon);
        }
      });
      scanlib.recyclable.class.paper.id.forEach(id => {
        if(theItemName.includes(id)){
          setDo(scanlib.recyclable.class.paper.rule);
          setTips(scanlib.recyclable.class.paper.tips);
          setIcon(scanlib.recyclable.class.paper.icon);
        }
      });
      scanlib.recyclable.class.plastic.id.forEach(id => {
        if(theItemName.includes(id)){
          setDo(scanlib.recyclable.class.plastic.rule);
          setTips(scanlib.recyclable.class.plastic.tips);
          setIcon(scanlib.recyclable.class.plastic.icon);
        }
      });
      // scanlib.recyclable.class.plastic.id.forEach(id => {
      //   if(theItemName.includes(id)){
      //     setDo(scanlib.recyclable.class.plastic.rule);
      //     setTips(scanlib.recyclable.class.plastic.tips);
      //     setIcon(scanlib.recyclable.class.plastic.icon);
      //   }
      // });
      
    }
    if (scanlib.landfill.category.includes(category)){
      // setDes("Acceptable Materials for Landfill: Plastic Bags, Paper Cups, Wrappers & Packets, Frozen Food Boxes, Styrofoam, Neon & Goldenrod Paper, Ceramics, Mirrors, Lightbulbs, & Glass Panes, Lab Glass & Pyrex, etc.");
      scanlib.landfill.class.plastic_bag.id.forEach(id => {
        if(theItemName.includes(id)){
          setDo(scanlib.landfill.class.plastic_bag.rule);
          setTips(scanlib.landfill.class.plastic_bag.tips);
          setIcon(scanlib.landfill.class.plastic_bag.icon);
        }
      });
    }
    if (scanlib.compost.category.includes(category)){
      // setDes("Compost is organic material that can be added to soil to help plants grow. Food scraps and yard waste together currently make up more than 30 percent of what we throw away, and could be composted instead. Making compost keeps these materials out of landfills where they take up space and release methane, a potent greenhouse gas.");
      scanlib.compost.class.food.id.forEach(id => {
        if(theItemName.includes(id)){
          setDo(scanlib.compost.class.food.rule);
          setTips(scanlib.compost.class.food.tips);
          setIcon(scanlib.compost.class.food.icon);
        }
      });

      scanlib.compost.class.banana.id.forEach(id => {
        if(theItemName.includes(id)){
          setDo(scanlib.compost.class.banana.rule);
          setTips(scanlib.compost.class.banana.tips);
          setIcon(scanlib.compost.class.banana.icon);
        }
      });
    }

    // console.log(scanlib);
  };



  

  function popUpcard(){
  
    return (
      <Modalize 
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
          ref={modalizeRef}
          adjustToContentHeight={true}
          HeaderComponent={

            
            <View style={{alignItems:'center',justifyContent:'center'}}>
              {/* <Avatar size="medium" rounded icon={{ name: 'home' }} 
              containerStyle={{ marginTop: 30}}
              /> */}
              <Text style={styles.popUpCardTitle}>
                {templst}
              </Text>
            </View>
            
          }
          // modalHeight={600}
          // closeSnapPointStraightEnabled={true}
          snapPoint={280}
          panGestureEnabled={true}
          onClose={()=>{
            // setDes('');
            // setDo('');
            // setTips('');
          }}
          modalStyle={{backgroundColor:'#EDEDED'}}
        >
      </Modalize>
    );
  }
  
  const handleCameraStream = (images: IterableIterator<tf.Tensor3D>) => {
    const loop = async () => {
      if(net) {
        if(frame % computeRecognitionEveryNFrames === 0){
          const nextImageTensor = images.next().value;
          setRecyclable(false);
          if(nextImageTensor){
            const objects = await net.classify(nextImageTensor);
            if(objects && objects.length > 0){

              setDetections(objects.map(object => object.className));
              // console.log(objects);
              
              //demo
              
                // if (objects[0].className.includes('nematode'||'tench')){
                //   setRecyclable(true);
                //   setCategory('recyclable');
                // }
                recyclableItem.forEach(element => {
                  if(objects[0].className.includes(element)){
                    setRecyclable(true);
                    setCategory('Recyclable');
                    setDes('Recycle clean bottles, cans,paper, and cardboard.');
                    
                  }
                });
                
                composingItem.forEach(element => {
                  if(objects[0].className.includes(element)){
                    setRecyclable(true);
                    setCategory('Composting');
                    setDes("Compost is organic material that can be added to soil to help plants grow. Food scraps and yard waste together currently make up more than 30 percent of what we throw away, and could be composted instead. Making compost keeps these materials out of landfills where they take up space and release methane, a potent greenhouse gas.");
                  }
                });

                landfilledItem.forEach(element => {
                  if(objects[0].className.includes(element)){
                    setRecyclable(true);
                    setCategory('Landfill');
                    setDes("Acceptable Materials for Landfill: Plastic Bags, Paper Cups, Wrappers & Packets, Frozen Food Boxes, Styrofoam, Neon & Goldenrod Paper, Ceramics, Mirrors, Lightbulbs, & Glass Panes, Lab Glass & Pyrex, etc.");
                  }
                });

               setName(objects[0].className);
               
              // });
            }
            
            tf.dispose([nextImageTensor]);
    
          }
        }
        frame += 1;
        frame = frame % computeRecognitionEveryNFrames;
      }

      requestAnimationFrame(loop);
    }
    loop();
  }
  function nav_1 (){
    console.log(theItemName);
    console.log(doDetail);
    navigation.navigate('Test_1', {
      templst: theItemName,
      tempCate: category, 
      doDetail:doDetail, 
      tips:tips, 
      des:des,
      icon:icon})
  };
   
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      await initialiseTensorflow();
      setNet(await mobilenet.load());
      
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if(!net){
    return <LoadingMedel />;
    // return <View />;
  }
 
 
 const onPress = () => {
  // onOpen();
  onOpen();
  console.log(templst);
  nav_1();
 }
  return (
      <View style={styles.container}>
        {/* <Modal transparent  visible={true} /> */}
        {popUpcard()}
        
              <View style={{marginTop:120}}>
                {<Text style={{color:'#7C7C7C',}}>{detections[0]}: {category}</Text>}
              </View>
              <View style={recyclable? styles.cameraContainerR : styles.cameraContainer}>
                  <TensorCamera 
                      style={styles.camera} 
                      ref={cameraRef}
                      onReady={handleCameraStream}
                      type={Camera.Constants.Type.back}
                      cameraTextureHeight={textureDims.height}
                      cameraTextureWidth={textureDims.width}
                      resizeHeight={200}
                      resizeWidth={152}
                      resizeDepth={3}
                      autorender={true}
                      useCustomShadersToResize = {false}
                /> 
              </View>
              {/* <View style={styles.text}>
                {<Text style={{color:'#7C7C7C',}}>{detections[0]}: {category}</Text>}
              </View> */}
             
              {recyclable? <TouchableOpacity
                  onPress={onPress}
                    
                  style={{marginLeft: 200,marginVertical:15, backgroundColor:'#A5CE31', height:25, width:120, alignItems:'center',borderRadius:6}}
              ><Text style={{color:'#fff',marginVertical:5}}>View Details  > </Text>
              </TouchableOpacity> : <View></View>}
             
             
              {recyclable? 
              
              <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ItemLogged')}
                  style={styles.logScan}
              >
                <View>
                  <Text style={{color:'#fff'}}>Log Scan</Text>
                </View>
              </TouchableOpacity> :
              
              <TouchableOpacity
                // onPress={() =>
                // navigation.navigate('Test_1', { name: 'Jane' })}
                  style={{
                  height: 40,
                  marginTop:150,
                  marginBottom: 30,
                }}>
                <Text>Can't detect your item? <Text style={{color: '#007AFF'}}>Click Here!</Text></Text> 
              </TouchableOpacity> 
                
              }
              
              
              
       

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
  text: {
    
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
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 336,
    width: 336,
    overflow: 'hidden',
    borderRadius: 12,
    backgroundColor: '#8E8E93',
  },

  cameraContainerR: {
    marginTop: 0,
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
    width: 350,
    marginTop:50,
    marginBottom: 40,
    borderRadius: 6,
    marginHorizontal:32,
    backgroundColor: '#83BF4F',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
  },
  popUpCardTitle:{
    fontSize: 26, 
    fontWeight: 'bold',
    marginTop: 30, 
    marginBottom: 12,
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
