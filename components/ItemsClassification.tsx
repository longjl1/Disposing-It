import { Text, View } from 'react-native'
import React, { Component } from 'react'

var recyclableItem = ['plastic bottle','plastic','water bottle','bottle','paper','paper towels','frying pan','notebook','laptop'];
var composingItem = ['food','apple','banana','egg'];
var landfilledItem = ['Glass bottle','glass','Plastic bottle','plastic','Aluminium','Rubber-soled','Tin', 'clothing','shirt','sweatshirt','shoe','handbag'];


export default function ItemsClassification(){
    function rec() {
        return recyclableItem;
    }

    function cpo() {
        return composingItem;
    } 
    function ldf() {
        return landfilledItem;
    } 
    
}
