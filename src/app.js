/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// BUENO:
window.onload = function() {
  function domainNameGenerator() {
    let pronoun = ["the", "my", "our", "a", "your"];
    let adj = ["great", "grand", "big", "super", "new", "free", "good", "nice"];
    let noun = ["web", "space", "website", "place"];
    let extension = [".com", ".es", ".net", ".us", ".io", ".org", ".web"];

    let allDomains = [];

    for (let i = 0; i < pronoun.length; i++) {
      for (let description = 0; description < adj.length; description++) {
        for (let thing = 0; thing < noun.length; thing++) {
          for (let address = 0; address < extension.length; address++) {
            allDomains.push(
              pronoun[i] + adj[description] + noun[thing] + extension[address]
            );
          }
        }
      }
    }
    return allDomains;
  }
  let domainCombo = domainNameGenerator();
  for (let a = 0; a < domainCombo.length; a++) {
    document.querySelector("#domain-names").innerHTML +=
      "<p>" + domainCombo[a] + "</p>";
  }
};
