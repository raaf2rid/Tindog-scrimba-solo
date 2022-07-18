// Remember to import the data and Dog class!
import Dog from "./Dog.js";
import dogs from "./data.js";

const profileHtml = document.getElementById("profile");
const btnDiv = document.getElementById("btn-div");
const crossBtn = document.getElementById("cross-btn");
const heartBtn = document.getElementById("heart-btn");

let dogData = "";

function renderDog() {
  crossBtn.disabled = false;
  heartBtn.disabled = false;

  const getDog = dogs.shift();
  const showDog = new Dog(getDog);
  profileHtml.innerHTML = showDog.renderHtml();

  dogData = getDog;

  if (dogData.hasBeenSwiped) {
    dogs.unshift(getDog);
    profileHtml.innerHTML = `<h1 class="endmsg">No more profile to show!</h1>`;
    btnDiv.innerHTML = "";

    console.log(dogs);
  }
}

renderDog();

crossBtn.addEventListener("click", () => {
  crossBtn.disabled = true;
  heartBtn.disabled = true;


  Object.assign(dogData, { hasBeenSwiped: true });

  dogs.push(dogData);

  const nope = document.querySelector(".noped");

  nope.style.display = "block";

  setTimeout(renderDog, 1000);
});

heartBtn.addEventListener("click", () => {
  heartBtn.disabled = true;
  crossBtn.disabled = true;

  Object.assign(dogData, { hasBeenSwiped: true, hasBeenLiked: true });

  dogs.push(dogData);

  const like = document.querySelector(".liked");

  like.style.display = "block";

  setTimeout(renderDog, 1000);
});
