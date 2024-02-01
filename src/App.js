import logo from "./logo.svg";
import "./App.css";
import imageMeditate from "./assets/meditate.svg";
import { useState } from "react";

// App C'est mon composant principal. C'est lui qui sera lu ou compilé par mon navigateur.
function App() {
  const [selectedOption, setSelectedOption] = useState(null); // On a crée un state pour pouvoir stocker la valeur
  // du bouton radio pour savoir quelle option l'utilisateur a choisi.
  // On déclare notre composant principal et on lui donne un nom. On crée tous les autres composants à partir de là.
  function maFonction() {
    let listMantra = ["Om", "So", "Am", "Sat Nam"];

    let listAffirmation = [
      "Je suis capable de surmonter les obstacles qui se dressent sur mon chemin.",
      "Chaque jour, je deviens de plus en plus fort(e) et confiant(e).",
      "Mes efforts et ma persévérance portent leurs fruits.",
      "Je mérite le bonheur et le succès dans ma vie.",
      "J'attire des relations positives et enrichissantes.",
      "Mon potentiel est illimité, je peux accomplir tout ce que je désire.",
      "Je suis reconnaissant(e) pour toutes les opportunités qui se présentent à moi.",
      "Ma santé et mon bien-être sont ma priorité, je prends soin de moi-même chaque jour.",
      "Mes pensées sont positives et m'ouvrent à de nouvelles possibilités.",
    ];
    if (selectedOption == "mantra") {
      let result = listMantra[Math.floor(Math.random() * listMantra.length)];
      alert(result);
    } else {
      let result =
        listAffirmation[Math.floor(Math.random() * listAffirmation.length)];
      alert(result);
    }
  }

  return (
    // Tout ce qui se trouve dans les parenthèses correspond au HTML qui sera VISIBLE sur le navigateur.
    <div className="App">
      {/*Avec React, les class HTML deviennent className, car en JS, class veut dire autre chose */}
      {/* Tout notre return doit être encapsulé par une div principale  */}
      <div className="App-header">
        <h1>✨Self Care Center✨ </h1>
        <p>Which type of message?</p>
        <div className="container-form">
          <div className="radio-buttons">
            <label className="radio-label1">
              <input
                type="radio"
                name="choix"
                value="option1"
                onChange={() => setSelectedOption("affirmation")} // Le state prend la valeur d'affrimation.
                //OnChange : événement déclenché au clique de l'utilisateur
              />
              Affirmation
            </label>
            <label className="radio-label2">
              <input
                type="radio"
                name="choix"
                value="option2"
                onChange={() => setSelectedOption("mantra")} // Le state prend la valeur de mantra
              />
              Mantra
            </label>
          </div>
          <div>
            <button
              onClick={maFonction}
              type="submit"
              className="submit-button"
            >
              Receive message
            </button>
          </div>
        </div>
        <div className="container-image">
          <img className="image-buddha" src={imageMeditate} alt="image" />
        </div>
      </div>
    </div>
  );
}
export default App;

{
  /*// Une fois qu'on l'a déclaré, il faut l'exporter pour que React puisse l'utiliser.
// Pour créer un composant, il ya 2 étapes : 1) La déclaration   2) L'export */
}
