import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
export default function DisposalSites() {

  const LOCATION_TASK_NAME = 'background-location-task';
    // TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
    //   if (error) {
    //     // Error occurred - check `error.message` for more details.
    //     return;
    //   }
    //   if (data) {
    //     const { locations } = data;
    //     // do something with the locations captured in the background
    //   }
    // });
    const requestPermissions = async () => {
    Location.requestBackgroundPermissionsAsync();
      // if (status === 'granted') {
        await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy:Location.Accuracy.High,
          timeInterval: 10000,
          distanceInterval: 80,
        });
    
    };
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
              userLocationCalloutEnabled={true}
              zoomEnabled={true}
              showsMyLocationButton={true}
              
              showsUserLocation={true}/>
              

              
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});