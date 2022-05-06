import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Search from '../Components/Search'
import AnimeDetail from "../Components/AnimeDetail";

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher'
        }
    },
    AnimeDetail: {

        screen: AnimeDetail
    }
})

export default createAppContainer(SearchStackNavigator)
