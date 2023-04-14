let img;
let img2;
let imgindic;

// La liste de progressions harmoniques
let progressions = [  ['vi', 'IV', 'I', 'V'],
  ['I', 'V', 'vi', 'IV'],
  ['iii', 'vi', 'IV', 'I'],
  ['I', 'IV', 'V'],
  ['IV', 'I', 'V', 'vi'],
  ['I', 'vi', 'IV', 'iii', 'V', 'IV'],
  ['vi', 'IV', 'I', 'V', 'IV'],
  ['IV', 'vi', 'I', 'V'],
  ['I', 'vi', 'IV', 'IV'],
  ['vi', 'IV', 'III', 'V'],
  ['IV', 'I', 'vi', 'V'],
  ['I', 'V', 'vi', 'iii'],
  ['ii', 'IV', 'I', 'V'],
  ['vi', 'IV', 'V', 'IV'],
  ['I', 'IV', 'vi', 'V'],
  ['I', 'V', 'vi', 'IV', 'V', 'IV'],
  ['iii', 'vi', 'ii', 'V'],
  ['vi', 'IV', 'I', 'IV'],
  ['IV', 'V', 'vi', 'iii'],
  ['vi', 'IV', 'V', 'I']
];

let currentProgression = null;

function preload() {
  img = loadImage("https://i.imgur.com/2wzqqNb.png");
  img2 = loadImage("https://i.imgur.com/OEKIlJc.png");
  imgindic = loadImage("https://i.imgur.com/aBqjZQn.png");
}

function setup() {
  createCanvas(500, 500);
  
  // Créer un bouton pour sélectionner une progression harmonique
  let button = createButton("C'est ici pour s'entrainer sur des progressions harmoniques célèbres POP/ROCK");
  button.mousePressed(selectRandomProgression);
}

function draw() {
  background(93, 109, 126 );
  // Afficher l'image en haut à gauche du canvas
  imageMode(CORNER);
  image(img, 0, 0, 100, 100);
  // Afficher l'image en haut à droite du canvas
  imageMode(CORNER);
  image(img2, width - 100, 0, 100, 100);
  
  // Vérifier que la variable currentProgression n'est pas null avant de l'afficher
  if (currentProgression != null) {
    // Afficher la progression harmonique courante
    textAlign(CENTER);
    textSize(50);
    fill(240, 243, 244);
    text(currentProgression.join(" - "), width/2, height/2);
  }
  else {
    textSize(30);
    text("HEY HO ! LET'S GO !", width/4, height/2);
  }
  // Afficher l'image en bas centrer du canvas
  imageMode(CENTER);
  image(imgindic, width - 270, 405, 450,175);
}

function selectRandomProgression() {
  // Choisir une progression harmonique aléatoire dans la liste
  let randomIndex = floor(random(progressions.length));
  currentProgression = progressions[randomIndex];
  
  // Redessiner l'arrière-plan
  background(93, 109, 126 );
}
