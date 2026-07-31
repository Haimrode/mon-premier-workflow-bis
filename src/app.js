// 🧪 Petite application de démonstration
//
// Ce fichier n'a qu'un but : donner du VRAI code au workflow
// « Fermeture automatique des issues résolues (IA) ».
// Sans code, il n'y a pas de diff — et sans diff, rien à analyser.

// ─────────────────────────────────────────────────────────────
// 🎨 Thème de l'interface
// ─────────────────────────────────────────────────────────────
const THEME = "clair"; // seul thème disponible pour l'instant

// ─────────────────────────────────────────────────────────────
// 📅 Affichage des dates
// ─────────────────────────────────────────────────────────────
function formaterDate(date) {
  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formaterHeure(date) {
  return date.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ─────────────────────────────────────────────────────────────
// 🔐 Bouton de connexion
// ─────────────────────────────────────────────────────────────
function brancherBoutonConnexion(bouton) {
  bouton.addEventListener("click", () => {
    console.log("Tentative de connexion…");
  });
}

// ─────────────────────────────────────────────────────────────
// ▶️ Point d'entrée
// ─────────────────────────────────────────────────────────────
function demarrer() {
  const maintenant = new Date();
  console.log(`Thème actif : ${THEME}`);
  console.log(`Nous sommes le ${formaterDate(maintenant)} à ${formaterHeure(maintenant)}`);
}

module.exports = { THEME, formaterDate, formaterHeure, brancherBoutonConnexion, demarrer };
