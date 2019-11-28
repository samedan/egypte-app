import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  ImageBackground
} from 'react-native';
import { Tile, Image } from 'react-native-elements';

const Day = props => {
  const {
    zi,
    title,
    dataAnului,
    deUnde,
    panaUnde,
    continut,
    viziteIncluse,
    viziteOptionale,
    poze
  } = props;
  // console.log(poze);

  return (
    <View style={styles.container}>
      {/* <Tile
        imageSrc={poze}
        title={title + deUnde + panaUnde}
        featured
        caption={dataAnului}
      /> */}
      <ImageBackground
        style={styles.imgBackground}
        resizeMode="cover"
        source={poze}
      >
        <View style={styles.saptamana}>
          <Text style={styles.sambataLeft}>
            {title} - {zi}
          </Text>
          <Text style={styles.sambataRight}>
            {deUnde} -> {panaUnde}
          </Text>
        </View>
        <Text>{dataAnului}</Text>
        <Text>{poze}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    paddingRight: 15,
    width: '100%',
    height: 250,
    marginBottom: 10
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold'
  },
  imgBackground: {
    width: '100%',
    height: 250,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  saptamana: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',

    padding: 5,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  sambataLeft: {
    fontSize: 20,
    alignSelf: 'flex-start',
    color: 'sienna'
  },
  sambataRight: {
    alignSelf: 'flex-end',
    color: '#182b57',
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default Day;
