/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const MovieCard = ({movie}) => {
  /* console.log(movie); */
  const Image_path = 'https://image.tmdb.org/t/p/w500';
  const navigation = useNavigation();

  const onMoviePress = () => {
    navigation.navigate('Details', {movie: {movie}});
  };
  return (
    <View style={styles.root}>
      <Pressable onPress={() => onMoviePress()}>
        {movie.poster_path && movie ? (
          <>
            <Image
              style={styles.image}
              source={{uri: `${Image_path}${movie.poster_path}`}}
            />
            {/*  <Text style={{textAlign: 'center', maxWidth: 300}}>
              {movie.title}
            </Text> */}
          </>
        ) : (
          <></>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 400,
    maxWidth: 150,
    margin: 10,
  },
  image: {
    width: 150,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 16,
    borderRadius: 10,
  },
});

export default MovieCard;
