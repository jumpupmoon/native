import React from 'react';
import {View} from 'react-native';
import { PacmanIndicator } from 'react-native-indicators';
import Footer from './Footer';

export default function Loading({navigation, value}) {
    return (
        <>
            <View style={{flex: 1}}>
                <PacmanIndicator color='#e0dd1f' size={100} />
            </View>
            {navigation && 
                <Footer navigation={navigation} value={value} />
            }
        </>
    )
}