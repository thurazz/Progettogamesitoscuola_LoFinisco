const NOVEL = [
    { //scelta 0
        action: "Andiamo a vedere il tramonto?",
        opt1: {
            text: "Si",
            nextpoint: 2,
        },
        opt2:  {
            text: "No",
            nextpoint: 1,
        },
    },
    {//scelta 1
        action: "Non accetto un no come risposta",
        opt1: {
            text: "Si",
            nextpoint: 2,
        },
        opt2: {
            text: "Si",
            nextpoint: 2,
        }
    },
    {//scelta 2
        action: "Perchè nel mentre che camminiamo non parliamo?",
        opt1: {
            text: "Va bene di cosa vuoi parlare?",
            nextpoint: 3,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 3
        action: "Non ti senti osservato?",
        opt1: {
            text: "Si, ma è normale loro possono vedere il vuoto",
            nextpoint: 4,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 4 aggiungere foto
        action: "Il vuoto, che cosa significa?",
        opt1: {
            text: "Non ti ricordi?",
            nextpoint: 5,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 5
        action: "No",
        opt1: {
            text: "Quello che hai sempre avuto dentro",
            nextpoint: 6,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 6
        action: "No non me lo ricordo",
        opt1: {
            text: "Forse un ricordo ti potrebbe aiutare",
            nextpoint: 7,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 7
        action: "perchè non ricordo..",
        opt1: {
            text: "alcune cose forse è meglio dimenticarle",
            nextpoint: 8,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 8
        action: "",
        opt1: {
            text: "",
            nextpoint: 9,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 9
        action: "",
        opt1: {
            text: "",
            nextpoint: 0,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 10
        action: "",
        opt1: {
            text: "",
            nextpoint: 0,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 11
        action: "",
        opt1: {
            text: "",
            nextpoint: 0,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 12
        action: "",
        opt1: {
            text: "",
            nextpoint: 0,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 13
        action: "",
        opt1: {
            text: "",
            nextpoint: 0,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 14
        action: "",
        opt1: {
            text: "",
            nextpoint: 0,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 15
        action: "",
        opt1: {
            text: "",
            nextpoint: 0,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 16
        action: "",
        opt1: {
            text: "",
            nextpoint: 0,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
];

const state = { //verifica di merda non serve a un cazzo lo puoi anche lascia stare
  index: 0,
  data: NOVEL,
  get current() {
    return this.data[this.index]
  }
};

const ui = { //questo serve, ti amo ,serve per la query selection tanto è tutto importato da google stai apposto
  action: document.querySelector('#action-text'),
  left: document.querySelector('#option-1'),
  right: document.querySelector('#option-2'),
  imagebox: document.querySelector('#image-box')
};

const update = (nextpoint) => { //update dei next point da array passaggio per riferimento 
  state.index = nextpoint;
  render();
  changeAudio(state.index);
};
/*const changeAudio = (index) => {
    const audio = document.querySelector('audio');
    switch(index) {
      case 0:
        audio.src = "musica/flaterness.mp3"; // Change to the path of your audio file for choice 0
        audio.volume=0.2;
        break;
      case 1:
        audio.src = "musica/flaterness.mp3"; // Change to the path of your audio file for choice 1
        audio.volume=0.2;
        break;
      // Add more cases for each choice as needed
      default:
        audio.src = "musica/flaterness.mp3";
        audio.volume=0.2;
        break;
    }
  };*/
const render = () => { //render di tutto basandosi sempre su array 
  ui.action.innerText = state.current.action; 
  ui.left.innerText = state.current.opt1.text;
  ui.right.innerText = state.current.opt2.text;
  ui.imagebox.style.backgroundImage = `url(images/${state.index}.png)`; //loading basato su index array con jpeg non ho voglia di cambiarli l'estensione lo tenete così 
};

ui.left.addEventListener('click', () => update(state.current.opt1.nextpoint)); //prendi event dal mouse sinistra destra della UI stai nel chill fra basta che stai nel tuo e non tocchi niente
ui.right.addEventListener('click', () => update(state.current.opt2.nextpoint));

render(); //non ottimizzare da qua in poi ricoralo è impossibile