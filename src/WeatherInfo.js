import React,{useState, useEffect} from 'react';
import { FlatList, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Styled from 'styled-components';

//api키
const API_KEY = '41db3a460777509dd8c3fde0c8533079';

//컴포넌트화
const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #EEE;
`;

const WeatherContainer = Styled(FlatList)``;

const LoadingView = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const Loading = Styled.ActivityIndicator`
    margin-bottom: 16px;
`;
const LoadingLabel = Styled.Text`
  font-size: 16px;
`;

const WeatherItemContainer = Styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Weather = Styled.Text`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: bold;
`;
const Temperature = Styled.Text`
  font-size: 16px;
`;




//함수 시작
const WeatherInfo = () => {
    //날씨 정보
    const [weatherInfo, setWeatherInfo] = useState({
        temperature: undefined,
        weather: undefined,
        isLoading: false,
      });

      //겟 함수 -로딩중 아님
      const getCurrentWeather = () => {
        setWeatherInfo({
          isLoading: false,
        });

        Geolocation.getCurrentPosition(
            position => {
              const { latitude, longitude } = position.coords;
              fetch(
                `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
              )
                .then(response => response.json())
                .then(json => {
                  setWeatherInfo({
                    temperature: json.main.temp,
                    weather: json.weather[0].main,
                    isLoading: true,
                  });
                })
                .catch(error => {
                  setWeatherInfo({
                    isLoading: true,
                  });
                  showError('날씨 정보를 가져오는데 실패하였습니다.');
                });
            },
            error => {
              setWeatherInfo({
                isLoading: true,
              });
              showError('위치 정보를 가져오는데 실패하였습니다.');
            }
          );
        };
      
        function showError(message){
          setTimeout(() => {
            Alert.alert(message);
          }, 500);
        };
      
        useEffect(() => {
          getCurrentWeather();
        }, []);
      
        let data = [];
        const { isLoading, weather, temperature } = weatherInfo;
        if (weather && temperature) {
          data.push(weatherInfo);
        }
      
    //뷰
    return (
        <Container>
      <WeatherContainer
        onRefresh={() => getCurrentWeather()}
        refreshing={!isLoading}
        data={data}
        keyExtractor={(item, index) => {
          return `Weather-${index}`;
        }}
        ListEmptyComponent={
          <LoadingView>
            <Loading size="large" color="#1976D2" />
            <LoadingLabel>Loading...</LoadingLabel>
          </LoadingView>
        }
        renderItem={({ item, index }) => (
          <WeatherItemContainer>
            <Weather>{item.weather}</Weather>
            <Temperature>({item.temperature}°C)</Temperature>
          </WeatherItemContainer>
        )}
        contentContainerStyle={{ flex: 1 }}
      />
    </Container>
    );
};

export default WeatherInfo;