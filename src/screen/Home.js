import React from 'react';
import {View,Text,StyleSheet, StatusBar, TouchableOpacity,ScrollView, Image, ImageBackground, Slider} from 'react-native';
import Propertytype from '../component/Propertytype';
import Number from '../component/Number'
import Features from '../component/Features';
import Rules from '../component/Rules';

class Home extends React.Component {
    state = {
        value: 100,
    }
    
    change(value) {
        this.setState(()=>{
            return {
                value: parseInt (value),
            };
        });
    }
    render () {
        const {value} = this.state
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../asset/1.jpg')}
                    style={styles.background}>
                    <ScrollView  showsVerticalScrollIndicator={false}>
                    <StatusBar
                        backgroundColor= '#17cdaa'/>
                        <View style={{flexDirection: 'row', width: '90%'}}>
                            <View style={styles.viewImage}>
                                <TouchableOpacity>
                                    <Image 
                                      source={require('../asset/2.png')}
                                      style={styles.home}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.viewText}>
                                <Text style={styles.textHeader}>Choose your home</Text>
                                <Text style={styles.textHeader}>preferences</Text>
                            </View>
                        </View>
                        <View style={styles.viewBody}>
                            <View style={styles.body}>
                                <Text style={styles.textBody}>Price Per Month</Text>
                                <Slider
                                    maximumTrackTintColor='red'
                                    minimumTrackTintColor='teal'
                                    maximumValue={1000}
                                    minimumValue={100}
                                    step={1}
                                    onValueChange={this.change.bind(this)}/>
                                <Text style={styles.textPrice}>€{String (this.state.value)}</Text>
                                <Text style={styles.textBody}>Property Type</Text>
                                    <Propertytype/>
                                <Text style={styles.textBody}>Number Of Rooms</Text>
                                    <Number/>
                                <Text style={styles.textBody}>Features</Text>
                                   <Features/>
                                <Text style={styles.textBody}>Rules</Text>
                                <Rules/>
                                <TouchableOpacity onPress ={() => this.props.navigation.navigate                ('Available',{price: (this.state.value)})}>
                                <View style={styles.styleSee}>
                                    <View style={styles.viewSee}>
                                        <Text style={styles.textSee}>See 3</Text>
                                    </View>
                                </View>
                                </TouchableOpacity>
                            </View> 
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        height: '100%',
        width: '100%'
    },
    home: {
        width: 20, 
        height: 20
    },
    textHeader:{
        fontSize:25,
        fontFamily:'Loboto_Light',
        color: 'white'
    },
    viewImage: {
        paddingLeft: 15, 
        paddingVertical: 10,
        paddingTop: 10,
    },
    viewText: {
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingLeft: '10%'
    },
    viewBody: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7
    },
    body: {
        backgroundColor: 'white', 
        height: '100%', 
        width: '90%', 
        borderRadius: 8,
    },
    textBody: {
        paddingLeft: 15, 
        marginTop: 8,
        fontSize: 15,
        fontFamily: 'Loboto_Light',
    },
    textPrice: {
        paddingLeft: 15,
        paddingBottom: 15,
        fontFamily:'Loboto_Light',
    },
    styleSee: {
        paddingVertical: '10%', 
        alignSelf: 'center'
    },
    viewSee: {
        backgroundColor: '#17cdaa', 
        height: 40, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 20
    },
    textSee: {
        marginHorizontal: 40, 
        fontSize: 25, 
        fontFamily: 'Loboto_Light', 
        color: 'white', 
        
    }
})
export default Home