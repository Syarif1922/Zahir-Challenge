import React from 'react';
import {View,Text,StyleSheet,TouchableNativeFeedback, ScrollView} from 'react-native';

export default class Rules extends React.Component{
    state= {
        Pets: true,
        Students: true,
        Smoking: true,
        Couples: true
    }

    Pets(){
        if (this.state.Pets){
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Pets: !this.state.Pets,
                    Students: true,
                    Smoking: true,
                    Couples: true})}>
                    <View style={styles.borderW}>
                        <Text style={styles.textType}>Pets Allowed</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Pets: !this.state.Pets,
                    Students: true,
                    Smoking: true,
                    Couples: true})}>
                    <View style={styles.borderW1}>
                        <Text style={styles.textType1}>Pets Allowed</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
       }
       Students(){
        if (this.state.Students){
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Pets: true,
                    Students: !this.state.Students,
                    Smoking: true,
                    Couples: true})}>
                    <View style={styles.borderW}>
                        <Text style={styles.textType}>Students Allowed</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Pets: true,
                    Students: !this.state.Students,
                    Smoking: true,
                    Couples: true})}>
                    <View style={styles.borderW1}>
                        <Text style={styles.textType1}>Students Allowed</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
       }
       Smoking(){
        if (this.state.Smoking){
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Pets: true,
                    Students: true,
                    Smoking: !this.state.Smoking,
                    Couples: true})}>
                    <View style={styles.borderW}>
                        <Text style={styles.textType}>Smoking Allowed</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Pets: true,
                    Students: true,
                    Smoking: !this.state.Smoking,
                    Couples: true})}>
                    <View style={styles.borderW1}>
                        <Text style={styles.textType1}>Smoking Allowed</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
       }
       Couples(){
        if (this.state.Couples){
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Pets: true,
                    Students: true,
                    Smoking: true,
                    Couples: !this.state.Couples})}>
                    <View style={styles.borderW}>
                        <Text style={styles.textType}>Couples Allowed</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }else{
            return (
                <TouchableNativeFeedback onPress={()=>this.setState({
                    Pets: true,
                    Students: true,
                    Smoking: true,
                    Couples: !this.state.Couples})}>
                    <View style={styles.borderW1}>
                        <Text style={styles.textType1}>Couples Allowed</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }
       }
    render() {
        return(
            <View style={{flexDirection: 'row', marginBottom: 15}}>
                <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
                    {this.Pets()}
                    {this.Students()}
                    {this.Smoking()}
                    {this.Couples()}
                </ScrollView>                        
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
