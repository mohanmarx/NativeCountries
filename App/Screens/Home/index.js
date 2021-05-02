import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import Toast from 'react-native-simple-toast';

//Styles
import { Styles } from '../../Theme/Styles'

const ShowToast = (msg) => Toast.show(msg, Toast.SHORT, ['UIAlertController']);

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            country: ""
        }
    }

    handleInput = (country) => {
        let exp = /^([a-zA-Z-,]+\s{1})*[a-zA-Z-,]*$/
        if (exp.test(country) || !country) {
            this.setState({ country })
        } else {
            ShowToast("Only alphabets following with space allowed")
        }
    }

    handleSubmit = () => {
        const { country } = this.state
        const { navigation } = this.props
        navigation.navigate("Location", { country })
    }

    render() {
        const { country } = this.state
        return (
            <View style={Styles.container}>
                <TextInput
                    value={country}
                    onChangeText={(text) => this.handleInput(text)}
                    style={Styles.TextInput}
                    placeholder={'Please enter the country name'}
                    placeholderTextColor="#ccc"
                />
                <TouchableOpacity onPress={() => country.toString().length > 0 && this.handleSubmit()} style={[Styles.btnPrimary, Styles.mt40]} >
                    <Text> Search Location </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Home
