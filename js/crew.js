const circleList = document.querySelector(".circle-containers");
const circles = document.querySelectorAll(".circle");

circles[0].style.background = "white";

function changeDetails(e) {
  const element = e.target;

  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      const img = document.getElementById("image");
      const name = document.getElementById("name");
      const role = document.getElementById("role");
      const text = document.querySelector(".text");

      switch (element) {
        case circles[0]:
          img.src = data.crew[0].images.webp;
          name.innerHTML = data.crew[0].name;
          role.innerHTML = data.crew[0].role;
          text.innerHTML = data.crew[0].bio;

          circles[0].style.background = "white";
          circles[1].style.background = "";
          circles[2].style.background = "";
          circles[3].style.background = "";

          break;
        case circles[1]:
          img.src = data.crew[1].images.webp;
          name.innerHTML = data.crew[1].name;
          role.innerHTML = data.crew[1].role;
          text.innerHTML = data.crew[1].bio;

          circles[0].style.background = "";
          circles[1].style.background = "white";
          circles[2].style.background = "";
          circles[3].style.background = "";

          break;
        case circles[2]:
          img.src = data.crew[2].images.webp;
          name.innerHTML = data.crew[2].name;
          role.innerHTML = data.crew[2].role;
          text.innerHTML = data.crew[2].bio;

          circles[0].style.background = "";
          circles[1].style.background = "";
          circles[2].style.background = "white";
          circles[3].style.background = "";

          break;
        case circles[3]:
          img.src = data.crew[3].images.webp;
          name.innerHTML = data.crew[3].name;
          role.innerHTML = data.crew[3].role;
          text.innerHTML = data.crew[3].bio;

          circles[0].style.background = "";
          circles[1].style.background = "";
          circles[2].style.background = "";
          circles[3].style.background = "white";

          break;

        default:
          break;
      }
    });
}

circleList.addEventListener("click", changeDetails);
