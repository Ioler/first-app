import React from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
})

interface Props {
  input: string;
  setInput: (count: string) => void;
  answer: number;
  setMistake: (mistake: boolean) => void;
  counter: number;
  setCounter: (counter: number) => void
}

export default function SubmitButton(props: Props){
  const{input, setInput, answer, setMistake, counter, setCounter} = props;

  const onPress=React.useCallback(() => {
    if(parseInt(input) === answer){
      setCounter(counter + 1);
      setInput('');
    }else{
      console.log('ng')
      console.log({input})
      console.log({answer})
      setMistake(true)
    }}
    ,[input, answer, setMistake])

  return(
    <TouchableOpacity style={styles.button}
    onPress={onPress}>
      <Text style={styles.buttonText}>✓</Text>
    </TouchableOpacity>
  )
}