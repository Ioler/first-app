import React, { useEffect } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import NumButton from '../../NumButton';
import SubmitButton from '../../SubmitButton';
import ClearButton from '../../ClearButton';
import Question from '../../Question';
import { useNavigation } from '@react-navigation/native';
import { MODE_SELECT, PRACTICE, RESULT } from '../../../constants/path';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  count: {
    fontSize: 24,
  },
  keyboard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  keyboardsub: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: 256,
    padding: 4,
  },
  input: {
    borderWidth: 1,
    width: 256,
    padding: 4,
  },
  mistakeInput:{
    color: 'red',
  }
});


export default function App(){
  const [left, setLeft] = React.useState(1);
  const [right, setRight] = React.useState(1);
  const [mistake, setMistake] = React.useState(false);
  const [counter, setCounter] = React.useState(0);
  const [input, setInput] = React.useState('');
  const [nextFlg, setNextFlg] = React.useState(true);
  
  const { navigate } = useNavigation();

  useEffect(() => {
    if(nextFlg){
      setLeft(Math.floor( Math.random() * 90 + 10));
      setRight(Math.floor( Math.random() * 90 + 10));
      setNextFlg(false)
      setCounter(counter + 1)
      setInput('')
    }
  })

  // 3問正解でリザルトへ移動
  useEffect(() => {
    if(counter===2){
			navigate(RESULT);
    }
	})

  const answer = left * right;

  return(
    <View style={styles.container}>
      <Text style={styles.count}>{counter}問目</Text>
      <Question left={left} right={right} />
      <Text style={[mistake && styles.mistakeInput]}>{input}</Text>
      <View style={styles.keyboard}>
        <View style={styles.keyboardsub}>
          <NumButton buttonLabel={1} input={input} setInput={setInput} mistake={mistake} setMistake={setMistake} />
          <NumButton buttonLabel={2} input={input} setInput={setInput} mistake={mistake} setMistake={setMistake} />
          <NumButton buttonLabel={3} input={input} setInput={setInput} mistake={mistake} setMistake={setMistake} />
        </View>
        <View style={styles.keyboardsub}>
          <NumButton buttonLabel={4} input={input} setInput={setInput} mistake={mistake} setMistake={setMistake} />
          <NumButton buttonLabel={5} input={input} setInput={setInput} mistake={mistake} setMistake={setMistake} />
          <NumButton buttonLabel={6} input={input} setInput={setInput} mistake={mistake} setMistake={setMistake} />
        </View>
        <View style={styles.keyboardsub}>
          <NumButton buttonLabel={7} input={input} setInput={setInput} mistake={mistake} setMistake={setMistake} />
          <NumButton buttonLabel={8} input={input} setInput={setInput} mistake={mistake} setMistake={setMistake} />
          <NumButton buttonLabel={9} input={input} setInput={setInput} mistake={mistake} setMistake={setMistake} />
        </View>
        <View style={styles.keyboardsub}>
          <ClearButton setInput={setInput} setMistake={setMistake} />
          <NumButton buttonLabel={0} input={input} setInput={setInput} mistake={mistake} setMistake={setMistake} />
          <SubmitButton
            input={input}
            answer={answer}
            setMistake={setMistake}
            setNextFlg={setNextFlg}
          />
        </View>
      </View> 
      <TouchableOpacity onPress={() => navigate(RESULT)}>
        <Text>Go to Result</Text>
      </TouchableOpacity>
    </View>
  )
}