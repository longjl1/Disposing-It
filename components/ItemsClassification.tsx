import { Text, View } from 'react-native'
import React, { Component } from 'react'

const recyclableItem = ['plastic bottle','plastic','water bottle','bottle',''];
const composingItem = ['food','apple',''];
const landfilledItem = ['paper'];


export default function ItemsClassification(itemList:[{'className':string,'probability':Number}]){
    const ary1 = itemList;
    const name = itemList[0].className;
    
}