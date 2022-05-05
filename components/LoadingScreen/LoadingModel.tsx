import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../Themed';
import { RootStackScreenProps } from '../../types';

export default function LoadingMedel({ navigation }: RootStackScreenProps<'LoadingModel'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detection is loading</Text>
      {/* <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity> */}
      <ActivityIndicator style={styles.loading}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  loading: {
      marginTop:20,
  }
});
