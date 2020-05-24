import React from 'react';
import { createStackNavigator, StackCardInterpolationProps} from '@react-navigation/stack';
import { MODE_SELECT, PRACTICE, RESULT } from '../../constants/path';
import { ModeSelect, Practice, Result } from '../../components/pages';
import { create } from 'react-test-renderer';

const ModeSelectStack = createStackNavigator();

function ModeSelectNavigator(){
  return (
    <ModeSelectStack.Navigator initialRouteName={MODE_SELECT}>
      <ModeSelectStack.Screen name={MODE_SELECT} component={ModeSelect} />
      <ModeSelectStack.Screen name={PRACTICE} component={Practice} />
    </ModeSelectStack.Navigator>
  )
}

export default ModeSelectNavigator;