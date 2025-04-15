
const chords = {
  "C": ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
  "G": ["G", "Am", "Bm", "C", "D", "Em", "F#dim"],
  "D": ["D", "Em", "F#m", "G", "A", "Bm", "C#dim"],
  "A": ["A", "Bm", "C#m", "D", "E", "F#m", "G#dim"],
  "E": ["E", "F#m", "G#m", "A", "B", "C#m", "D#dim"],
  "B": ["B", "C#m", "D#m", "E", "F#", "G#m", "A#dim"],
  "F#": ["F#", "G#m", "A#m", "B", "C#", "D#m", "E#dim"],
  "F": ["F", "Gm", "Am", "Bb", "C", "Dm", "Edim"],
  "Bb": ["Bb", "Cm", "Dm", "Eb", "F", "Gm", "Adim"],
  "Eb": ["Eb", "Fm", "Gm", "Ab", "Bb", "Cm", "Ddim"]
};

let keys = Object.keys(chords);
let currentKey = "";
let correctChord = "";
let score = 0;
let total = 0;

function generateQuestion() {
  currentKey = keys[Math.floor(Math.random() * keys.length)];
  const options = chords[currentKey];
  correctChord = options[Math.floor(Math.random() * options.length)];
  
  document.getElementById("question").innerText = `Which chord belongs to the key of ${currentKey}?`;
  
  const shuffled = options.sort(() => 0.5 - Math.random()).slice(0, 4);
  if (!shuffled.includes(correctChord)) shuffled[0] = correctChord;

  const optionsHTML = shuffled.map(chord =>
    `<button onclick="checkAnswer('${chord}')">${chord}</button>`
  ).join(" ");
  
  document.getElementById("options").innerHTML = optionsHTML;
}

function checkAnswer(answer) {
  total++;
  if (answer === correctChord) {
    score++;
    alert("Correct!");
  } else {
    alert(`Wrong. Correct answer was ${correctChord}.`);
  }
  document.getElementById("score").innerText = `Score: ${score} / ${total}`;
}

document.getElementById("next-btn").addEventListener("click", generateQuestion);
window.onload = generateQuestion;
