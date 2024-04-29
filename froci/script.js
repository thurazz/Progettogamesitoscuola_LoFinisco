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
        action: "Voglio guardare il tramonto.",
        opt1: {
            text: "Vai al parco.",
            nextpoint: 2,
        },
        opt2: {
            text: "Vai sopra quel grattacielo.",
            nextpoint: 2,
        }
    },
    {//scelta 2
        action: "'Era da molto che non uscivo,il mondo sembra diverso.'",
        opt1: {
            text: "continui a parlare da sola?",
            nextpoint: 3,
        },
        opt2: {
            text: "...",
            nextpoint: 0,
        }
    },
    {//scelta 3
        action: "'Mi aiuta, mi aiuta a dimenticare quanto sono sola.'",
        opt1: {
            text: "Si ma sembri pazza",
            nextpoint: 4,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 4
        action: "'Forse lo sono, infondo parlo anche da sola.'",
        opt1: {
            text: "Non dovresti dirti questo",
            nextpoint: 5,
        },
        opt2: {
            text: "Sei senza speranze non dovresti guardare il tramonto.",
            nextpoint: 0, //crazy arch
        }
    },
    {//scelta 5
        action: "'Sei te il primo a dirlo'",
        opt1: {
            text: "Si ma io posso farlo",
            nextpoint: 6,
        },
        opt2: {
            text: "",
            nextpoint: 0,
        }
    },
    {//scelta 6 Musica horror tensione pura,immagine con persone che ti guardano
        action: "",
        opt1: {
            text: "Cambiando discorso sono ore che cammini,non hai notato che ti osservano?",
            nextpoint: 7,
        },
        opt2: {
            text: "Cambiando discorso sono ore che cammini,non hai notato che ti osservano?",
            nextpoint: 7,
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
let currentAudioPath = '';
const changeAudio = (index) => {
    
    let audioPath = '';

    if(state.index >=0 && state.index <=10){
    audioPath = 'musica/free.wav'; 
    }

    if (audioPath !== currentAudioPath) {
        audio.src = audioPath; // Set the new audio source path
        currentAudioPath = audioPath; // Update the current audio path variable
    }

    /*else if(){
        audioPath = '';
    }else(){
        audioPath ='';
    }*/
    

    audio.volume = 0.6; // Set desired volume

    audio.play();
    audio.play()
        .then(() => console.log('Audio is playing'))
        .catch((error) => console.error('Error playing audio:', error));
};

const update = (nextpoint) => { //update dei next point da array passaggio per riferimento 
  state.index = nextpoint;
  render();
  changeAudio(state.index);
};


const render = () => { //render di tutto basandosi sempre su array 
  ui.action.innerText = state.current.action; 
  ui.left.innerText = state.current.opt1.text;
  ui.right.innerText = state.current.opt2.text;

  let imageUrl = '';

  // Conditionally set image URL based on the index
  if (state.index >= 0 && state.index <= 2) {
    imageUrl = 'images/-1.png'; 
  } else if (state.index === 11) {
    imageUrl = 'images/11.png'; 
  } else if (state.index === 12) {
    imageUrl = 'images/12.png'; 
  } else {
    imageUrl = `images/${state.index}.png`; // Default image URL based on state's index
  }

  ui.imagebox.style.backgroundImage = `url(${imageUrl})`;
};

ui.left.addEventListener('click', () => update(state.current.opt1.nextpoint)); //prendi event dal mouse sinistra destra della UI stai nel chill fra basta che stai nel tuo e non tocchi niente
ui.right.addEventListener('click', () => update(state.current.opt2.nextpoint));

render(); //non ottimizzare da qua in poi ricoralo è impossibile