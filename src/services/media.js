const baseUrl = "https://municipalidadchonchi.cl/web/wp-json/wp/v2/media"

export const fetchMedia = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`)
    const data = await response.json()
    return data
}