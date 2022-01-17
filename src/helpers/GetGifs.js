export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=wYjAChQkgw22oo7LsA8B2n9c79GyHT0R`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    console.log(data);
    return data.map(img => {
        return {
            id: img.id, title: img.title, url: img.images?.downsized_medium.url
        }
    });
}

