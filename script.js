const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjQzNTFiY2ViYzg2NTQxNDdiMjZkMTExMmYwNDEwMiIsInN1YiI6IjY2MmQ1ZjY0N2Q1ZGI1MDEyNjNkOTY5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aaOXF6WDnthWBppjYSiYUNuB5d2qtFNORCdhVLc5uPQ'
    }
  };
  
    // fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1')
   
    // const fetchdata = async() => {

    //     return (await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)).json();
    // }

    //   console.log(await fetchdata());

let moviedata =[];

   fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(data => {
      moviedata = data.results;
  })


  .catch(err => console.error(err));





















