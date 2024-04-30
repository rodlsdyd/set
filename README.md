
![1](https://github.com/rodlsdyd/set/assets/54784395/c9721c57-27b5-4b8e-ac1b-452fc962d5bb)


## 개인프로젝트 

+  JS 문법의 핵심을 적용해 볼 수 있는 영화 검색 사이트를 제작
+  영화정보 오픈API인 TMDB(The Movie DB)를 사용

## Main.js 설명
```javascript
import { generateMovieCards } from "./movie.js";
import { handleSearch } from "./search.js";

generateMovieCards();
//영화 카드들을 생성하고있는 함수를 호출 이 함수를 불러올때 html 화면에서 20개의 영화가 보여진다

const searchInput = document.querySelector("#search-input");
//searchInput이라는 변수에다가 index.html에서 id가 search-input이라는걸 찾아서 담아주었다
//index.html 문서의 form에서 id ="search-input"
searchInput.focus();
// searchInput.focus(); focus를 실행하게되면 새로고침후에 커서가 깜빡깜빡 거리게끔 만들수가있다

const form = document.querySelector("#search-form");
//form이라는 변수에다가  index.html에서 id가 search-form를 찾아서 담아주었다
form.addEventListener("submit",(event)=> {
  // 담아놓은 변수에 submit이라고 하는 이벤트가 발생할때마다
  // submit 동작이 발생할때마다 새로고침이 일어난다
  event.preventDefault();
  //여기서 preventdfault 을 사용하게되면 새로고침을 막아준다
  //새로고침을 막는이유는 새로운 리소스를 받아서 사용하는게 아니여서 현재 우리는 불필요한기능
  handleSearch(searchInput.value);
  //event 부터 handleSearch값까지 실행해라.
})
```


## movie.js 설명
```javascript

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
  

  // 아래부터는 openAPi를 받아서 사용하는방법
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

```

## search.js 설명

```javascript

export const handleSearch = (searchKeyword) => {
    const movieCards = document.querySelectorAll(".movie-card");
    // movieCards에 li태그 20개를 넣어놨다
  
    movieCards.forEach((card) => {
        //forEach를 이용해 배열과 똑같이 함수를 인자로받는다
      const title = card.querySelector(".movie-title").textContent.toLowerCase();
      // li 태그들중에서 movie 타이틀을찾아라 그리고 textContent를 찾아라 그리고 tolower case 소문자로다 바꿔라
      const searchedValue = searchKeyword.toLowerCase();
      // 그리고 serachkeyword
  
      if (title.includes(searchedValue)) {
        card.style.display = "block";
        // title 값이 입력한 검색어를 포함을하고있으면 보여주고
      } else {
        card.style.display = "none";
        // 만약 다르다면 숨겨라
      }
    });
  };

```











