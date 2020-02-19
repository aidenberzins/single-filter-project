//  create card with image title and category
const cardStack = document.querySelector(".card-stack");
const all = document.querySelector("#all");
const ps4 = document.querySelector("#ps4");
const xbox = document.querySelector("#xbox");
const nintendo = document.querySelector("#switch");

const videogames = [
  [
    "https://media.contentapi.ea.com/content/dam/masseffect/en-us/migrated-images/2016/07/en-us-featured-image.jpg.adapt.crop191x100.1200w.jpg",
    "Mass Effect: Andromeda",
    "PS4"
  ],
  [
    "https://steamcdn-a.akamaihd.net/steam/apps/1064273/ss_511e0d20625b9dd6f1ed7147a9bccd87f53b2efc.1920x1080.jpg?t=1573778248",
    "Halo 4",
    "Xbox"
  ],
  [
    "https://hb.imgix.net/1b3a4d196de3d01bbde10c224b7b3fb9327811c0.jpg?auto=compress,format&fit=crop&h=353&w=616&s=b8b0a08c1ad2114384019e40f9175680",
    "Super Mario Bros Deluxe",
    "Switch"
  ]
];
let category = "all";
videogames.forEach(createGameCard);

function createGameCard(game) {
  if (game[2] == category || category == "all") {
    let newGame = document.createElement("DIV");
    let image = document.createElement("IMG");
    let info = document.createElement("DIV");
    let title = document.createElement("h3");
    let cat = document.createElement("span");

    newGame.classList.add("card");
    image.classList.add("card-image");
    info.classList.add("info");
    title.classList.add("title");
    cat.classList.add("category");

    image.src = game[0];
    title.innerHTML = game[1];
    cat.innerHTML = game[2];

    info.append(title);
    info.append(cat);

    newGame.append(image);
    newGame.append(info);

    cardStack.append(newGame);
  }
}

all.addEventListener("click", function() {
  all.classList.add("active");
  ps4.classList.remove("active");
  xbox.classList.remove("active");
  nintendo.classList.remove("active");
  cardStack.innerHTML = "";
  console.info("all");
  category = "all";
  videogames.forEach(createGameCard);
});

ps4.addEventListener("click", function() {
  all.classList.remove("active");
  ps4.classList.add("active");
  xbox.classList.remove("active");
  nintendo.classList.remove("active");
  cardStack.innerHTML = "";
  category = "PS4";
  videogames.forEach(createGameCard);
  console.info("ps4");
});

xbox.addEventListener("click", function() {
  all.classList.remove("active");
  ps4.classList.remove("active");
  xbox.classList.add("active");
  nintendo.classList.remove("active");
  cardStack.innerHTML = "";
  console.info("Xbox");
  category = "Xbox";
  videogames.forEach(createGameCard);
});

nintendo.addEventListener("click", function() {
  all.classList.remove("active");
  ps4.classList.remove("active");
  xbox.classList.remove("active");
  nintendo.classList.add("active");
  cardStack.innerHTML = "";
  console.info("nintendo");
  category = "Switch";
  videogames.forEach(createGameCard);
});
