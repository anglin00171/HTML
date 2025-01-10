
document.addEventListener('DOMContentLoaded', async () => {
    const baseURL = 'https://v2.api.noroff.dev/';
    const movieID = 'transformers-1'; // The ID of the movie we want to fetch

    async function fetchMovie(movieID) {
        try {
            const response = await fetch(`${baseURL}movies/${movieID}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const movie = await response.json();
            return movie.data;
        } catch (error) {
            console.error('Error fetching movie:', error);
            return null;
        }
    }

    function displayMovie(movie) {
        if (!movie) return;

        const movieContainer = document.getElementById('movieContainer');
        movieContainer.innerHTML = ''; // Clear any existing content

        const movieElement = document.createElement('div');
        movieElement.className = 'movie';
        movieElement.innerHTML = `
            <h1>${movie.title}</h1>
            <h2>${movie.released}</h2>
            <p>${movie.description}</p>
            <a href="https://www.imdb.com/title/${movie.id}/videogallery/" target="_blank" class="cta-trailer">Watch Trailer</a>
            <img src="${movie.image.url}" alt="${movie.image.alt}">
            <h4>$${movie.price}</h4>
            <button class="addToCart">Add to Cart</button>
        `;
        movieContainer.appendChild(movieElement);
    }

    const movie = await fetchMovie(movieID);
    displayMovie(movie);
});




