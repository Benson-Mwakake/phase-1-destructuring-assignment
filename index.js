const animalSounds = "cow horse sheep pig chicken";
const [moo, neigh, baa, oink, cluck] = animalSounds.split(" ");

const animals = "cow sheep pig chicken";
const [bessie, dolly, babe, little] = animals.split(" ");

const animalColors = "cow sheep pig";
const [blackAndWhite, black, pink] = animalColors.split(" ");

const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = rainbow;

const [r, o, y, g, b, , v] = rainbow;

const [, , , , , indg, ] = rainbow;

const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
  songs: [
    "The Muppet Show Theme",
    "Moving Right Along",
    "Bein' Green",
    "I Hope That Something Better Comes Along",
  ],
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy",
};

const { muppetName, color, song, job, partner } = muppet;

const {
  songs: [, song2, , song4],
  nestedJob,
  nestedPartner,
} = muppet;
