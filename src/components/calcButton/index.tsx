import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { CalcButtonProps } from '../../config';

const CalcButton = ({title, callFunction}: CalcButtonProps) => {
    return (
        <TouchableOpacity style={styles.btnStyle} onPress={callFunction}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CalcButton;