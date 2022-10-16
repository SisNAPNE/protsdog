import React from 'react'
import {View, Text, Dimensions, Button} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";


import styles from './styles'

function Graph({route}) {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                <Icon name="cards-heart" size={36} color="#660033"/> Batimentos Cardíacos
            </Text>
            <LineChart
                data={{
                    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
                    datasets: [
                    {
                        data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                        ]
                    }
                    ]
                }}
                width={Dimensions.get("window").width - (Dimensions.get("window").width*0.1)} // from react-native
                height={220}
                yAxisLabel=""
                yAxisSuffix=" pm"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={
                    {
                        backgroundColor: "#660033",
                        backgroundGradientFrom: "#660033",
                        backgroundGradientTo: "##660033",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "3",
                        stroke: "#FFF"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
            <Text style={[styles.text, {marginTop:20}]}>
                <Icon name="paw" size={36} color="#660033"/> Distância Percorrida
            </Text>
            <LineChart
                data={{
                    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
                    datasets: [
                    {
                        data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                        ]
                    }
                    ]
                }}
                width={Dimensions.get("window").width - (Dimensions.get("window").width*0.1)} // from react-native
                height={220}
                yAxisLabel=""
                yAxisSuffix=" km"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={
                    {
                        backgroundColor: "#660033",
                        backgroundGradientFrom: "#660033",
                        backgroundGradientTo: "##660033",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "3",
                        stroke: "#FFF"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    )
}

export default Graph