import React, {Component} from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Image,
    Button,
    ImageBackground
 } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { ScrollView } 
    from 'react-native-gesture-handler' 
import Deck from '../components/Deck';
import Cards from '../components/Cards';
import Buttons from '../components/Buttons';


const DATA = [
    {
        id:1,
        title:"CORONAVIRUS CASES",
        number:"1 838 456"
    },
    {
        id:2,
        title:"TOTAL DEATHS",
        number:"1 29 863"
    },
    {
        id:3,
        title:"RECOVERED",
        number:"838 456"
    }
]
export default class Home extends Component {

 renderCard(item){
   return(  
    <View key={item.id} style={styles.cardContainer}>
        <View style={styles.card}>
            <View>
                <Text style={styles.title}>{item.title}</Text>
                <Icon
                    name="ios-remove"
                    size={40}
                    color="red"
                    style={{marginTop:25}}
                />
                <Text style={styles.number}>{item.number}</Text>
            </View>
            <View style={{marginLeft:150}}>
                <Icon name="md-options" size={24} color="#FFF"/>
                <Text style={styles.textCovid}>COVID-19</Text>
            </View>
        </View>
    </View>
    );
}

renderNoMoreCards(){
    return(
        <View title="All Domne!">
            <Text style={styles.noCard}>NO MORE CARDS HERE</Text>
            <Button backgroundColor="#03A9F4" title="Get more!"/>
        </View>
    );
}

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground
                    source={require("../images/unnamed.jpg")}
                    style={styles.map}
                >
                    <View style={styles.col}>
                        <View style={{width:"50%"}}>
                            <Icon name="md-remove" color="#FFF" size={26}/>
                            <Icon
                                name="md-remove"
                                color="#FFF"
                                size={26}
                                style={styles.minusIcon}
                            />
                        </View>
                        <View style={styles.avatarContainer}>
                            <Image
                                source={require('../images/1.jpeg')}
                                style={styles.avatar}
                            />
                        </View>
                    </View>
                    <Text style={styles.textDash}>CORONA DASH</Text>

                    <View style={styles.colContainer}>
                        <Text style={styles.textGlobal}>GLOBAL</Text>
                        <Text style={styles.textRussia}>RUSSIA</Text>
                        <View style={styles.reloadContainer}>
                            <Icon name="md-refresh" size={24} color="red"/>
                        </View>
                    </View>
                </ImageBackground>
                <Deck
                    data={DATA}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                />
                <ScrollView 
                    style={{marginTop:170}}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                >
                    <Cards
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        icon="md-pulse"
                        title="TOTAL CASES"
                        bg="red"
                        number="113 329"
                    />
                     <Cards
                        icon="ios-git-network"
                        title="RECOVERED"
                        bg="#FFF"
                        number="442 329"
                    />
                     <Cards
                        icon="ios-heart-dislike"
                        title="DEATH CASES"
                        bg="#FFF"
                        number="113 329"
                    />
                </ScrollView>
                <View style={{marginBottom:34}}>
                    <Buttons 
                        name="ASYMPTOMATIC"
                        number="1 778"
                    />
                     <Buttons 
                        name="SYMPTOMATIC"
                        number="1 578"
                    />

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#1c2732"
    },
    cardContainer:{
        height:150,
        width:320,
        alignSelf:"center",
        backgroundColor:"#6A706E",
        borderRadius:30
    },
    card:{
        height:150,
        width:260,
        paddingTop:20,
        paddingHorizontal:30,
        backgroundColor:'#2b3240',
        borderRadius:30,
        flexDirection:'row'
    },
    title:{
        color:"#6A706E",
        width:100,
        fontSize:12,
        fontWeight:"bold"
    },
    number:{
        color:"#FFF",
        width:100,
        fontSize:22,
        fontWeight:"bold",
        marginTop:-10,
    },
    textCovid:{
        transform:[{ rotate : "-90deg"}],
        color:"#3a4b4f",
        fontSize:14,
        width:90,
        marginLeft:-35,
        fontWeight:'bold',
        marginTop:20
    },
    noCard:{
        marginBottom:10,
        color:'#FFF',
        alignSelf:"center"
    },
    map:{
        height:200,
        paddingTop:25,
        paddingHorizontal:20,
        marginBottom:15
    },
    col:{
        flexDirection:'row'
    },
    minusIcon:{
        marginTop:-20,
        marginLeft:5
    },
    avatarContainer:{
        width:"50%",
        alignItems:'flex-end',
    },
    avatar:{
        width:40,
        height:40,
        borderRadius:20
    },
    textDash:{
        color:"#FFF",
        fontSize:20,
        alignSelf:'center',
        marginTop:15,
        fontWeight:'bold'
    },
    colContainer:{
        flexDirection:"row",
        paddingHorizontal:30,
        marginTop:40,
        alignItems:'center',
    },
    textGlobal:{
        fontWeight:"bold",
        fontSize:16,
        color:"red"
    },
    textRussia:{
        fontWeight:"bold",
        fontSize:16,
        paddingHorizontal:30,
        color:"#6a706e"
    },
    reloadContainer:{
        backgroundColor:"#FFF",
        elevation:2,
        width:40,
        height:40,
        borderRadius:20,
        alignItems:'center',
        justifyContent:"center",
        marginLeft:50
    }


});