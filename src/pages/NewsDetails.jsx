import {
  View,
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useCallback} from 'react';
import moment from 'moment';

import Header from '../components/Header';
import colors from '../assets/colors';

const NewsDetails = ({navigation, route}) => {
  //params
  const {news} = route.params || {};

  const openSourceLink = useCallback(async () => {
    const supported = await Linking.canOpenURL(news.url);

    if (supported) {
      await Linking.openURL(news.url);
    } else {
      Alert.alert(`This link is not secured, ${news.url}`);
    }
  }, [news]);

  return (
    <SafeAreaView style={styles.screen}>
      <Header onPress={() => navigation.navigate('newsFeed')} />
      <ScrollView>
        {news?.urlToImage ? (
          <Image source={{uri: news.urlToImage}} style={styles.image} />
        ) : (
          <Image source={assets.placeholder} style={styles.image} />
        )}
        <View style={styles.content}>
          <Text style={styles.title}>{news.title}</Text>
          <Text style={styles.author}>{`By ${news.author} on ${moment(
            news.publishedAt,
          ).format('ll')}`}</Text>
          <Text style={styles.article}>{news.content}</Text>
          <TouchableOpacity style={styles.readMore} onPress={openSourceLink}>
            <Text style={styles.source}>{`read more:  ${news.url}`}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.light_green,
  },
  image: {
    height: 300,
    width: '100%',
  },
  content: {
    top: -20,
    flex: 1,
    backgroundColor: colors.light_green,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    padding: 20,
  },
  author: {
    fontSize: 10,
    color: colors.dark_green,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
  },
  article: {
    marginTop: 10,
    color: colors.dark_green,
  },
  source: {
    fontSize: 10,
    color: colors.white_basic,
    marginEnd: 5,
  },
  readMore: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 10,
  },
});

export default NewsDetails;
