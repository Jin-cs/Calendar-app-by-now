import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <CalendarList
      />
      
      <Text style={styles.title}>Tab One</Text>
      <Text style={styles.title}>Hello world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'blue'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
