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
  answer: number;
  setMistake: (nextFlg: boolean) => void
  setNextFlg: (nextFlg: boolean) => void
}

export default function SubmitButton(props: Props){
  const{input, answer, setMistake, setNextFlg} = props;

  const onPress=React.useCallback(() => {
    if(parseInt(input) === answer){
      setNextFlg(true)
    }else{
      setMistake(true)
    }}
    ,[input, answer, setNextFlg, setMistake])

  return(
    <TouchableOpacity style={styles.button}
    onPress={onPress}>
      <Text style={styles.buttonText}>✓</Text>
    </TouchableOpacity>
  )
}