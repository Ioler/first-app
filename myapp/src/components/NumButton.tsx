import React from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import Answer from '../class/Answer';

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
  buttonLabel: number;
  answer: Answer;
}

export default function NumButton(props: Props){
  const{buttonLabel, answer} = props;

  const onPress=React.useCallback(() => {
    if(answer.getMistake()===true){
      answer.setMistake(false);
      answer.setInput('');
    }
    answer.setInput(answer.getInput() + buttonLabel )}
    ,[])

  return(
    <TouchableOpacity style={styles.button}
    onPress={onPress}>
      <Text style={styles.buttonText}>{buttonLabel}</Text>
    </TouchableOpacity>
    // <Button mode="contained" 
    // onPress={onPress}>{buttonLabel}</Button> //useNativeDriver: trueにする方法が分からない
  )
}