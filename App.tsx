import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Loader from './components/Loader';
import React ,{Component, useEffect, useState}from 'react';
export default function App(){
  const [showLoader,setLoader] = useState(true);

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false);
    },2000)
  })

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Loader loading={showLoader} />
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
