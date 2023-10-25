import {
  SafeAreaView,
  StyleSheet,
  RefreshControl,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import React, {useCallback, useState, useEffect} from 'react';

import Header from '../components/Header';
import Endpoints from '../network/Endpoints';
import SearchHeader from '../components/SearchHeader';
import NewsCard from '../components/NewsCard';
import colors from '../assets/colors';
import {searchNews} from '../utils/filter';

const Feed = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [data, setData] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  const handleSearch = key => {
    setSearchKey(key);
    setData(searchNews(key, news));
  };

  const API_getNews = async () => {
    console.log(process.env.API_KEY);
    setLoading(true);
    try {
      const response = await axios({
        method: 'GET',
        url: `${Endpoints.getNews}${process.env.API_KEY}`,
      });
      let articles = response.data.articles.slice(0, 20);
      setData(articles);
      setNews(articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await API_getNews();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    API_getNews();
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <SearchHeader searchKey={searchKey} setSearchKey={handleSearch} />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {loading && news ? (
          <ActivityIndicator color={colors.green_basic} size={'large'} />
        ) : (
          data.map((item, index) => <NewsCard news={item} key={index} />)
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#efefef',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
    padding: 20,
  },
});

export default Feed;
