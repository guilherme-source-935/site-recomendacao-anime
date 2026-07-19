const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()
let temporadaAtual = dataAtual.getMonth()

if(temporadaAtual <= 2){
    temporadaAtual = "WINTER"
} else if(temporadaAtual <= 5) {
    temporadaAtual = "SPRING"
} else if(temporadaAtual <= 8) {
    temporadaAtual = "SUMMER"
} else{
    temporadaAtual = "FALL"
}

const query = `query (
    $page: Int = 1
    $id: Int
    $isAdult: Boolean = false
    $season: MediaSeason
    $seasonYear: Int
    $genres: [String]
    $sort: [MediaSort] = [POPULARITY_DESC, SCORE_DESC]
) {
    Page(page: $page, perPage: 20) {
        pageInfo {
            hasNextPage
        }
        media(
            id: $id
            season: $season
            seasonYear: $seasonYear
            genre_in: $genres
            sort: $sort
            isAdult: $isAdult
        ) {
            id
            title {
                romaji
            }
            genres
            coverImage{
                large
            }
            averageScore
            season
            seasonYear
        }
    }
}`

const variables = {
    season: temporadaAtual,
    seasonYear: anoAtual
}

const url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    }

fetch(url, options).then(handleResponse)
    .then(handleData)
    .catch(handleError)

function handleResponse(response){
    return response.json().then(function(json){
        return response.ok ? json : Promise.reject(json)
    })
}

function handleData(data){
    console.log(data.data.Page.media)
    let animeHero = data.data.Page.media.filter((anime) => anime.averageScore >= 80)
    animeHeroFinal = animeHero.map(((anime, index) => {
        let animeHeroHtml = `
            <div class="carousel-item card ${index == 0 ? 'active' : ''}">
                <img src="${anime.coverImage.large}" class="d-block w-100" alt="${anime.title.romaji}">
                <div class="card-body">
                    <h5 class="card-titulo">${anime.title.romaji}</h5>
                    <p class="card-texto">${anime.genres.join(', ')}</p>
                </div>
            </div>
        `
        return animeHeroHtml
    }))
    let animeJoinHero = animeHeroFinal.join('')
    let carouselDomHero = document.querySelector("#carousel-hero-inner")
    carouselDomHero.innerHTML = animeJoinHero
    let animeFinal = data.data.Page.media.map((anime, index) => {
        let animeHtml = `
            <div class="carousel-item card ${index == 0 ? 'active' : ''}">
                <img src="${anime.coverImage.large}" class="d-block w-100" alt="${anime.title.romaji}">
                <div class="card-body">
                    <h5 class="card-titulo">${anime.title.romaji}</h5>
                    <p class="card-texto">${anime.genres.join(', ')}</p>
                </div>
            </div>
        `
        return animeHtml
    })
    let animeJoin = animeFinal.join('')
    let carouselDom = document.querySelector("#carousel-novidades-inner")
    carouselDom.innerHTML = animeJoin
    inicializarCarousel()
}

function handleError(error){
    alert('Erro encontrado. Veja o console')
    console.error(error)
}