# Disposing-It
A mobile application that allows users to scan items they want to dispose of with their camera. With AR + AI, the items will be detected, and tell the user how to dispose of their item, basd on Tensorflow.js/ MobileNet and AR frameworks for React Native

## Project vision statement
“To increase the general knowledge and frequency of proper disposal habits”

## Demo

![](https://github.com/longjl1/Disposing-It/blob/main/demo.gif)
![](https://github.com/longjl1/Disposing-It/blob/main/demo_2.gif)

## Set up

Clone this repository and ```cd ```into the directory.

In the terminal run:

Use the npm or yarn to install

```bash
yarn install
```

or

```bash
npm install
```
## Example code
### Create a TensorFlow camera (live detection)
View the code in ScanItem.tsx 
 ```ruby
import { Camera } from 'expo-camera';
import * as tf from "@tensorflow/tfjs";
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';
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
 ```

### Use a modal for the live detection
```ruby
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
```
## Reference
[js.tensorflow](https://js.tensorflow.org/api_react_native/0.2.1/)

## Usage

```yarn ios``` -- (react-native run-ios) Build the iOS App (requires a MacOS computer).

```yarn android``` -- (react-native run-android) Build the Android App.
<!-- yarn web -- (expo start:web) Run the website in your browser. -->

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
