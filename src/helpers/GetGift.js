
export const getGif = async ( category ) => {
    const url_api =  `https://api.giphy.com/v1/gifs/search?api_key=TS3gNgzBp5lE4uWYTW25pLXWiz72aE1a&q=${ category }&limit=10`;
    const resp = await fetch(url_api);
    const { data } = await resp.json();

    const gifs = await data.map( (value) => ({
        id: value.id,
        title: value.title,
        url: value.images.downsized_medium.url
      }) );
    return gifs;
}
