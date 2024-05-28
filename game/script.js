const NOVEL = [
    { //scelta 0
        action: "...",
        opt1: {
            text: "I fiori conoscono i tuoi segreti.",
            nextpoint: 1,
        },
        opt2:  {
            text: "C'è un uomo che ti osserva da lontano.",
            nextpoint: 18,
        },
    },
    {//scelta 1
        action: "Maledetti fiori. Cosa sapete di me? Perché mi osservate così? Non posso fidarmi di niente.",
        opt1: {
            text: "continui a parlare da sola?",
            nextpoint: 16,
        },
        opt2: {
            text: "...",
            nextpoint: 2,
        }
    },
    {//scelta 2
        action: "Devo tornare a casa. Forse lì troverò un po' di pace.",
        opt1: {
            text: "",
            nextpoint: 3,
        },
        opt2: {
            text: "",
            nextpoint: 3,
        }
    },
    {//scelta 3
        action: "",
        opt1: {
            text: "La porta del seminterrato si è aperta.",
            nextpoint: 4,
        },
        opt2: {
            text: "Non ti sembra che manchi l'aria?",
            nextpoint: 4,
        }
    },
    {//scelta 4
        action:  "Questo posto... mi soffoca. Cosa c'è lì sotto che vuole farmi del male?",
        opt1: {
            text: "é tutto nella tua testa",
            nextpoint: 5,
        },
        opt2: {
            text: "non andare li sotto",
            nextpoint: 5,
        }
    },
    {//scelta 5 
        action:  "Forse in cucina posso trovare qualcosa per calmarmi.",
        opt1: {
            text: "Le posate si stanno muovendo.",
            nextpoint: 6,
        },
        opt2: {
            text: "Qualcosa si nasconde dietro il frigorifero.",
            nextpoint: 6,
        }
    },
    {//scelta 6
        action: "Le vedo... si muovono davvero. Sto impazzendo, lo so.",
        opt1: {
            text: "Forse è meglio se vai a dormire",
            nextpoint: 7,
        },
        opt2: {
            text: "riposati, se continui cosi impazzisci veramente",
            nextpoint: 7,
        }
    },
    {//scelta 7
        action: "",
        opt1: {
            text: "Il tuo diario vuole essere letto.",
            nextpoint: 8,
        },
        opt2: {
            text: "La tua bambola ha qualcosa da dirti.",
            nextpoint: 9,
        }
    },
    {//scelta 8
        action: "Non voglio ricordare. Ogni pagina è una ferita.",
        opt1: {
            text: "Esci è meglio prendere una boccata d'aria",
            nextpoint: 10,
        },
        opt2: {
            text: "Forse sarebbe meglio ricordare",
            nextpoint: 10,
        }
    },
    {//scelta 9
        action: "Basta! Smettetela di giocare con la mia mente!",
        opt1: {
            text: "La bambola sa cosa hai fatto. Non puoi nasconderti per sempre.",
            nextpoint: 12,
        },
        opt2: {
            text: "Ascolta attentamente, potrebbe rivelare un segreto importante.",
            nextpoint: 12,
        }
    },
    {//scelta 10
        action: "Dove devo andare a ricordare?",
        opt1: {
            text: "é ovvio dove sei cresciuta",
            nextpoint: 11,
        },
        opt2: {
            text: "dove hai sofferto di più",
            nextpoint: 11,
        }
    },
    {//scelta 11
        action: "ora che sono qui cosa devo fare?",
        opt1: {
            text: "Le stanze nascondono segreti.",
            nextpoint: 14,
        },
        opt2: {
            text: "Trova la stanza che contiene i tuoi ricordi",
            nextpoint: 14,
        }
    },
    {//scelta 12
        action: "Non riesco a sentire cosa dice",
        opt1: {
            text: "Dice di ricordare",
            nextpoint: 10,
        },
        opt2: {
            text: "Dice di pentirti di cosa hai fatto",
            nextpoint: 13,
        }
    },
    {//scelta 13
        action: "Dove devo andare per pentirmi?",
        opt1: {
            text: "é ovvio dove sei cresciuta",
            nextpoint: 11,
        },
        opt2: {
            text: "è ovvio dove hai sofferto di più",
            nextpoint: 11,
        }
    },
    {//scelta 14 continua qua
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
        action: "No non sto parlando da sola ci siete voi",
        opt1: {
            text: "Forse dovresti tornare a casa",
            nextpoint: 2,
        },
        opt2: {
            text: "Riposati il caldo ti sta dando alla testa",
            nextpoint: 2,
        }
    },
    {//scelta 17
        action: "Smettetela! Non c'è nessuno lì. Basta con questi giochetti!",
        opt1: {
            text: "è meglio se torni a casa finirai per impazzire",
            nextpoint: 3,
        },
        opt2: {
            text: "l'uomo non è famigliare?",
            nextpoint: 18,
        }
    },
    {//scelta 18
        action: "No,voglio ritornare a casa ora",
        opt1: {
            text: "",
            nextpoint: 3,
        },
        opt2: {
            text: "",
            nextpoint: 3,
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

    if(state.index >= 0 && state.index <= 2){
    audioPath = 'musica/Flaterness.mp3'; 
    audio.volume = 0.15;
    }
    else if(state.index == 3){
        audioPath = 'musica/Realization.wav'
    }
    if (audioPath !== currentAudioPath) {
        audio.src = audioPath; // Set the new audio source path
        currentAudioPath = audioPath; // Update the current audio path variable
    }

    //test section delet it post nigga
    /*audio.play();
    audio.play()
        .then(() => console.log('Audio is playing'))
        .catch((error) => console.error('Error playing audio:', error));*/
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
  if (state.index <= 3) {
    imageUrl = 'images/0.png'; 
  } else if (state.index >= 3 && state.index <= 4) {
    imageUrl = 'images/gr.png'; 
  }else if (state.index >= 16 && state.index <= 18) {
    imageUrl = 'images/0.png'; 
  }else if (state.index >= 5 && state.index <= 6) {
    imageUrl = 'images/grr.png'; 
  } else if (state.index >= 7 && state.index <= 10) {
    imageUrl = 'images/grrr.png'; 
  }else if (state.index == 13 && state.index == 12) {
    imageUrl = 'images/grrr.png'; 
  }else if (state.index === 12) {
    imageUrl = 'images/12.png'; 
  } else {
    imageUrl = `images/${state.index}.png`; // Default image URL based on state's index
  }

  ui.imagebox.style.backgroundImage = `url(${imageUrl})`;
};

ui.left.addEventListener('click', () => update(state.current.opt1.nextpoint)); //prendi event dal mouse sinistra destra della UI stai nel chill fra basta che stai nel tuo e non tocchi niente
ui.right.addEventListener('click', () => update(state.current.opt2.nextpoint));

render(); //non ottimizzare da qua in poi ricoralo è impossibile