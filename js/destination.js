const list = document.querySelector(".list");
const moon = document.getElementById("Moon");
const mars = document.getElementById("Mars");
const europa = document.getElementById("Europa");
const titan = document.getElementById("Titan");

moon.style.textAlign = "center";
moon.style.borderBottom = "4px solid white";
moon.style.color = "white";
moon.style.paddingBottom = "15px";

function changeDetails(e) {
  const element = e.target;

  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      const img = document.getElementById("globe");
      const name = document.getElementById("title");
      const description = document.getElementById("text");
      const distance = document.getElementById("dist");
      const travel = document.getElementById("time");

      switch (element) {
        case moon:
          img.src = data.destinations[0].images.webp;
          name.innerHTML = data.destinations[0].name;
          description.innerHTML = data.destinations[0].description;
          distance.innerHTML = data.destinations[0].distance;
          travel.innerHTML = data.destinations[0].travel;

          moon.style.textAlign = "center";
          moon.style.borderBottom = "4px solid white";
          moon.style.color = "white";
          moon.style.paddingBottom = "15px";

          mars.style.textAlign = "";
          mars.style.borderBottom = "";
          mars.style.color = "";
          mars.style.paddingBottom = "";

          europa.style.textAlign = "";
          europa.style.borderBottom = "";
          europa.style.color = "";
          europa.style.paddingBottom = "";

          titan.style.textAlign = "";
          titan.style.borderBottom = "";
          titan.style.color = "";
          titan.style.paddingBottom = "";

          break;
        case mars:
          img.src = data.destinations[1].images.webp;
          name.innerHTML = data.destinations[1].name;
          description.innerHTML = data.destinations[1].description;
          distance.innerHTML = data.destinations[1].distance;
          travel.innerHTML = data.destinations[1].travel;

          moon.style.textAlign = "";
          moon.style.borderBottom = "";
          moon.style.color = "";
          moon.style.paddingBottom = "";

          mars.style.textAlign = "center";
          mars.style.borderBottom = "4px solid white";
          mars.style.color = "white";
          mars.style.paddingBottom = "15px";

          europa.style.textAlign = "";
          europa.style.borderBottom = "";
          europa.style.color = "";
          europa.style.paddingBottom = "";

          titan.style.textAlign = "";
          titan.style.borderBottom = "";
          titan.style.color = "";
          titan.style.paddingBottom = "";

          break;
        case europa:
          img.src = data.destinations[2].images.webp;
          name.innerHTML = data.destinations[2].name;
          description.innerHTML = data.destinations[2].description;
          distance.innerHTML = data.destinations[2].distance;
          travel.innerHTML = data.destinations[2].travel;

          moon.style.textAlign = "";
          moon.style.borderBottom = "";
          moon.style.color = "";
          moon.style.paddingBottom = "";

          mars.style.textAlign = "";
          mars.style.borderBottom = "";
          mars.style.color = "";
          mars.style.paddingBottom = "";

          europa.style.textAlign = "center";
          europa.style.borderBottom = "4px solid white";
          europa.style.color = "white";
          europa.style.paddingBottom = "15px";

          titan.style.textAlign = "";
          titan.style.borderBottom = "";
          titan.style.color = "";
          titan.style.paddingBottom = "";

          break;
        case titan:
          img.src = data.destinations[3].images.webp;
          name.innerHTML = data.destinations[3].name;
          description.innerHTML = data.destinations[3].description;
          distance.innerHTML = data.destinations[3].distance;
          travel.innerHTML = data.destinations[3].travel;

          moon.style.textAlign = "";
          moon.style.borderBottom = "";
          moon.style.color = "";
          moon.style.paddingBottom = "";

          mars.style.textAlign = "";
          mars.style.borderBottom = "";
          mars.style.color = "";
          mars.style.paddingBottom = "";

          europa.style.textAlign = "";
          europa.style.borderBottom = "";
          europa.style.color = "";
          europa.style.paddingBottom = "";

          titan.style.textAlign = "center";
          titan.style.borderBottom = "4px solid white";
          titan.style.color = "white";
          titan.style.paddingBottom = "15px";

          break;

        default:
          break;
      }
    });
}

list.addEventListener("click", changeDetails);
