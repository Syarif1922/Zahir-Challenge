import React from 'react';
import {View,Text,StyleSheet,TouchableNativeFeedback, ScrollView} from 'react-native';

export default class Features extends React.Component {
    state= {
        En: true,
        Balcony: true,
        Parking: true,
        Heating: true,
        Air: true,
        aSocial: true,
    }

    En(){
        if (this.state.En) {
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    En: !this.state.En,
                    Balcony: true,
                    Parking: true,
                    Heating: true,
                    Air: true,
                    aSocial: true})}>
                    <View style={styles.borderW}>
                        <Text style={styles.textType}>En-suite Room</Text>
                    </View>
                </TouchableNativeFeedback>)
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    En: !this.state.En,
                    Balcony: true,
                    Parking: true,
                    Heating: true,
                    Air: true,
                    aSocial: true})}>
                    <View style={styles.borderW1}>
                        <Text style={styles.textType1}>En-suite Room</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
    }
    Balcony(){
        if (this.state.Balcony) {
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    En: true,
                    Balcony: !this.state.Balcony,
                    Parking: true,
                    Heating: true,
                    Air: true,
                    aSocial: true})}>
                    <View style={styles.borderW}>
                        <Text style={styles.textType}>Balcony</Text>
                    </View>
                </TouchableNativeFeedback>)
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    En: true,
                    Balcony: !this.state.Balcony,
                    Parking: true,
                    Heating: true,
                    Air: true,
                    aSocial: true})}>
                    <View style={styles.borderW1}>
                        <Text style={styles.textType1}>Balcony</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
    }
    Parking(){
        if (this.state.Parking){
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    En: true,
                    Balcony: true,
                    Parking: !this.state.Parking,
                    Heating: true,
                    Air: true,
                    aSocial: true,})}>
                    <View style={styles.borderW}>
                        <Text style={styles.textType}>Parking</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    En: true,
                    Balcony: true,
                    Parking: !this.state.Parking,
                    Heating: true,
                    Air: true,
                    aSocial: true,})}>
                    <View style={styles.borderW1}>
                        <Text style={styles.textType1}>Parking</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
    }
    Heating(){
        if (this.state.Heating){
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    En: true,
                    Balcony: true,
                    Parking: true,
                    Heating: !this.state.Heating,
                    Air: true,
                    aSocial: true,})}>
                    <View style={styles.borderW}>
                        <Text style={styles.textType}>Heating</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    En: true,
                    Balcony: true,
                    Parking: true,
                    Heating: !this.state.Heating,
                    Air: true,
                    aSocial: true,})}>
                    <View style={styles.borderW1}>
                        <Text style={styles.textType1}>Heating</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
    }
    Air(){
        if (this.state.Air){
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    En: true,
                    Balcony: true,
                    Parking: true,
                    Heating: true,
                    Air: !this.state.Air,
                    aSocial: true,})}>
                    <View style={styles.borderW}>
                        <Text style={styles.textType}>Air Conditioning</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    En: true,
                    Balcony: true,
                    Parking: true,
                    Heating: true,
                    Air: !this.state.Air,
                    aSocial: true,})}>
                    <View style={styles.borderW1}>
                        <Text style={styles.textType1}>Air Conditioning</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
    }
   aSocial(){
    if (this.state.aSocial){
        return (
            <TouchableNativeFeedback onPress={()=>this.setState({
                En: true,
                Balcony: true,
                Parking: true,
                Heating: true,
                Air: true,
                aSocial: !this.state.aSocial})}>
                <View style={styles.borderW}>
                    <Text style={styles.textType}>A Social Lobby</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }else{
        return (
            <TouchableNativeFeedback onPress={()=>this.setState({
                En: true,
                Balcony: true,
                Parking: true,
                Heating: true,
                Air: true,
                aSocial: !this.state.aSocial,})}>
                <View style={styles.borderW1}>
                    <Text style={styles.textType1}>A Social Lobby</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
   }

    render() {
        return(
            <View>
                <View style={{flexDirection: 'row', marginBottom: 15}}>
                    <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
                        {this.En()}
                        {this.Balcony()}
                        {this.Parking()}
                        {this.Heating()}
                    </ScrollView>                        
                </View>
                <View style={{flexDirection: 'row', marginBottom: 15}}>
                    <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
                        {this.Air()}
                        {this.aSocial()}
                    </ScrollView>                        
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create ({
    borderW: {
        borderWidth: 1, 
        marginTop: 8, 
        marginHorizontal: 4, 
        height: 30, 
        borderRadius: 20, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderColor: '#A9A9A9' ,
    },
    borderW1: {
        borderWidth: 1, 
        marginTop: 8, 
        marginHorizontal: 4, 
        height: 30, 
        borderRadius: 20, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#4169E1',
        borderColor: '#A9A9A9' ,
    },
    textType: {
        marginHorizontal: 10,
        color: '#A9A9A9',
        fontFamily: 'Loboto_Light',
    },
    textType1: {
        marginHorizontal: 10,
        color: 'white',
        fontFamily: 'Loboto_Light',
    }
})