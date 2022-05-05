import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from '@tensorflow-models/mobilenet';
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';
import LoadingMedel from '../components/LoadingScreen/LoadingModel'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-placeholder";

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
const model_1 = tf.loadLayersModel('../Waste_Segregation-master/model_converted_js/model.json');
export default function App() {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [detections, setDetections] = useState<string[]>([]);
  const [net, setNet] = useState<mobilenet.MobileNet>();
  const [recyclable, setRecyclable] = useState(false);

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
              console.log(objects);
              
              //demo
              objects.forEach(Object => {
                if (Object.className.includes('notebook'|| 'laptop')){
                  setRecyclable(true);
                }
              });
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
  
  return (
      <View style={styles.container}>
       
              <View style={recyclable? styles.cameraContainerR : styles.cameraContainer}>
                  <TensorCamera 
                      style={styles.camera} 
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
            
              <View style={styles.text}>
                {detections.map((detection, index) => 
                    <Text key={index}>{detection}</Text>
                )}
              </View>

              <TouchableOpacity
                  onPress={null}
                  style={{
                    flex:0.1,
                    width: 130,
                    marginTop:20,
                    marginBottom: 30,
                    borderRadius: 4,
                    backgroundColor: '#D1D1D6',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 40
                  }}
              >
              <Text>Log Item</Text> 
              </TouchableOpacity>
              
              <TouchableOpacity
                style={{
                  flex:0.1,
                  marginBottom: -2,
                }}>
                <Text>Can't detect your item? <Text style={{color: '#007AFF'}}>Click Here!</Text></Text> 
              </TouchableOpacity>

           
            
            

      
      
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
    flex:0.2,
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
    
    justifyContent: "center",
    alignItems: "center",
    height: 336,
    width: 336,
    overflow: 'hidden',
    borderRadius: 12,
    backgroundColor: '#8E8E93',
  },

  cameraContainerR: {
    
    justifyContent: "center",
    alignItems: "center",
    height: 336,
    width: 336,
    overflow: 'hidden',
    borderRadius: 7,
    backgroundColor: '#30D158',
  }
});
