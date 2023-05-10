let itemCalc = 0;

let operationElement = null;
let result = 0;
const boutons = [
  { id: "clean", valeur: "AC", htmlContent: "<button>AC</button>" },
  { id: "(", valeur: "(", htmlContent: "<button>(</button>" },
  { id: ")", valeur: ")", htmlContent: "<button>)</button>" },
  { id: "shut", valeur: "OFF", htmlContent: "<button>OFF</button>" },
  { id: "n-7", valeur: "7", htmlContent: "<button>7</button>" },
  { id: "n-8", valeur: "8", htmlContent: "<button>8</button>" },
  { id: "n-9", valeur: "9", htmlContent: "<button>9</button>" },
  { id: "op-division", valeur: "/", htmlContent: "<button>/</button>" },
  { id: "n-4", valeur: "4", htmlContent: "<button>4</button>" },
  { id: "n-5", valeur: "5", htmlContent: "<button>5</button>" },
  { id: "n-6", valeur: "6", htmlContent: "<button>6</button>" },
  { id: "op-multyply", valeur: "*", htmlContent: "<button>*</button>" },
  { id: "n-1", valeur: "1", htmlContent: "<button>1</button>" },
  { id: "n-2", valeur: "2", htmlContent: "<button>2</button>" },
  { id: "n-3", valeur: "3", htmlContent: "<button>3</button>" },
  { id: "op-substract", valeur: "-", htmlContent: "<button>-</button>" },
  { id: "n-0", valeur: "0", htmlContent: "<button>0</button>" },
  { id: "n-Dot", valeur: ".", htmlContent: "<button>.</button>" },
  { id: "vide", valeur: "", htmlContent: "<button></button>" },
  { id: "op-addition", valeur: "+", htmlContent: "<button>+</button>" },
  { id: "op-equal", valeur: "=", htmlContent: "<button>=</button>" },
];

// let valeurs = [
//   "AC",
//   "(",
//   ")",
//   "OFF",
//   "7",
//   "8",
//   "9",
//   "/",
//   "4",
//   "5",
//   "6",
//   "*",
//   "1",
//   "2",
//   "3",
//   "-",
//   "0",
//   ".",
//   "",
//   "+",
//   "=",
// ];

class Calculator {
  constructor(id) {
    this.itemCalc = document.getElementById(id);
    if (!this.itemCalc) {
      console.log("calcul erreur");
    }
    this.InitialiserComposant();
  }

  InitialiserComposant() {
    // SELECTION POINT D'ENTREE
    let root = document.querySelector("body");
    root.classList.add("body");

    // CREATION DU CORPS
    let calculette = document.createElement("div");
    calculette.classList.add("calculatrice");

    // CREATION ECRAN
    const screen = document.createElement("div");
    screen.classList.add("ecran");
    // CREATION CADRE TOUCHE
    let touches = document.createElement("div");
    touches.classList.add("touche");

    // // CREATION TOUCHES
    // this.Bouton();

    //AJOUT DES COMPOSANTS
    root.appendChild(calculette);
    calculette.appendChild(screen);
    calculette.appendChild(touches);

    for (let i = 0; i <= boutons.length; i++) {
      let bouton = null;
      bouton = document.createElement("button");
      bouton.innerHTML = boutons[i].valeur;
      if (i != 20) {
        bouton.classList.add("bouton");
      } else {
        bouton.classList.add("egal");
      }
      touches.appendChild(bouton);
    }

    // bouton = document.createElement("button")
    // bouton.innerHTML = el.valeur;
    // bouton.classList.add("egal");
    // touches.appendChild(bouton);
    // console.log(bouton);

    // for (let j = 0; j < boutons.length; j++) {
    //   touches.appendChild(boutons[j]);
    //   boutons[j].innerHTML = valeurs[j];
    // }
  }

  // Bouton() {
  //   for (let i = 0; i < 20; i++) {
  //     bouton = document.createElement("button");
  //     bouton.classList.add("bouton");
  //     bouton.setAttribute("id", i);
  //     bouton.setAttribute("type", "button");
  //     boutons.push(bouton);

  //     if (boutons.length > 19 && boutons.length < 21) {
  //       bouton = document.createElement("button");
  //       bouton.classList.add("egal");
  //       boutons[20] = bouton;
  //     }
  //   }
  //}
}

let calculatrice = new Calculator();

// power = document.getElementsByTagName(bouton);
// console.log(power)
// let screen = document.getElementsByClassName(".ecran")

// calculatrice.Calculator.power.addEventListener("click", () => {
//   if (power.innerHTML == "OFF") {
//     power.innerHTML = "ON";
//     power.style.color = "green";

//   } else {
//     power.innerHTML = "OFF";
//     power.style.color = "red";
//   }

// });
