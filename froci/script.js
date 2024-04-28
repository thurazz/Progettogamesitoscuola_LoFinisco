const NOVEL = [
    { //scelta 0
        action: "COSA VUOI AFFRONTARE?",
        opt1: {
            text: "Me stesso",
            nextpoint: 1,
        },
        opt2:  {
            text: "I miei pensieri",
            nextpoint: 1,
        },
    },
    {//scelta 1
        action: "Era da molto che non vedevo il tramonto",
        opt1: {
            text: "Ascolta le voci",
            nextpoint: 2,
        },
        opt2: {
            text: "Ignorale",
            nextpoint: 0,
        }
    },
    {//scelta 2
        action: "Ma loro non la smettono..",
        opt1: {
            text: "",
            nextpoint: 3,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 3
        action: "",
        opt1: {
            text: "",
            nextpoint: 4,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 4 aggiungere foto
        action: "",
        opt1: {
            text: "",
            nextpoint: 5,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 5
        action: "",
        opt1: {
            text: "",
            nextpoint: 6,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 6
        action: "",
        opt1: {
            text: "",
            nextpoint: 7,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 7
        action: "",
        opt1: {
            text: "",
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
const audio = document.querySelector('audio');

const update = (nextpoint) => { //update dei next point da array passaggio per riferimento 
  state.index = nextpoint;
  render();
  changeAudio(state.index);
};

const changeAudio = (index) => {
    
    let audioPath = '';

    if(index == 1){
     audioPath = 'musica/voci.mp3';
    }

    audio.src = audioPath;
    audio.volume = 1; // Set desired volume
    audio.play();
    audio.play()
        .then(() => console.log('Audio is playing'))
        .catch((error) => console.error('Error playing audio:', error));
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