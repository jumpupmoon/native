import React, { useEffect, useState } from 'react';
import {Container, Content, Text, Button, View} from 'native-base';
import {StyleSheet} from 'react-native';
import Footer from '../Footer';
// import course from '../Mountain.json';

import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';


export default function Prepare({navigation, route}) {
  const [course, setCourse] = useState();

  useEffect(() => {
    axios.get(`https://whitedeer.herokuapp.com/course/${route.params}`)
    .then(({data}) => {
      setCourse(data.course)
    })
  }, [])

  return (
    <Container style={styles.container}>
      <View style={{flex: 1}}>
        {course &&
          <>
            <View style={styles.First}>
              <Text style={styles.Title}>{course.name}</Text>
              <Text style={styles.distance}>{course.distance}km(왕복 {course.distance * 2}km)</Text>
              <Text style={styles.distance}>{course.time}</Text>
            </View>
            <View style={styles.Second}>
              <View style={styles.List}>
                <View style={styles.trailLine} />
                <View style={styles.circleItem}>
                  {course.courseDetail.map((d) => (
                      <View style={styles.circleDetail} key={d.seq}>
                        <View style={styles.circle}></View>
                        <Text style={styles.circleText}>{d.name.replace(' ', '\n')}</Text>
                      </View>
                  ))}
                </View>
              </View>
            </View>

            <View stlye={styles.Third}>
              <View style={styles.Third1}>
                <View style={styles.item}>
                  <Text style={styles.itemText}>- 대 피 소 -</Text>
                  <View style={styles.itemDetail}>
                    <Text style={styles.itemTextDetail}>
                      {course.shelter.map((s, idx) => {
                        if(idx != 0) return ' ' + s;
                        else return s;
                      })}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.Third2}>
                <View style={styles.item}>
                  <Text style={styles.itemText}>- 매 점 -</Text>
                  <View style={styles.itemDetail}>
                    <Text style={styles.itemTextDetail}>{course.store}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.Third3}>
                <View style={styles.item}>
                  <Text style={styles.itemText}>- 화 장 실 -</Text>
                  <View
                    style={{
                      borderWidth: 2,
                      borderRadius: 3,
                      marginVertical: 10,
                      padding: 10,
                    }}
                    >
                    <Text style={styles.itemTextDetail}>
                      {course.toilet.map((t, idx) => {
                        if(idx != 0) return ' ' + t;
                        else return t;
                      })}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </>
        }
      </View>
      <Footer navigation={navigation} value="2" />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    ...Platform.select({
      ios: {fontFamily: 'AppleSDGothicNeo-Regular'},
      android: {
        fontFamily: 'NotoSansKR-Bold',
        fontWeight: 'bold',
        includeFontPadding: false,
      },
    }),
  },
  First:{
    flex:1
  },
  Second:{
    flex:1
  },
  Third:{
    flex:1
  },
  Title: {
    fontSize: 36,
    fontFamily: 'DungGeunMo',
    textAlign: 'center',
    color: '#1E824C',
    marginBottom: 0,
    // marginTop: 40,
    // justifyContent:"center",
    // alignItems:"center",
    margin:20,
  },
  distance: {
    fontSize: 18,
    fontFamily: 'DungGeunMo',
    textAlign: 'center',
    color: '#404040',
    marginTop: 10
  },
  List: {
    margin: 20,
  },
  item: {
    marginVertical: 10,
  },
  itemText: {
    fontFamily: 'DungGeunMo',
    color: '#181717',
    fontSize: 20,
    textAlign: 'center',
  },
  itemDetail: {
    borderWidth: 2,
    borderRadius: 3,
    marginTop: 10,
    padding: 10,
  },
  itemTextDetail: {
    fontFamily: 'DungGeunMo',
    color: '#47525E',
    fontSize: 16,
    textAlign: 'center',
  },
  trailLine: {
    borderBottomColor: '#1E824C',
    borderBottomWidth: 5,
    marginHorizontal: 10,
    borderStyle: 'dashed',
    marginTop: 20,
    borderRadius: 1,
  },
  circleText: {
    fontFamily: 'NotoSansKR-Regular',
    color: '#181717',
    fontSize: 14,
    textAlign: 'center'
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#F5E51B',
    borderWidth: 4,
    borderColor: '#1E824C',
  },
  circleItem: {
    flexDirection: "row",
    position: "absolute",
    marginTop: 14
  },
  circleDetail: {
    flex: 1,
    alignItems: 'center'
  }
});
