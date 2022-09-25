/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-domain").innerHTML = generateDomain();
  });
};

let generateDomain = () => {
  let pronoun = ["the", "my", "our", "a", "your"];
  let adjective = [
    "great",
    "grand",
    "big",
    "super",
    "new",
    "free",
    "good",
    "nice"
  ];
  let noun = ["web", "space", "website", "place"];
  let extension = [".com", ".es", ".net", ".us", ".io", ".org", ".web"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adjective.length);
  let nouIndex = Math.floor(Math.random() * noun.length);
  let extIndex = Math.floor(Math.random() * extension.length);

  return (
    "www." +
    pronoun[proIndex] +
    adjective[adjIndex] +
    noun[nouIndex] +
    extension[extIndex]
  );
};
