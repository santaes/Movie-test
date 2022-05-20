/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import axios from 'axios';

import MovieCard from '../../components/MovieCard/MovieCard';
import {ScrollView} from 'react-native-gesture-handler';

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const [collections, setCollections] = useState([]);
  const [actions, setActions] = useState([]);

  const [comedies, setComedies] = useState([]);

  const API_URL = 'https://api.themoviedb.org/3';

  const fetchMovies = async () => {
    const {
      data: {results},
    } = await axios.get(
      `${API_URL}/discover/movie?sort_by=popularity.desc&language=en-US&append_to_response=videos`,
      {
        params: {
          api_key: '1d56d581a2e277974c623359b91859be',
        },
      },
    );

    setMovies(results);
  };
  const fetch2023 = async () => {
    const {
      data: {results},
    } = await axios.get(
      `${API_URL}/discover/movie?&primary_release_year=2022&sort_by=release_date.desc&append_to_response=videos`,
      {
        params: {
          api_key: '1d56d581a2e277974c623359b91859be',
        },
      },
    );

    setCollections(results);
  };
  const fetchComedies = async () => {
    const {
      data: {results},
    } = await axios.get(
      `${API_URL}/discover/movie?&with_genres=35&sort_by=popularity.desc&append_to_response=videos`,
      {
        params: {
          api_key: '1d56d581a2e277974c623359b91859be',
        },
      },
    );

    setComedies(results);
  };
  const fetchActions = async () => {
    const {
      data: {results},
    } = await axios.get(
      `${API_URL}/discover/movie?&with_genres=28&sort_by=popularity.desc&append_to_response=videos`,
      {
        params: {
          api_key: '1d56d581a2e277974c623359b91859be',
        },
      },
    );

    setActions(results);
  };

  useEffect(() => {
    fetchMovies();
    fetch2023();
    fetchComedies();
    fetchActions();
  }, []);

  const renderMovies = () =>
    movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} id={movie.id} />
    ));
  const render2022 = () =>
    collections.map(movie => (
      <MovieCard key={movie.id} movie={movie} id={movie.id} />
    ));

  const renderComedies = () =>
    comedies.map(movie => (
      <MovieCard key={movie.id} movie={movie} id={movie.id} />
    ));
  const renderActions = () =>
    actions.map(movie => (
      <MovieCard key={movie.id} movie={movie} id={movie.id} />
    ));

  return (
    <View>
      <ScrollView>
        <Text style={styles.category}>Trending now</Text>
        <ScrollView
          style={{maxHeight: 400}}
          horizontal
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true}>
          {renderMovies()}
        </ScrollView>
        <Text style={styles.category}>New Releases 2022</Text>
        <ScrollView
          nestedScrollEnabled={true}
          horizontal
          style={{maxHeight: 400}}
          showsHorizontalScrollIndicator={false}>
          {render2022()}
        </ScrollView>
        <Text style={styles.category}>TOP Comedies</Text>
        <ScrollView
          nestedScrollEnabled={true}
          horizontal
          style={{maxHeight: 400}}
          showsHorizontalScrollIndicator={false}>
          {renderComedies()}
        </ScrollView>
        <Text style={styles.category}>TOP Actions</Text>
        <ScrollView
          nestedScrollEnabled={true}
          horizontal
          style={{maxHeight: 400}}
          showsHorizontalScrollIndicator={false}>
          {renderActions()}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
