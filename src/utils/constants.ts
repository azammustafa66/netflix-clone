export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmFkNGE5YTM1Mzk2ZWRlZWM2OTgxN2M5YjhkNzE0MyIsInN1YiI6IjY0ZWFjZDdhNDU4MTk5MDBhZGE5YmNhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oEbXZ0y0t7qj1RaWOjmtwzvviNcRqRwtyXFp_zGYqoQ",
  },
};

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&region=IN`,
  fetchNetflixOriginals: `/discover/tv?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&with_networks=213&region=IN`,
  fetchTopRated: `/movie/top_rated?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&region=IN`,
  fetchActionMovies: `/discover/movie?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&with_genres=28&region=IN`,
  fetchComedyMovies: `/discover/movie?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&with_genres=35&region=IN`,
  fetchHorrorMovies: `/discover/movie?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&with_genres=27&region=IN`,
  fetchRomanceMovies: `/discover/movie?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&with_genres=10749&region=IN`,
  fetchDocumentaries: `/discover/movie?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&with_genres=99&region=IN`,
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

// export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
