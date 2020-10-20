import React, { useEffect, useState } from 'react';
import {Container, Content, Text, Button, View} from 'native-base';
import {StyleSheet} from 'react-native';
import Footer from '../Footer';
// import course from '../Mountain.json';
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
      <Content>
        {course &&
          <>
            <Text style={styles.Title}>{course.name}</Text>
            <Text style={styles.distance}>{course.distance}km(왕복 {course.distance * 2}km)</Text>
            <Text style={styles.distance}>{course.time}</Text>
            
            <View style={styles.List}>
              <View style={styles.item}>
                <View style={styles.trailLine} />
                <View style={styles.circleItem}>
                  {course.courseDetail.map((d) => (
                      <View style={styles.circleDetail} key={d.seq}>
                        <View style={styles.circle}></View>
                        <Text style={styles.circleText} textBreakStrategy={'balanced'}>{d.name}</Text>
                      </View>
                  ))}
                </View>
              </View>

              <View style={{marginTop: 60}}></View>

              <View style={styles.item}>
                <Text style={styles.itemText}>- 대 피 소 -</Text>
                <View style={styles.itemDetail}>
                  <Text style={styles.itemTextDetail}>
                    {course.shelter}
                  </Text>
                </View>
              </View>

              <View style={styles.item}>
                <Text style={styles.itemText}>- 매 점 -</Text>
                <View style={styles.itemDetail}>
                  <Text style={styles.itemTextDetail}>{course.store}</Text>
                </View>
              </View>

              <View style={styles.item}>
                <Text style={styles.itemText}>- 화 장 실 -</Text>
                <View
                  style={{
                    borderWidth: 2,
                    borderRadius: 3,
                    marginVertical: 10,
                    padding: 10,
                  }}>
                  <Text style={styles.itemTextDetail}> for(var i, i=0 ,i++
                    {course.toilet[i]},{course.toilet[1]}
                  </Text>
                </View>
              </View>

              {/* <View style={{alignItems: 'center'}}>
                <Text style={styles.itemText}>
                  {`${course.name} ${course.average}`}
                </Text>
                <Text style={styles.itemText}>
                  {`${course.name} ${course.first}`}
                  </Text>
              </View> */}

              <Button
                onPress={() => navigation.navigate('Prepare', route.params)}
                style={{
                  textAlign: 'center',
                  backgroundColor: '#1E824C',
                  alignSelf: 'center',
                  marginTop: 30,
                }}>
                <Text
                  style={{
                    fontSize: 26,
                    fontFamily: 'DungGeunMo',
                    textAlign: 'center',
                    color: '#FFF',
                  }}>
                  시작하기
                </Text>
              </Button>
            </View>
            </>
          }
      </Content>

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
  Title: {
    fontSize: 36,
    fontFamily: 'DungGeunMo',
    textAlign: 'center',
    color: '#1E824C',
    marginBottom: 0,
    marginTop: 40,
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
  circle1: {
    width: 18,
    height: 18,
    borderRadius: 18 / 2,
    backgroundColor: '#F5E51B',
    position: 'absolute',
    borderWidth: 4,
    borderColor: '#1E824C',
    marginTop: 14,
    marginLeft: 40,
  },
  circle2: {
    width: 18,
    height: 18,
    borderRadius: 18 / 2,
    backgroundColor: '#F5E51B',
    position: 'absolute',
    borderWidth: 4,
    borderColor: '#1E824C',
    marginTop: 14,
    marginLeft: 100,
  },
  circle3: {
    width: 18,
    height: 18,
    borderRadius: 18 / 2,
    backgroundColor: '#F5E51B',
    position: 'absolute',
    borderWidth: 4,
    borderColor: '#1E824C',
    marginTop: 14,
    marginLeft: 160,
  },
  circle4: {
    width: 18,
    height: 18,
    borderRadius: 18 / 2,
    backgroundColor: '#F5E51B',
    position: 'absolute',
    borderWidth: 4,
    borderColor: '#1E824C',
    marginTop: 14,
    marginLeft: 220,
  },
  circle5: {
    width: 18,
    height: 18,
    borderRadius: 18 / 2,
    backgroundColor: '#F5E51B',
    position: 'absolute',
    borderWidth: 4,
    borderColor: '#1E824C',
    marginTop: 14,
    marginLeft: 280,
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
