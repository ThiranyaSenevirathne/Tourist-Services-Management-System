import React, { useState } from 'react';
import axios from 'axios'
import ForecastItem from './ForecastItem'
import Button from 'react-bootstrap/Button';
import ShowMore from 'react-show-more-button';
export default class WeatherCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            forecast: {
                list: [],
                city: {}
            },
        }
    }



    componentDidMount() {
        axios
            .get(`https://api.openweathermap.org/data/2.5/forecast?q=Colombo&units=metric&appid=1f938a6740ff6fb79c06cc531fa0b5b5`)
            .then(res => {
                const data = res.data
                this.setState({ forecast: data })
            })
            .catch(err => console.log(err))
    }

    render() {
      

        return (
            <div style={{ paddingLeft: '5vh', paddingTop: '1vh', paddingBottom: '1vh' }}>
                    <div style={{ paddingTop: '1vh', paddingLeft: '3vh' }}>
                        {this.state.forecast.list.slice(0, 4).map((item, index) => (
                            <ForecastItem key={index}
                                temp={item.main.temp}
                                weatherName={item.weather[0].main}
                                icon={item.weather[0].icon}
                                datetime={new Date(item.dt_txt)} />
                        ))}
                        
                    </div>


            </div>
        )
    }
}
