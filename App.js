import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalcScreen from './CalcScreen';
import CalcKeyboard from './CalcKeyboard';
import { useState } from 'react';

export default function App() {
  // dùng React Hooks để thay đổi giá trị của Data
  // khi giá trị của Data được thay đổi thì CalcScreen sẽ được render lại
  const [data, setData] = useState('');
  const [prevOperation, setPrevOperation] = useState('');

  function handleCalcBtnClick(calcBtn) {
    console.log(calcBtn);

    switch (calcBtn) {
      case '=': {
        setData(() => handleCalc(data));
        setPrevOperation(() => data + ' = ' + handleCalc(data))
        break;
      }

      case 'Del': {
        setData(() => data.substring(0, data.length - 1));
        break;
      }

      case 'AC': {
        setData(() => '');
        break;
      }

      default: {
        setData(prevData => prevData + '' + calcBtn);
      }
    }
  }

  /**
   * Handle calculator from data (a text on calc screen) 
   * @param {string} data is a data on CalcScreen
   * @returns new data
   */
  function handleCalc(data) {
    const operators = '[+/*-]';
    // mảng toán hạng, gồm 2 phần tử
    let operands = data.split(new RegExp(operators));

    // lấy ra phép toán từ data
    let operator = data.match(new RegExp(operators));

    console.log('operand1: ', operands[0], operator, 'operand2: ', operands[1]);

    if (operands.length == 2) {
      let operand1 = parseFloat(operands[0]);
      let operand2 = parseFloat(operands[1]);
      switch (operator[0]) {
        case '+': return operand1 + operand2;
        case '-': return operand1 - operand2;
        case '*': return operand1 * operand2;
        case '/': return operand1 / operand2;
      }
    }

    // nếu chỉ có 1 số trên màn hình và bấm dấu =
    // thì nó sẽ hiện ra số đó mà không bị lỗi
    if (operands.length == 1) {
      return operands[0];
    }
  }


  return (
    <View style={styles.container}>
      <CalcScreen
        data={data}
        prevOperation={prevOperation}
      />

      <CalcKeyboard onClick={handleCalcBtnClick} />

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefcf6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
