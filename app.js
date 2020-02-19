//  create card with image title and category
const cardStack = document.querySelector(".card-stack");

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

videogames.forEach(createGameCard);

function createGameCard(game) {
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
