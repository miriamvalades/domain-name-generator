let generateDomain = () => {
  let pronoun = ["the", "my", "our", "a", "your"];
  let adj = ["great", "grand", "big", "super", "new", "free", "good", "nice"];
  let noun = ["web", "space", "website", "place"];
  let extension = [".com", ".es", ".net", ".us", ".io", ".org", ".web"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let m = 0; m < extension.length; m++) {
          console.log(pronoun[i] + adj[j] + noun[k] + extension[m]);
        }
      }
    }
  }
};

generateDomain();

/* import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#domain-names").innerHTML = generateDomain();
};

let generateDomain = () => {
  let pronoun = ["the", "my", "our", "a", "your"];
  let adj = ["great", "grand", "big", "super", "new", "free", "good", "nice"];
  let noun = ["web", "space", "website", "place"];
  let extension = [".com", ".es", ".net", ".us", ".io", ".org", ".web"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let m = 0; m < extension.length; m++) {
          console.log(pronoun[i] + adj[j] + noun[k] + extension[m]);
        }
      }
    }
  }
};

generateDomain();
 */
