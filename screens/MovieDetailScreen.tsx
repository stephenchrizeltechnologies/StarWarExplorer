import { StyleSheet } from 'react-native';

import MovieDetailInfo from '../components/MovieDetail';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps, RootTabScreenProps } from '../types';

export default function MovieDetailScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  
  return (
      <MovieDetailInfo  />
  );
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
