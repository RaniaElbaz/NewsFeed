import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';

import colors from '../assets/colors';

const SearchHeader = ({searchKey, setSearchKey}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        value={searchKey}
        onChangeText={setSearchKey}
        placeholder="Search"
        placeholderTextColor={colors.light_green}
        style={styles.searchInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  searchInput: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.light_green,
    paddingHorizontal: 15,
    flex: 1,
    borderRadius: 25,
    color: colors.dark
  },
});

export default SearchHeader;
