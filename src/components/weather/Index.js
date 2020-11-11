import React, { Component } from 'react';
import { ImageBackground, ActivityIndicator, FlatList, Text, View, ScrollView } from 'react-native';

import Styles from './Styles'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

            today: '',
            forecast: ''

        };
    }

    componentDidMount() {
        fetch('https://api.hgbrasil.com/weather?key=[key_hgbrasil]d&user_ip=remote')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ today: json.results, forecast: json.results.forecast })
            })
            .catch((error) => console.error(error))
            .finally(() => {
                console.log(this.state.forecast)
            });
    }

    render() {

        return (
            <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" }} style={Styles.backgroundImage}>
                <View style={Styles.viewToday}>
                    <Text style={Styles.textCity}> {this.state.today.city_name} </Text>
                    <Text style={Styles.textTemp}> {this.state.today.temp}º </Text>
                    <Text style={Styles.textDescription}> {this.state.today.description} </Text>
                </View>

                <View style={Styles.viewForecast}>
                    <Text> Próximos Dias </Text>
                    <FlatList
                        data={this.state.forecast}
                        keyExtractor={({ id }, index) => id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={Styles.nextDays} >
                                <Text style={Styles.textNextDays}>{item.date}</Text>
                                <Text style={Styles.textNextDays}>{item.weekday}</Text>
                                <Text style={Styles.textNextDays}>{item.min}</Text>
                                <Text style={Styles.textNextDays}>{item.max}</Text>
                                <Text style={Styles.textNextDays}>{item.description}</Text>
                            </View>
                        )}
                    />
                </View>
            </ImageBackground>
        );
    }
};
