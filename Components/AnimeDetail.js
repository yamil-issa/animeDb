import React from "react";
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image } from 'react-native'
import { getAnimeDetailFromApi } from '../API/JikanAPI'
import moment from 'moment'
import numeral from 'numeral'


class AnimeDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            anime: undefined,

            isLoading: true
        }
    }

    componentDidMount() {
        getAnimeDetailFromApi(this.props.navigation.state.params.idAnime).then(data => {
                this.setState({
                    anime: data,
                    isLoading: false
                })
            })
    }

    _displayLoading(){
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />

                </View>
            )
        }
    }

    _displayAnime() {
        if(this.state.anime != undefined) {
            return (
                <ScrollView style={styles.scrollview_container}>
                    <Image
                 style={styles.image}
                 source={{uri: this.state.anime.image_url}}
              />
                    <Text style={styles.title_text}>{this.state.anime.title}</Text>
                    <Text style={styles.description_text}>{this.state.anime.synopsis}</Text>
                    <Text style={styles.default_text}>Score : {this.state.anime.score}</Text>
                    <Text style={styles.default_text}>Status : {this.state.anime.status}</Text>


                </ScrollView>
            )
        }
    }
    render() {
        return (
            <View style={styles.main_container}>
                {this._displayLoading()}
                {this._displayAnime()}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollview_container: {
        flex: 1
    },
    image: {
        width: 270,
        height: 250,
        margin: 5,
        marginLeft: 50
    

    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 35,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        color: '#000000',
        textAlign: 'center'

    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666',
        margin: 5,
        marginBottom: 15

    },
    default_text: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    }

})

export default AnimeDetail
