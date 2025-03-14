const baseUrl = "https://municipalidadchonchi.cl/web/wp-json/wp/v2/slide"

export const fetchSlides = async () => {
    const response = await fetch(`${baseUrl}?_embed`)
    const data = await response.json()
    return data
}