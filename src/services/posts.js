const baseUrl = "https://municipalidadchonchi.cl/web/wp-json/wp/v2/posts"

export const fetchPosts = async (page = 1, perPage = 4) => {
    const response = await fetch(`${baseUrl}?page=${page}&per_page=${perPage}&_embed`)
    const data = await response.json()
    return data
}