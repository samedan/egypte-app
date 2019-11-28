import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Day from './Day';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      {/* <Feather name="search" style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={() => onTermSubmit()}
      /> */}
      <FlatList
        vertical //horizontal={true}
        // showsVerticalScrollIndicator={false}
        // data={results}
        // keyExtractor={result => result.id}
        renderItem={<Day />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    marginHorizontal: 15,
    flexDirection: 'column',
    marginBottom: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
