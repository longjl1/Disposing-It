import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Modalize } from 'react-native-modalize';
import React, { useRef } from 'react';


export default function ModalScreen({ navigation }) {

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const getData = () => ({

  });

  const renderItem = (item) => (
    <View>
      <Text>{item.heading}</Text>
    </View>
  );



  return (
    

    
    <View style={styles.container}>

      <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity>
      <Modalize
        ref={modalizeRef}
        flatListProps={{
          data: getData(),
          renderItem: renderItem,
          keyExtractor: item => item.heading,
          showsVerticalScrollIndicator: false,
        }}
      />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
