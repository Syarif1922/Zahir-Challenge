import React, {Component} from 'react';
import {View, ImageBackground, Text,StyleSheet,Image,StatusBar,ScrollView, TouchableOpacity, TouchableNativeFeedback, FlatList} from 'react-native';
import Icon from 'react-native-fa-icons';
import Data from '../Data/Rooms.json'
class Available extends Component {
    state= {
        data: Data,
        harga: this.props.navigation.state.params.price
    }
    _renderItem=({item})=>{
        let {image, price, title, description}=item
        let harga = this.state.harga
           if ( price <= harga) {
               return(
                    <TouchableNativeFeedback onPress={()=> this.props.navigation.navigate('Room', {
                        image: image, 
                        price: price,
                        title: title,
                        harga: harga,
                        description: description})}>
                        <View style={styles.viewAvail}>
                            <View style={styles.styleAvail}> 
                                <Image
                                    style={styles.image}
                                    source={{uri:image}}/>
                            </View> 
                            <View style={styles.viewprice}>
                                <View style={styles.price}>
                                    <Text style={styles.euro}>{price} euro</Text>
                                </View>
                            </View>
                            <Text style={styles.title}>{title}</Text>
                        </View>
                    </TouchableNativeFeedback>
                
            )               
        }
    }
   
    render () {
        return (
            
                <View style={styles.container}>
                    <ImageBackground 
                        source={require('../asset/1.jpg')}
                        style={styles.background}>
                        <StatusBar
                            backgroundColor='#17cdaa'/>
                            <View style={styles.viewText}>
                                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')}>
                                        <Image 
                                            source={require('../asset/3.png')}
                                            style={styles.home}/>
                                </TouchableOpacity>
                                <Text style={styles.textHeader}>Available Houses</Text>
                                <Icon name="search" style={styles.icon}/>
                            </View>
                        <ScrollView>
                            <View style={styles.viewBody}>
                                <View style={styles.body}>
                                    <FlatList
                                        data={this.state.data} 
                                        keyExtractor={(i)=> i.toString()}
                                        renderItem={this._renderItem}/>
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
        flex: 1,
        shadowOffset: {width: 5, height: 90},
        shadowColor: 'black',
        shadowOpacity: 10,
    },
    background: {
        height: '100%',
        width: '100%'
    },
    viewBody: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        height: '100%', 
        width: '90%',
        borderRadius: 6,
    },
    viewImage: {
        paddingLeft: 15,
        top: 10,
    },
    home: {
        width: 15, 
        height: 15
    },
    viewText: {
        justifyContent: 'space-between',
        alignItems: 'center', 
        flexDirection: 'row',
        marginHorizontal: 15,
        paddingVertical: 10,
        
    },
    textHeader:{
        fontSize:25,
        fontFamily:'Loboto_Light',
        color: 'white',
    },
    viewAvail: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5, 
        backgroundColor: 'white',  
        height:210, 
        width: '100%', 
        marginBottom: 10,
    },
    styleAvail: {
        justifyContent: 'center', 
        alignItems: 'center', 
        zIndex: 1,
        
    },
    viewprice: {
        zIndex: 2, 
        justifyContent: 'center', 
        alignItems: 'flex-end', 
        bottom: 15
    },
    image: {
        height: 150, 
        borderRadius: 5, 
        width: '100%'
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
    title: {
        fontFamily:'Loboto_Light', 
        zIndex: 1, 
        fontSize: 20, 
        left: 1,  
        bottom: 15
    },
    viewback: {
        flexDirection: 'row', 
        width: '90%',
        top: 10
    },
    icon: {
        fontSize: 20, 
        color: 'white'
    }
})

export default Available;
