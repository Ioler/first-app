import React from 'react';
import {
  StyleSheet, TextInput, View, Text, Button,
} from 'react-native';
import NumButton from '../../NumButton';
import SubmitButton from '../../SubmitButton';
import ClearButton from '../../ClearButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  question: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
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
    // padding: 4,
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

interface Props{
  left: number;
  right: number;

  setLeft: (left: number) => void;
  setRight: (right: number) => void;
}

function Question(props: Props){
  const {left, right, setLeft, setRight } = props;

  return(
    <View style={styles.question}>
      <Text>{left} x {right}=</Text>
    </View>
  )
}

function ResetButton(props: Props){
  const {left, right, setLeft, setRight } = props;
  const reset = React.useCallback(() => {
    setLeft(Math.floor( Math.random() * 90 ));
    setRight(Math.floor( Math.random() * 90 ));
  }, [left, right, setLeft, setRight]);

  return <Button title='reset' onPress={() => reset() }></Button>
}

export default function App(){
  const [left, setLeft] = React.useState(1);
  const [right, setRight] = React.useState(1);
  const [mistake, setMistake] = React.useState(false);
  const [counter, setCounter] = React.useState(0);

  const answer = left * right;
  const [input, setInput] = React.useState('');

  return(
    <View style={styles.container}>
      <ResetButton left={left} right={right} setLeft={setLeft}  setRight={setRight} />
  <Text>{counter}問</Text>
      <Question left={left} right={right} setLeft={setLeft} setRight={setRight} />
      <Text style={[mistake && styles.mistakeInput]}>{input}</Text>
      <View style={styles.keyboard}>
        <View style={styles.keyboardsub}>
          {/* <Button title='1' onPress={() => setInput(input + '1' ) }></Button> */}
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
          {/* <Button title='✓' onPress={() => submit(parseInt(input), answer, mistake) }></Button> */}
          <SubmitButton
            input={input}
            setInput={setInput}
            answer={answer}
            setMistake={setMistake}
            counter={counter}
            setCounter={setCounter}
          />
        </View>
      </View> 
    </View>
  )
}