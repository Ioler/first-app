import React from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';
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
  answer: Answer;
}

export default function ClearButton(props: Props){
  const{answer} = props;

  const onPress=React.useCallback(() => {
    answer.setInput('');
    answer.setMistake(false);
  },[]);
  
  return(
    <TouchableOpacity style={styles.button}
    onPress={onPress}>
      <Text style={styles.buttonText}>C</Text>
    </TouchableOpacity>
  )
}