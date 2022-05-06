// JikanAPI

export function getAnimesFromApi (text, page) {
    const url = 'https://api.jikan.moe/v3/search/anime?q=' + text 
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getAnimeDetailFromApi (id) {
    return fetch('https://api.jikan.moe/v3/anime/' + id)
    .then((response) => response.json())
    .catch((error) => console.error(error)) 

}
