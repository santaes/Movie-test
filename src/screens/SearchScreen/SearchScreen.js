/* eslint-disable prettier/prettier */
import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import axios from 'axios';
import MovieCard from '../../components/MovieCard/MovieCard';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '1d56d581a2e277974c623359b91859be';

  const fetchMovies = async () => {
    const {
      data: {results},
    } = await axios.get(
      `${API_URL}/search/movie?&language=en-US&query=${searchTerm}&append_to_response=videos`,
      {
        params: {
          api_key: '1d56d581a2e277974c623359b91859be',
        },
      },
    );
    console.log(results);

    setMovies(results);
  };
  useEffect(() => {
    setLoading(true);
    fetchMovies();

    setLoading(false);
  }, [searchTerm]);

  const renderMovies = () =>
    movies.map(movie => (
      <View style={{marginBottom: -15}}>
        <MovieCard key={movies.id} movie={movie} id={movie.id} />
      </View>
    ));

  return (
    <SafeAreaView style={{flex: 1}}>
      <TextInput
        placeholder="Search for movies"
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
        style={styles.input}
      />
      {/* <TouchableOpacity
        onPress={() => {
          setSearchTerm('');
        }}>
        <EvilIcons
          name={searchTerm ? 'search' : 'refresh'}
          size={30}
          color="black"
          style={{alignSelf: 'center', marginHorizontal: 20}}
        />
      </TouchableOpacity> */}

      <ScrollView style={{flex: 1}}>
        <View style={styles.cards}>{renderMovies()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    borderRadius: 10,
  },
  cards: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
export default SearchScreen;
