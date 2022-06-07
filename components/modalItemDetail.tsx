import { forwardRef, useRef } from "react";
import { Modalize } from 'react-native-modalize';
import { View, Text, TouchableOpacity } from 'react-native';
import React from "react";

export const modalItemDetail = ({ data, copy, description}) => {
    const modalizeRef = useRef<Modalize>(null);
    
  
    const onOpen = () => {
      modalizeRef.current?.open();
    };
  
    return (
      <Modalize>
        <Text>{data} {copy} {description}</Text>
      </Modalize>
    );
  };