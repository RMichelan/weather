import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        
      today: '',
      forecast: []
      
    };
  }

  componentDidMount() {
    fetch('https://api.hgbrasil.com/weather?key=fb3e164d')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ today: json.results, forecast: json.forecast })
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false })
        console.log(this.state.today)
      });
  }

  render() {
    const { isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
            <Text> {this.state.today.temp} </Text>,
              <FlatList
              data={forecast}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text>{item.date}, {item.weekday}</Text>
              )}
            />
        )}
      </View>
    );
  }
};
