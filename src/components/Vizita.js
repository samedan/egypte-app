import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Vizita = ({ vizita }) => {
  return (
    <View key={vizita.numeVizita}>
      <Text style={{ marginBottom: 10, fontSize: 16 }}>{vizita.descriere}</Text>
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          width: '90%',
          marginRight: 15,
          paddingBottom: 10,
          paddingLeft: 0
        }}
      >
        <View
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          {vizita.images1 !== '' ? (
            <>
              <Image style={styles.image} source={vizita.images1} />
              <Image style={styles.image} source={vizita.images2} />
              <Image style={styles.image} source={vizita.images3} />
            </>
          ) : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',

    marginBottom: 10
  },
  image: {
    // width: 150,
    flexBasis: '30%',
    flexShrink: 1,
    width: 100,
    height: 100,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold'
  },
  imgBackground: {
    width: '100%',
    height: 250,
    flex: 1
  },
  inclus: {
    backgroundColor: 'green',
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 0,
    paddingLeft: 5,
    paddingRight: 5,
    width: 100,
    alignContent: 'center'
  },
  neinclus: {
    backgroundColor: 'blue',
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 0,
    paddingLeft: 5,
    paddingRight: 5,
    width: 100,
    alignContent: 'center'
  },
  textInclus: {
    color: 'white',
    alignContent: 'center'
  }
});

export default Vizita;
