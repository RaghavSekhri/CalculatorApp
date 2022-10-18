import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { NavigationProps } from '../../config';

const Error = ({navigation}: NavigationProps) => {
    return (
        <View style={styles.mainPortion}>
            <Text style={styles.errText}>Format Error</Text>
            <Text style={styles.descText}>Please try again..</Text>
            <TouchableOpacity style={styles.btnBack} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.btnText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Error;