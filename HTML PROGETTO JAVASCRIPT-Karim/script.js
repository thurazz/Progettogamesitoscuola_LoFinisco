const NOVEL = [ //i point funzionano proprio come un array basterà andare all'indice giusto continua a commentare gli index senno ti scordi coglione
    {
        action: "porco dio ",
        opt1: {
            text: "odio i negri fr",
            nextpoint: 1,
        },
        opt2:  {
            text: "dio cane",
            nextpoint: 1,
        },
    },
    {
        action: "",
        opt1: {
            text: "",
            nextpoint: 2,
        },
        opt2: {
            text: "",
            nextpoint: 2,
        }
    },
    {
        action: "",
        opt1: {
            text: "",
            nextpoint: 3,
        },
        opt2: {
            text: "",
            nextpoint: 3,
        }
    },
    {
        action: "",
        opt1: {
            text: "",
            nextpoint: 1,
        },
        opt2: {
            text: "",
            nextpoint: 3,
        }
    }
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
  ui.imagebox.style.backgroundImage = `url(images/${state.index}.jpeg)`; //loading basato su index array con jpeg non ho voglia di cambiarli l'estensione lo tenete così 
};

ui.left.addEventListener('click', () => update(state.current.opt1.nextpoint)); //prendi event dal mouse sinistra destra della UI stai nel chill fra basta che stai nel tuo e non tocchi niente
ui.right.addEventListener('click', () => update(state.current.opt2.nextpoint));

render(); //non ottimizzare da qua in poi ricoralo è impossibile