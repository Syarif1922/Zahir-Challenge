import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-fa-icons';


export default class Room extends React.Component {
    state= {
        image: this.props.navigation.state.params.image,
        price: this.props.navigation.state.params.price,
        title: this.props.navigation.state.params.title,
        description: this.props.navigation.state.params.description
    }

    render() {
        return(
            <View>
               
                <ScrollView>
                <ImageBackground
                                    style={styles.image}
                                    source={{uri:this.state.image}}>
                <View style={styles.available}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Available')}>

                <Image 
                                        source={require('../asset/3.png')}
                                        style={styles.home}/>
                                        </TouchableOpacity>
                <Icon name="search" style={styles.icon}/>
                </View>
                </ImageBackground>
                                
                <View style={styles.viewprice}>
                                <View style={styles.price}>
                                    <Text style={styles.euro}>{this.state.price} euro</Text>
                                </View>
                            </View>
                            <View style={{marginHorizontal: 20}}>
                <Text style={styles.title}>{this.state.title}</Text>
                <Text style={styles.description}>{this.state.description}</Text>
                </View>
                
                

                </ScrollView>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    viewprice: {
        zIndex: 2, 
        justifyContent: 'center', 
        alignItems: 'flex-end', 
        bottom: 15
    },
    price: {
        backgroundColor: '#17cdaa', 
        width: 80, 
        height: 30, 
        borderRadius: 20,
        justifyContent: 'center', 
        alignItems: 'center', 
        right: 15
    },
    euro: {
        fontFamily: 'Loboto_Light',
        fontSize: 15
    },
    image: {
        height: 250, 
        width: '100%',
    },
    styleAvail: {
        justifyContent: 'center', 
        alignItems: 'center', 
        zIndex: 1
    },
    icon: {
        fontSize: 20, 
        color: 'white',
    },
    home: {
        width: 15, 
        height: 15
    },
    available: {
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        paddingTop: 15, 
        marginHorizontal: 15
    },
    title: {
        fontSize: 20, 
        fontFamily: 'Loboto_Light'
    },
    description: {
        fontSize: 15, 
        fontFamily: 'Loboto_Light', 
        color: '#A9A9A9'
    }
})