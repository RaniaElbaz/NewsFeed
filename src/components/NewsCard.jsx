import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useCallback, memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

import assets from '../assets';
import colors from '../assets/colors';

const NewsCard = ({news}) => {
  const navigation = useNavigation();

  const goToNewsDetails = useCallback(() => {
    navigation.navigate('newsDetails', {news});
  });

  return (
    <TouchableOpacity onPress={goToNewsDetails} style={styles.card}>
      {news?.urlToImage ? (
        <Image source={{uri: news.urlToImage}} style={styles.image} />
      ) : (
        <Image source={assets.placeholder} style={styles.image} />
      )}
      <Text numberOfLines={2} style={styles.title}>
        {news?.title}
      </Text>
      <Text style={styles.date}>{`Published on ${moment(news.publishedAt).format('ll')}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 15,
    marginBottom: 10,
    padding: 10,
    borderBottomColor: colors.light_green,
    borderBottomWidth: 1,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 15,
  },
  title: {
    width: '100%',
    color: colors.dark,
    fontSize: 20,
    fontWeight: '600',
  },
  date: {
    color: colors.light_green,
    fontSize: 12,
    marginTop: 5,
  },
});

export default memo(NewsCard);
