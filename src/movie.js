export const generateMovieCards = async () => {
    const movies = await fetchMovieData();
    //async 를 사용한 fetchMoviedata를 movies라는 변수에다가 담아주었습니다
  
    const cardList = document.querySelector("#card-list");
    //cardList 라는 변수에다가 index.html에 있는 card-list를 찾아서 넣어주었다
    //cardlist를 살펴보니 <ul> 태그였고  <ul> 태그안에는 <li>태그들이 붙어서 나온다는걸 예상할수있다<li>
    cardList.innerHTML = movies
    //cardList인 Ul태그형식에 (innerHTML은 형식이 전부 문자열) 총20개의 문자열을 movies값을 담아라 
    //map으로 담게되면 무조건 배열형식으로 받아온다
      .map(
        //map 안에 movie라는 함수를 선언
        (movie) =>`
            <li class="movie-card" id=${movie.id}>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <h3 class="movie-title">${movie.title}</h3>
                <p>${movie.overview}</p>
                <p>Rating: ${movie.vote_average}</p>
            </li>`
      )
      .join("");
      //join을 사용하게되면 문자열로 다시 바꿔준다
  
    cardList.addEventListener("click", handleClickCard);
    //ul태그에 클릭이 발생했을때 handleClickCard를 실행시켜달라
  
    // 이벤트 위임: 하위요소에서 발생한 이벤트를 상위요소에서 처리하도록 해줍니다.
    function handleClickCard({ target }) {
      // 카드 외 영역 클릭 시 무시
      if (target === cardList) return;
    // javascript 는 return 을 만나게되면 함수를 종료하게된다
      if (target.matches(".movie-card")) {
        alert(`영화 id: ${target.id}`);
        //카드 부분을 클릭했는데 그부분이 <li>속성의  movie card 라면 접근해서 alert를 띄우는것

      } else {
        // 카드의 자식 태그 (img, h3, p) 클릭 시 부모의 id로 접근
        alert(`영화 id: ${target.parentNode.id}`);
        // 내가 클릭한것이 <li>의 자식이라면 부모로 가서 alert를 띄우는것
      }
    }
  };
  
  async function fetchMovieData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NThhODc2ZTY5NDA4NWY4YTA1MmQyNjc5MTRhY2RlMiIsInN1YiI6IjYxYzNjZjY5MzdiM2E5MDBjMzQ2YzYyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pPkre3BdMQtujbkqtPmW7TC_022A-ZR2M_ZShzd_kDU",
      },
    };
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&include_adult=false",
      options
    );
    const data = await response.json();
    return data.results;
  }



  // const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjQzNTFiY2ViYzg2NTQxNDdiMjZkMTExMmYwNDEwMiIsInN1YiI6IjY2MmQ1ZjY0N2Q1ZGI1MDEyNjNkOTY5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aaOXF6WDnthWBppjYSiYUNuB5d2qtFNORCdhVLc5uPQ'
//     }
//   };
  


//     fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


