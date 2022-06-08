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
 ''' 
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
 '''


## Usage

```yarn ios``` -- (react-native run-ios) Build the iOS App (requires a MacOS computer).

```yarn android``` -- (react-native run-android) Build the Android App.
<!-- yarn web -- (expo start:web) Run the website in your browser. -->

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
