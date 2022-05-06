// components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator } from 'react-native'
import AnimeItem from './AnimeItem'
import { getAnimesFromApi } from '../API/JikanAPI'

class Search extends React.Component {
   

    constructor(props) {
        super(props)
        this.searchedText = ""
        this.page = 0
        this.totalPages =""
        this.state = {
            animes: [],
            isLoading: false
        }
    }

    _displayDetailForAnime = (idAnime) => {
        console.log("Display anime with id" + idAnime)
        this.props.navigation.navigate("AnimeDetail", { idAnime: idAnime })
    }

    _loadAnimes() {
        if (this.searchedText.length > 0) {
            this.setState({isLoading: true})
            getAnimesFromApi(this.searchedText).then(data => {
                this.setState({ animes: data.results,
                isLoading: false
             })
    
          })
        }

    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />

                </View>
            )
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }
       


    render() {
       return (
           <View style={styles.main_container}>
               <Text style={styles.main_title}>Anime Database</Text>
               <TextInput style={styles.textinput} placeholder='Rechecher'
               onChangeText={(text) => this._searchTextInputChanged(text)}
               onSubmitEditing={() => this._loadAnimes()}/>
               <Button style={styles.button} title='Rechercher' onPress={() => this._loadAnimes()}/>
               <FlatList
                 data={this.state.animes}
                 keyExtractor={(item, index) => index.toString()}
                 renderItem={({item}) => <AnimeItem anime={item} displayDetailForAnime={this._displayDetailForAnime}/>}
                 onEndReachedThreshold={0.5}
                 onEndReached={() => {
                     console.log("onEndReached")

                 }}
                
                />
                {this._displayLoading()}
             
           </View>

       )
    }

}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 100,
      
       
    },
    textinput: { 
        marginLeft: 5,
        marginRight: 5,
        height: 50, 
        borderColor: '#000000', 
        borderRadius: 8,
        borderWidth: 1, 
        paddingLeft: 5
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'

    },
    button: {
        borderRadius: 8,
        width: 10,
    }
})

export default Search
