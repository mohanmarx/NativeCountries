import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'

import Axios from '../../Config/Axios'
import CountryCard from '../../Components/Cards/CountryCard'

import { CountrySkeleton } from '../../Components/Skeletons'

import { Styles } from '../../Theme/Styles'

export class Location extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        const { route } = this.props
        const { country } = route.params
        Axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
            .then(res => {
                if (res.status === 200) {
                    this.setState({ data: res.data, loading: false })
                } else {
                    this.setState({ loading: false })
                }
            })
            .catch(err => {
                this.setState({ loading: false })
            })
    }


    render() {
        const { data, loading } = this.state
        return (
            <ScrollView>
                <View style={[Styles.container, { paddingHorizontal: 15 }]}>
                    {loading ?
                        <CountrySkeleton />
                        : data.map((place, idx) => (
                            <CountryCard key={idx} place={place} />
                        ))}

                </View>
            </ScrollView>
        )
    }
}

export default Location