import React from 'react'
import { StyleSheet, View, Text, Image, TouchableHighlight, Modal } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'



class AnimeItem extends React.Component {
    
   render() {
       const { anime, displayDetailForAnime}  = this.props

       return(
           <TouchableOpacity
                style={styles.main_container}
                onPress={() => displayDetailForAnime(anime.mal_id)}>
               <Image
                 style={styles.image}
                 source={{uri: anime.image_url}}
              />
               

               <View style={styles.content_container}>
                   <View style={styles.header_container}>
                   <Text style={styles.title_text}>{anime.title}</Text>

                   </View>
                   
                   
               </View>
           </TouchableOpacity>

       )
   }
}



const styles = StyleSheet.create({
    main_container: {
       height: 190,
       flexDirection: 'row'
    },

    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'

    },
   

    content_container: {
        flex: 1,
        margin: 5

    },

    header_container: {
        flex: 3,
        flexDirection: 'row'

    },

    title_text: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 20,
        flexWrap: 'wrap',
        paddingRight: 5

    },
    
})

export default AnimeItem

