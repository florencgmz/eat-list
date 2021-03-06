/* eslint-disable no-unused-vars */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: 800,
    alignSelf: 'center',
    height: 200,
    borderRadius: 4,
    marginBottom: 10,
  },
  nameStyle: {
    fontWeight: 'bold',
    marginBottom: 5,
    marginStart: 10,
    alignSelf: 'center',
    color: 'grey',
  },
  ratingStyle: {
    marginBottom: 10,
    marginStart: 10,
    alignSelf: 'center',
    color: 'grey',
  },
});

const RestaurantDetail = ({ restaurant }) => (
        <View style={styles.main}>
        <Image style={styles.imgStyle} source={{ uri: restaurant.image_url }} />
        <Text style={styles.nameStyle}>{restaurant.name}</Text>
        <Text style={styles.ratingStyle}>
        {restaurant.rating} estrellas, {restaurant.review_count} reseñas</Text>
        </View>
);

export default RestaurantDetail;
