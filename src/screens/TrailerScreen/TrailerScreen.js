/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import VideoPlayer from 'react-native-video-player';
import axios from 'axios';
import {WebView} from 'react-native-webview';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useNavigation} from '@react-navigation/native';

const TrailerScreen = movie => {
  const [trailerKey, setTrailerKey] = useState('');
  const [loading, setLoading] = useState(false);
  const route = movie.route.params.movie.movie.route.params.movie.movie;
  const API_URL = 'https://api.themoviedb.org/3';
  const movie_id = route.id;
  /* console.log('movie', route); */

  const fetchMovie = async () => {
    const response = await axios.get(
      `${API_URL}/movie/${movie_id}/videos?&language=en-US&append_to_response=videos`,
      {
        params: {
          api_key: '1d56d581a2e277974c623359b91859be',
        },
      },
    );
    setLoading(true);
    setTrailerKey(response.data.results[1].key);

    console.log('data', response.data);
  };
  useEffect(() => {
    fetchMovie();
    setLoading(false);
  }, []);

  return loading && trailerKey ? (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <YoutubePlayer
        height={500}
        forceAndroidAutoplay={true}
        videoId={trailerKey}
      />
    </View>
  ) : (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 25, marginTop: '50%', marginBottom: 50}}>
        Trailer not Available
      </Text>
    </View>
  );
};

export default TrailerScreen;

const styles = StyleSheet.create({});
