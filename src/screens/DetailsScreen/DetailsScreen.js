/* eslint-disable prettier/prettier */

import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const DetailsScreen = movie => {
  /*  console.log('movie', movie.route.params.movie); */

  const [trailer, setTrailer] = useState([]);
  const Image_path = 'https://image.tmdb.org/t/p/w500';
  const route = movie.route.params.movie.movie;
  const API_URL = 'https://api.themoviedb.org/3';

  const movie_id = route.id;
  const navigation = useNavigation();

  const onMoviePress = () => {
    navigation.navigate('Trailer', {movie: {movie}});
  };
  const fetchMovie = async () => {
    const response = await axios.get(
      `${API_URL}/movie/${movie_id}/videos?&language=en-US&append_to_response=videos`,
      {
        params: {
          api_key: '1d56d581a2e277974c623359b91859be',
        },
      },
    );
    setTrailer(response.data.results[1]);

    console.log('data', response.data.results);
  };
  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{route.title}</Text>
      {route.poster_path ? (
        <Image
          style={styles.image}
          source={{
            uri: `${Image_path}${route.poster_path}`,
          }}
        />
      ) : null}
      <Text style={styles.subtitle}>{route.overview}</Text>
      {trailer ? (
        <Button title="Watch Trailer" onPress={() => onMoviePress(movie_id)} />
      ) : (
        <Button
          title="Watch Trailer"
          onPress={() => onMoviePress(movie_id)}
          disabled={true}
        />
      )}
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  root: {
    margin: 5,
    alignItems: 'center',
  },
  title: {
    marginTop: 40,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    height: '60%',
    width: '60%',
    resizeMode: 'contain',
  },
  subtitle: {
    marginBottom: 20,
  },
});
