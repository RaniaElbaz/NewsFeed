import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {memo, useCallback} from 'react';

import assets from '../assets';
import colors from '../assets/colors';

const Header = ({onPress}) => {
  const goToFeed = useCallback(() => {
    if (onPress) {
      onPress();
    }
  });

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={goToFeed} style={styles.logo}>
        <Image source={assets.logo} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green_basic,
    alignSelf: 'flex-start'
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderWidth: 2,
    borderRadius: 30,
    borderColor: colors.white_basic
  },
});

export default memo(Header);
