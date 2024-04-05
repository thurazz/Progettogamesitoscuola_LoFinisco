const sales = [ //i point funzionano proprio come un array basterà andare all'indice giusto
    {
        action: "Quando finirà?",
        opt1: {
            text: "Mai",
            nextpoint: 1,
        },
        opt2:  {
            text: "perchè vuoi farlo finire?",
            nextpoint: 3,
        },
    },
    {
        action: "odio i maledetti negri",
        opt1: {
            text: "sto impazzendo no joke",
            nextpoint: 0,
        },
        opt2: {
            text: "uccido qualcuno",
            nextpoint: 2,
        }
    },
    {
        action: "se non funziona ti uccido",
        opt1: {
            text: "no non scherzo",
            nextpoint: 1,
        },
        opt2: {
            text: "mi impicco domani",
            nextpoint: 0,
        }
    },
    {
        action: "nextpointss",
        opt1: {
            text: "aia",
            nextpoint: 1,
        },
        opt2: {
            text: "ciao",
            nextpoint: 0,
        }
    }
];

const state = {
  index: 0,
  data: sales,
  get current() {
    return this.data[this.index]
  }
};

const ui = {
  action: document.querySelector('#action-text'),
  left: document.querySelector('#option-1'),
  right: document.querySelector('#option-2')
};

const update = (nextpoint) => {
  state.index = nextpoint;
  render();
};

const render = () => {
  ui.action.innerText = state.current.action;
  ui.left.innerText = state.current.opt1.text;
  ui.right.innerText = state.current.opt2.text;
};

ui.left.addEventListener('click', () => update(state.current.opt1.nextpoint));
ui.right.addEventListener('click', () => update(state.current.opt2.nextpoint));

render();