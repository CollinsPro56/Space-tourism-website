const linkContainer = document.querySelector(".link");
const circles = document.querySelectorAll(".circle");

circles[0].style.background = "white";
circles[0].style.color = "#0b0d17";

function changeDetails(e) {
  const element = e.target;

  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      const img1 = document.getElementById("image1");
      const img2 = document.getElementById("image2");
      const name = document.getElementById("name");
      const text = document.querySelector(".text");

      switch (element) {
        case circles[0]:
          img1.src = data.technology[0].images.portrait;
          img2.src = data.technology[0].images.landscape;
          name.innerHTML = data.technology[0].name;
          text.innerHTML = data.technology[0].description;

          circles[0].style.background = "white";
          circles[0].style.color = "#0b0d17";
          circles[1].style.background = "";
          circles[1].style.color = "";
          circles[2].style.background = "";
          circles[2].style.color = "";

          break;
        case circles[1]:
          img1.src = data.technology[1].images.portrait;
          img2.src = data.technology[1].images.landscape;
          name.innerHTML = data.technology[1].name;
          text.innerHTML = data.technology[1].description;

          circles[0].style.background = "";
          circles[0].style.color = "";
          circles[1].style.background = "white";
          circles[1].style.color = "#0b0d17";
          circles[2].style.background = "";
          circles[2].style.color = "";

          break;
        case circles[2]:
          img1.src = data.technology[2].images.portrait;
          img2.src = data.technology[2].images.landscape;
          name.innerHTML = data.technology[2].name;
          text.innerHTML = data.technology[2].description;

          circles[0].style.background = "";
          circles[0].style.color = "";
          circles[1].style.background = "";
          circles[1].style.color = "";
          circles[2].style.background = "white";
          circles[2].style.color = "#0b0d17";

          break;

        default:
          break;
      }
    });
}

linkContainer.addEventListener("click", changeDetails);
