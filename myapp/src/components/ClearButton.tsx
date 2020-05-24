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
  setInput: (count: string) => void;
  setMistake: (count: boolean) => void;
}

export default function ClearButton(props: Props){
  const{setInput, setMistake} = props;

  const onPress=React.useCallback(() => {
    setInput('');
    setMistake(false);
  }
    ,[setInput, setMistake])

  return(
    <TouchableOpacity style={styles.button}
    onPress={onPress}>
      <Text style={styles.buttonText}>C</Text>
    </TouchableOpacity>
  )
}