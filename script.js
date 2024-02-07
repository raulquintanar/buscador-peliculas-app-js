document.getElementById('searchButton').addEventListener('click',searchMovies)

let api_key = '91c07cc966d843fe7936637be5d03cb1'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlBaseimg = 'https://image.tmdb.org/t/p/w500/'

let resultContainer = document.getElementById('results')


function searchMovies(){
    resultContainer.innerHTML = 'Cargando...'
    let searchInput = document.getElementById('searchInput').value

    fetch(`${urlBase}?query=${searchInput}&api_key=${api_key}`)
    .then(response => response.json())  //Función callback
    .then(response => displayMovies(response))
}

function displayMovies(movies){

    resultContainer.innerHTML = ''
 
    console.log(movies.results)
    if(movies.length === 0){
        resultContainer.innerHTML = '<p> No se encontraron resultados para tu búsqueda </p>'
        return //Para que salga de la función y no ejecute las líneas subsecuentes
    }


    movies.results.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.textContent = 'La fecha de lanzamiento fue: ' + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview
 
        let posterPath = urlBaseimg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        resultContainer.appendChild(movieDiv)

    })

}