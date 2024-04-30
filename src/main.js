
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


// defer 라는게 있는데 과거의 유산 현재는 module로 사용하면 완료가된다 기능은 script에 도착하게되면 멈추고 js로 가는
// 순서를 중단시키고 background 에서 다운을받아서 dom 트리형성에 방해가되지않고 실행을해주기때문이다
// 심지어 변수 이름이 같다고 하더라고 독립적으로 시행되기때문에 문제가 없다
// module을 사용하는 다른스크립트에서 함수를 사용하고싶으면 export 선언후 import로 사용하면된다

// html을 불러올때 파서가 먼저 밑으로 내려가면서 읽는다 
// 그후 script 를 만나게되면 js 엔진으로 넘어가서 순서대로 읽는다
// js에는 console.log를 만나 ul 을 불러오는데 null이 뜨는이유는
// html파서가 아직 html을 다읽기전 즉 dom 트리가 생성되기전에 읽었기때문에 null이나온다




















