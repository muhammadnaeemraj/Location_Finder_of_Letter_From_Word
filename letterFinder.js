let word = document.getElementById("word");
let letter = document.getElementById("letter").value;

function letterFinder(word, letter) {
  alert(word.value.length);
  for (let i = 0; i < word.value.length; i++) {
    if (word.value.charAt(i) == letter.value) {
      document.getElementById("loc").innerHTML = `Location of Letter is ${i}`;
    } else document.getElementById("loc").innerHTML = `Letter Not Found`;
  }
}
