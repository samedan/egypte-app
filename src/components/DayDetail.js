import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
  FlatList,
  ScrollView
} from 'react-native';
import { Image, Divider, Card } from 'react-native-elements';
import Vizita from './Vizita';

const DayDetail = ({ navigation }) => {
  // sent by ResultsList
  const id = navigation.getParam('id');
  // console.log(navigation.state.params);

  const {
    poze,
    title,
    deUnde,
    panaUnde,
    dataAnului,
    continut,
    viziteIncluse,
    viziteOptionale
  } = navigation.state.params;

  console.log('DayDetail images[] = ' + viziteIncluse[0].images1);
  return (
    <View style={styles.container} vertical>
      <ScrollView style={styles.scrollView}>
        <Card
          title={deUnde + ' -> ' + panaUnde}
          image={poze}
          style={{ marginBottom: 10 }}
        >
          <Text style={{ marginBottom: 10, fontSize: 16 }}>{continut}</Text>
        </Card>

        {/* INCLUS */}
        <View style={styles.inclus}>
          <Text style={styles.textInclus}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INCLUS
          </Text>
        </View>
        <Card style={{ marginTop: 0, borderRadius: 10 }}>
          {viziteIncluse.map(vizita => {
            return <Vizita vizita={vizita} />;
          })}
        </Card>
        {/* NE-INCLUS */}
        <View style={styles.neinclus}>
          <Text style={styles.textInclus}>&nbsp;&nbsp;&nbsp; NE-INCLUS</Text>
        </View>
        <Card style={{ marginTop: 0, borderRadius: 10 }}>
          <Text style={{ marginBottom: 10, fontSize: 16 }}>
            {viziteOptionale[0].descriere}
          </Text>
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
              {viziteIncluse[0].images1 !== '' ? (
                <>
                  <Image
                    style={styles.image}
                    source={viziteOptionale[0].images4}
                  />
                  <Image
                    style={styles.image}
                    source={viziteOptionale[0].images5}
                  />
                </>
              ) : null}
            </View>
          </View>
        </Card>
      </ScrollView>
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

export default DayDetail;
