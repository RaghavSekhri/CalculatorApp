import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { NavigationProps } from '../../config';
import { CalcButton } from '../../components';

const Home = ({navigation}: NavigationProps) => {

    const [calc, setCalc] = useState('');

    const ops = [ '+', '-', '/', '*', '.' ];

    const updateCalc = (value: string) => {
        if(ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1)))
            return;
        setCalc(calc + value);
    };

    const calculate = () => {
        try{
            if(ops.includes(calc.slice(-1)))
                return;
            if(calc === '' || 0)
                return;
            const result = eval(calc).toString();
            setCalc(result);
        }
        catch(err) {
            navigation.navigate('Error');
        }
    };

    const deleteLast = () => {    
        if(calc === '')
            return;
        const value = calc.slice(0, -1);
        setCalc(value);
    };

    const reset = () => {
        setCalc('');
    };

    const renderResult = () => {
        if(calc.length < 8)
            return <Text style={styles.valueText}>{calc || 0}</Text>;
        else if(calc.length >= 8 && calc.length <= 12)
            return <Text style={[styles.valueText, { fontSize: 30 }]}>{calc || 0}</Text>;
        else if(calc.length >= 12)
            return <Text style={[styles.valueText, { fontSize: 20 }]}>{calc || 0}</Text>;
    };

    return (
        <View style={styles.mainPortion}>
            <View style={styles.upperPortion}>
                <Text style={styles.title}>Calculator</Text>
                {renderResult()}
            </View>
            <View style={styles.lowerPortion}>
                <View style={styles.calcBtnsLayout}>
                    <CalcButton title={'AC'} callFunction={reset}/>
                    <CalcButton title={"⌫"} callFunction={deleteLast}/>
                    <CalcButton title={'÷'} callFunction={() => updateCalc('/')}/>
                </View>
                <View style={styles.calcBtnsLayout}>
                    <CalcButton title={'7'} callFunction={() => updateCalc('7')}/>
                    <CalcButton title={'8'} callFunction={() => updateCalc('8')}/>
                    <CalcButton title={'9'} callFunction={() => updateCalc('9')}/>
                    <CalcButton title={'x'} callFunction={() => updateCalc('*')}/>
                </View>
                <View style={styles.calcBtnsLayout}>
                    <CalcButton title={'4'} callFunction={() => updateCalc('4')}/>
                    <CalcButton title={'5'} callFunction={() => updateCalc('5')}/>
                    <CalcButton title={'6'} callFunction={() => updateCalc('6')}/>
                    <CalcButton title={'-'} callFunction={() => updateCalc('-')}/>
                </View>
                <View style={styles.calcBtnsLayout}>
                    <CalcButton title={'1'} callFunction={() => updateCalc('1')}/>
                    <CalcButton title={'2'} callFunction={() => updateCalc('2')}/>
                    <CalcButton title={'3'} callFunction={() => updateCalc('3')}/>
                    <CalcButton title={'+'} callFunction={() => updateCalc('+')}/>
                </View>
                <View style={styles.calcBtnsLayout}>
                    <CalcButton title={'0'} callFunction={() => updateCalc('0')}/>
                    <CalcButton title={'.'} callFunction={() => updateCalc('.')}/>
                    <View style={styles.resultStyle}>
                        <CalcButton title={'='} callFunction={calculate}/>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Home;