const url = "http://localhost:8080/products";

// then() 은 프로미스 객체를 연결시켜주는 함수
axios
  .get(url)
  .then((response) => {
    console.log("응답 Response: ", response);
    disiplayProducts(response.data);
  })
  .catch((error) => {
    console.log("에러 발생: ", error);
  });

function disiplayProducts(gameData) {
  console.log(gameData.length);
  if (gameData.length > 0) {
    const content = document.querySelector(".content");
    gameData.forEach((data) => {
      const game = document.createElement("div");
      game.classList.add("game"); // dom 에다가 동적 데이터를 생성하는 방법
      const img = document.createElement("img");
      img.classList.add("image");
      img.src = data.image;
      game.appendChild(img);
      const title = document.createElement("p");
      const genre = document.createElement("p");
      const price = document.createElement("p");
      title.textContent = "게임 타이틀 : " + data.title;
      genre.textContent = "게임 장르 : " + data.genre;
      price.textContent = "게임 가격 : " + data.price;
      game.appendChild(title);
      game.appendChild(genre);
      game.appendChild(price);
      content.appendChild(game);
    });
  }
}
