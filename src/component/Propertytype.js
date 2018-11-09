import React from 'react';
import {View,Text,StyleSheet,TouchableNativeFeedback, ScrollView} from 'react-native';

export default class Propertytype extends React.Component {
    state= {
        Pool: true,
        Meetings: true,
        Weddings: true,
        Dining: true,
        Spa: true,
        Fitness: true
    }

    Pool() {
        if (this.state.Pool) {
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Pool: !this.state.Pool,
                    Meetings: true,
                    Weddings: true,
                    Dining: true,
                    Spa: true,
                    Fitness: true})}>
                    <View style={styles.borderW}>
                        <Text style={styles.textType}> Pool </Text>
                    </View>
                </TouchableNativeFeedback>)
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Pool: !this.state.Pool,
                    Meetings: true,
                    Weddings: true,
                    Dining: true,
                    Spa: true,
                    Fitness: true})}>
                    <View style={styles.borderW1}>
                        <Text style={styles.textType1}> Pool </Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
    }
    Meetings() {
        if (this.state.Meetings) {
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Pool: true,
                    Meetings: !this.state.Meetings,
                    Weddings: true,
                    Dining: true,
                    Spa: true,
                    Fitness: true})}>
                    <View style={styles.borderW}>
                        <Text style={styles.textType}>Meetings</Text>
                    </View>
                </TouchableNativeFeedback>)
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Pool: true,
                    Meetings: !this.state.Meetings,
                    Weddings: true,
                    Dining: true,
                    Spa: true,
                    Fitness: true})}>
                    <View style={styles.borderW1}>
                        <Text style={styles.textType1}>Meetings</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
    }
    Weddings() {
        if (this.state.Weddings) {
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Pool: true,
                    Meetings: true,
                    Weddings: !this.state.Weddings,
                    Dining: true,
                    Spa: true,
                    Fitness: true})}>
                    <View style={styles.borderW}>
                        <Text style={styles.textType}>Weddings</Text>
                    </View>
                </TouchableNativeFeedback>)
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Pool: true,
                    Meetings: true,
                    Weddings: !this.state.Weddings,
                    Dining: true,
                    Spa: true,
                    Fitness: true})}>
                    <View style={styles.borderW1}>
                        <Text style={styles.textType1}>Weddings</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
    }
    Dining() {
        if (this.state.Dining) {
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Pool: true,
                    Meetings: true,
                    Weddings: true,
                    Dining: !this.state.Dining,
                    Spa: true,
                    Fitness: true})}>
                    <View style={styles.borderW}>
                        <Text style={styles.textType}> Dining </Text>
                    </View>
                </TouchableNativeFeedback>)
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Pool: true,
                    Meetings: true,
                    Weddings: true,
                    Dining: !this.state.Dining,
                    Spa: true,
                    Fitness: true})}>
                    <View style={styles.borderW1}>
                        <Text style={styles.textType1}> Dining </Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
    }
    Spa() {
        if (this.state.Spa=='1') {
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Pool: true,
                    Meetings: true,
                    Weddings: true,
                    Dining: true,
                    Spa: !this.state.Spa,
                    Fitness: true})}>
                    <View style={styles.borderW}>
                        <Text style={styles.textType}>  Spa  </Text>
                    </View>
                </TouchableNativeFeedback>)
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Pool: true,
                    Meetings: true,
                    Weddings: true,
                    Dining: true,
                    Spa: !this.state.Spa,
                    Fitness: true})}>
                    <View style={styles.borderW1}>
                        <Text style={styles.textType1}>  Spa  </Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
    }
    Fitness() {
        if (this.state.Fitness) {
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Pool: true,
                    Meetings: true,
                    Weddings: true,
                    Dining: true,
                    Spa: true,
                    Fitness: !this.state.Fitness})}>
                    <View style={styles.borderW}>
                        <Text style={styles.textType}>Fitness</Text>
                    </View>
                </TouchableNativeFeedback>)
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Pool: true,
                    Meetings: true,
                    Weddings: true,
                    Dining: true,
                    Spa: true,
                    Fitness: !this.state.Fitness})}>
                    <View style={styles.borderW1}>
                        <Text style={styles.textType1}>Fitness</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
    }

    render(){
        return(
            <View>
                <View style={{flexDirection: 'row', marginBottom: 15}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {this.Pool()}
                        {this.Meetings()}
                        {this.Weddings()}
                        {this.Dining()}
                    </ScrollView>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 15}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {this.Spa()}
                        {this.Fitness()}
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
        fontFamily: 'Loboto_Light'
    }
})