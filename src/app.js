/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //write your code here

  var excuse = document.getElementById("excuse");

  let whoWord = who[Math.floor(Math.random() * who.length)];
  let actionWord = action[Math.floor(Math.random() * action.length)];
  let whatWord = what[Math.floor(Math.random() * what.length)];
  let whenWord = when[Math.floor(Math.random() * when.length)];

  excuse.innerHTML = `${whoWord} ${actionWord} ${whatWord} ${whenWord}`;
};
