function showAnswer(answerId) {
  let x = document.getElementById(answerId);

  if (x.style.display === "none" || x.style.display == "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}
