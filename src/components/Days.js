import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Day from './Day';
import { withNavigation } from 'react-navigation';
import { data } from './data';

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const Days = ({ navigation }) => {
  return (
    <View>
      <FlatList
        style={styles.frontPage}
        vertical //horizontal={true}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.zi}
        renderItem={({ item }) => {
          const {
            zi,
            deUnde,
            panaUnde,
            dataAnului,
            title,
            continut,
            poze,
            viziteIncluse,
            viziteOptionale
          } = item;

          // console.log('Days title= ' + title);

          return (
            <TouchableOpacity
              title={title}
              onPress={() =>
                navigation.navigate('DayDetail', {
                  id: zi,
                  title: title,
                  deUnde,
                  panaUnde,
                  dataAnului,
                  poze: poze,
                  continut,
                  viziteIncluse,
                  viziteOptionale
                })
              }
            >
              <Day
                zi={zi}
                title={title}
                deUnde={deUnde}
                panaUnde={panaUnde}
                dataAnului={dataAnului}
                poze={poze}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frontPage: {
    width: '100%',
    backgroundColor: 'white',
    paddingRight: 15,
    paddingTop: 5
  }
});

export default withNavigation(Days);
