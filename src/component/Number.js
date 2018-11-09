import React from 'react';
import {View,Text,StyleSheet,TouchableNativeFeedback, ScrollView} from 'react-native';

export default class Number extends React.Component {
    state= {
        Satu: true,
        Dua: true,
        Tiga: true,
        Empat: true,
        Lima: true,
        Enam: true
    }

    Satu() {
        if (this.state.Satu) {
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Satu:!this.state.Satu,
                    Dua: true,
                    Tiga: true,
                    Empat: true,
                    Lima: true,
                    Enam:true})}>
                    <View style={styles.number}>
                        <Text style={styles.textType}>1</Text>
                    </View>
                </TouchableNativeFeedback>)
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Satu:!this.state.Satu,
                    Dua: true,
                    Tiga: true,
                    Empat: true,
                    Lima: true,
                    Enam:true})}>
                    <View style={styles.number1}>
                        <Text style={styles.textType1}>1</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
    }
    Dua() {
        if (this.state.Dua) {
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Satu:true,
                    Dua: !this.state.Dua,
                    Tiga: true,
                    Empat: true,
                    Lima: true,
                    Enam:true})}>
                    <View style={styles.number}>
                        <Text style={styles.textType}>2</Text>
                    </View>
                </TouchableNativeFeedback>)
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Satu:true,
                    Dua: !this.state.Dua,
                    Tiga: true,
                    Empat: true,
                    Lima: true,
                    Enam:true})}>
                    <View style={styles.number1}>
                        <Text style={styles.textType1}>2</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
    }
    Tiga() {
        if (this.state.Tiga) {
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Satu:true,
                    Dua: true,
                    Tiga: !this.state.Tiga,
                    Empat: true,
                    Lima: true,
                    Enam:true})}>
                    <View style={styles.number}>
                        <Text style={styles.textType}>3</Text>
                    </View>
                </TouchableNativeFeedback>)
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Satu:true,
                    Dua: true,
                    Tiga: !this.state.Tiga,
                    Empat: true,
                    Lima: true,
                    Enam:true})}>
                    <View style={styles.number1}>
                        <Text style={styles.textType1}>3</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
    }
    Empat() {
        if (this.state.Empat) {
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Satu:true,
                    Dua: true,
                    Tiga: true,
                    Empat: !this.state.Empat,
                    Lima: true,
                    Enam:true})}>
                    <View style={styles.number}>
                        <Text style={styles.textType}>4</Text>
                    </View>
                </TouchableNativeFeedback>)
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Satu:true,
                    Dua: true,
                    Tiga: true,
                    Empat: !this.state.Empat,
                    Lima: true,
                    Enam:true})}>
                    <View style={styles.number1}>
                        <Text style={styles.textType1}>4</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
    }
    Lima() {
        if (this.state.Lima) {
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Satu:true,
                    Dua: true,
                    Tiga: true,
                    Empat: true,
                    Lima: !this.state.Lima,
                    Enam:true})}>
                    <View style={styles.number}>
                        <Text style={styles.textType}>5</Text>
                    </View>
                </TouchableNativeFeedback>)
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Satu:true,
                    Dua: true,
                    Tiga: true,
                    Empat: true,
                    Lima: !this.state.Lima,
                    Enam:true})}>
                    <View style={styles.number1}>
                        <Text style={styles.textType1}>5</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
    }
    Enam() {
        if (this.state.Enam) {
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Satu:true,
                    Dua: true,
                    Tiga: true,
                    Empat: true,
                    Lima: true,
                    Enam:!this.state.Enam})}>
                    <View style={styles.number}>
                        <Text style={styles.textType}>6</Text>
                    </View>
                </TouchableNativeFeedback>)
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Satu:true,
                    Dua: true,
                    Tiga: true,
                    Empat: true,
                    Lima: true,
                    Enam:!this.state.Enam})}>
                    <View style={styles.number1}>
                        <Text style={styles.textType1}>6</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
    }
    render() {
        return(
            <View style={{flexDirection: 'row', marginBottom: 15}}>
                <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
                    {this.Satu()}
                    {this.Dua()}
                    {this.Tiga()}
                    {this.Empat()}
                    {this.Lima()}
                    {this.Enam()}
                </ScrollView>    
            </View>
        )
    }
}

const styles= StyleSheet.create({
    number: {
        borderWidth: 1, 
        marginTop: 8,
        marginHorizontal: 4, 
        width: 70,
        height: 30, 
        borderRadius: 20, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderColor: '#A9A9A9' ,
    },
    number1: {
        borderWidth: 1, 
        marginTop: 8,
        marginHorizontal: 4, 
        width: 70,
        height: 30, 
        borderRadius: 20, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#4169E1',
        borderColor: '#A9A9A9' ,
    },
    textType: {
        marginHorizontal: 10,
        color: '#A9A9A9'
    },
    textType1: {
        marginHorizontal: 10,
        color: 'white'
    }
})