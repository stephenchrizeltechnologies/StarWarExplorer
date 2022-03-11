import { StyleSheet } from 'react-native';

import PeopleInfo from '../components/People';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function PeopleScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
      <PeopleInfo />
  );
}
const getMovies = async () => {
  try {
   const response = await fetch('https://reactnative.dev/movies.json');
   const json = await response.json();
   setData(json.movies);
 } catch (error) {
   console.error(error);
 } finally {
   setLoading(false);
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
