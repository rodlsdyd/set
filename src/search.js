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