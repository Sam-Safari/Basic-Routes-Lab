require('@testing-library/jest-dom');
require('whatwg-fetch');

// Mock data for Jest
const mockMovies = [
    { id: 1, title: "Doctor Strange", time: 115, genres: ["Action", "Adventure", "Fantasy"] },
    { id: 2, title: "Trolls", time: 92, genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"] },
    { id: 3, title: "Jack Reacher: Never Go Back", time: 118, genres: ["Action", "Adventure", "Crime", "Mystery", "Thriller"] }
];

const mockActors = [
    { id: 1, name: "Benedict Cumberbatch", movies: ["Doctor Strange", "The Imitation Game", "Black Mass"] },
    { id: 2, name: "Justin Timberlake", movies: ["Trolls", "Friends with Benefits", "The Social Network"] },
    { id: 3, name: "Anna Kendrick", movies: ["Pitch Perfect", "Into The Wood"] },
    { id: 4, name: "Tom Cruise", movies: ["Jack Reacher: Never Go Back", "Mission Impossible 4", "War of the Worlds"] }
];

const mockDirectors = [
    { id: 1, name: "Scott Derrickson", movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"] },
    { id: 2, name: "Mike Mitchell", movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"] },
    { id: 3, name: "Edward Zwick", movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"] }
];

// Mock fetch globally for all tests
beforeEach(() => {
    global.fetch = jest.fn((url) => {
        if (url.includes('/movies/1')) {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockMovies[0])
            });
        }
        if (url.includes('/movies')) {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockMovies)
            });
        }
        if (url.includes('/actors')) {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockActors)
            });
        }
        if (url.includes('/directors')) {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockDirectors)
            });
        }
        return Promise.reject(new Error('Unknown URL'));
    });
});

// Reset mocks after each test
afterEach(() => {
    jest.resetAllMocks();
});