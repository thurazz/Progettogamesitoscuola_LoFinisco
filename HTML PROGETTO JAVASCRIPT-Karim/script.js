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
            text: "Zitta e cammina prima arriviamo e meglio è",
            nextpoint: 0,
        }
    },
    {//scelta 3
        action: "Pensi mai di essere osservato?",
        opt1: {
            text: "Perchè qualcuno dovrebbe osservare una persona noiosa come te...",
            nextpoint: 4,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 4 aggiungere foto
        action: "Si forse hai ragione...",
        opt1: {
            text: "Parlando d'altro il tramonto è magnifico oggi vero?",
            nextpoint: 5,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 5
        action: "Non l'avevo notato...",
        opt1: {
            text: "Perchè non alzi lo sguardo allora?",
            nextpoint: 6,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 6
        action: "Non voglio",
        opt1: {
            text: "ALZA LO SGUARDO",
            nextpoint: 7,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 7
        action: "Non voglio",
        opt1: {
            text: "ALZO LO SGUARDO",
            nextpoint: 8,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 8
        action: "Non voglio",
        opt1: {
            text: "ALZALO",
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
};

const render = () => { //render di tutto basandosi sempre su array 
  ui.action.innerText = state.current.action; 
  ui.left.innerText = state.current.opt1.text;
  ui.right.innerText = state.current.opt2.text;
  ui.imagebox.style.backgroundImage = `url(images/${state.index}.png)`; //loading basato su index array con jpeg non ho voglia di cambiarli l'estensione lo tenete così 
};

ui.left.addEventListener('click', () => update(state.current.opt1.nextpoint)); //prendi event dal mouse sinistra destra della UI stai nel chill fra basta che stai nel tuo e non tocchi niente
ui.right.addEventListener('click', () => update(state.current.opt2.nextpoint));

render(); //non ottimizzare da qua in poi ricoralo è impossibile