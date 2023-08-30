export default class PresetManager {
  static presets = [
    {
      name: "Basic Kit",
      type: "Drumkit",
      isFactoryPresets: true,
      samples: [
        { url: "../../audio/Basic Kit/kick.wav", name: "kick" },
        { url: "../../audio/Basic Kit/snare.wav", name: "snare" },
        { url: "../../audio/Basic Kit/hihat.wav", name: "hihat" },
        { url: "../../audio/Basic Kit/tom1.wav", name: "tom1" },
        { url: "../../audio/Basic Kit/tom2.wav", name: "tom2" },
        { url: "../../audio/Basic Kit/tom3.wav", name: "tom3" },
      ],
    },
    {
      name: "Electronic",
      type: "Drumkit",
      isFactoryPresets: true,
      samples: [
        { url: "../../audio/Electronic/kick.wav", name: "kick" },
        { url: "../../audio/Electronic/snare.wav", name: "snare" },
        { url: "../../audio/Electronic/tom1.wav", name: "tom1" },
        { url: "../../audio/Electronic/tom2.wav", name: "tom2" },
        { url: "../../audio/Electronic/tom3.wav", name: "tom3" },
        { url: "../../audio/Electronic/tom4.wav", name: "tom4" },
        { url: "../../audio/Electronic/hihat1.wav", name: "hihat1" },
        { url: "../../audio/Electronic/hihat2.wav", name: "hihat2" },
        { url: "../../audio/Electronic/clap1.wav", name: "clap1" },
        { url: "../../audio/Electronic/clap2.wav", name: "clap2" },
        { url: "../../audio/Electronic/crash1.wav", name: "crash1" },
        { url: "../../audio/Electronic/crash2.wav", name: "crash2" },
        { url: "../../audio/Electronic/ride1.wav", name: "ride1" },
        { url: "../../audio/Electronic/ride2.wav", name: "ride2" },
        { url: "../../audio/Electronic/perc1.wav", name: "perc1" },
        { url: "../../audio/Electronic/perc2.wav", name: "perc2" },
      ],
    },
    {
      name: "808",
      type: "Drumkit",
      isFactoryPresets: true,
      samples: [
        { url: "../../audio/808/Kick 808X.wav", name: "kick" },
        { url: "../../audio/808/Snare 808 1.wav", name: "snare1" },
        { url: "../../audio/808/Snare 808X.wav", name: "snare2" },
        { url: "../../audio/808/HiTom 808.wav", name: "tom1" },
        { url: "../../audio/808/MidTom 808.wav", name: "tom2" },
        { url: "../../audio/808/LowTom 808.wav", name: "tom3" },
        { url: "../../audio/808/ClosedHH 808.wav", name: "closed hihats"},
        { url: "../../audio/808/OpenHH 808 1.wav", name: "open hihats1"},
        { url: "../../audio/808/OpenHH 808 2.wav", name: "open hihats2"},
        { url: "../../audio/808/Clap 808.wav", name: "clap1" },
        { url: "../../audio/808/Clap 808X.wav", name: "clap2" },
        { url: "../../audio/808/Rimshot 808.wav", name: "rimshot" },
        { url: "../../audio/808/Cymbal 808X.wav", name: "cymbal" },
        { url: "../../audio/808/Clave 808.wav", name: "clave" },
        { url: "../../audio/808/Maracas 808.wav", name: "maracas" },
        { url: "../../audio/808/Cowbell 808.wav", name: "cowbell" },
       ],
    },
    {
      name: "Hip-Hop",
      type: "Drumkit",
      isFactoryPresets: true,
      samples: [
        { url: "../../audio/Hip Hop/Kick HipHop 1.wav", name: "kick1"},
        { url: "../../audio/Hip Hop/Kick HipHop 2.wav", name: "kick2"},
        { url: "../../audio/Hip Hop/Snare HipHop 1.wav", name: "snare1"},
        { url: "../../audio/Hip Hop/Snare HipHop 2.wav", name: "snare2"},
        { url: "../../audio/Hip Hop/ClosedHH HipHop 1.wav", name: "closed hihats1"},
        { url: "../../audio/Hip Hop/ClosedHH HipHop 2.wav", name: "closed hihats2"},
        { url: "../../audio/Hip Hop/Clap HipHop.wav", name: "clap"},
        { url: "../../audio/Hip Hop/Crash HipHop.wav", name: "crash"},
        { url: "../../audio/Hip Hop/RevCymbal HipHop.wav", name: "reverse cymbal"},
        { url: "../../audio/Hip Hop/Ride HipHop.wav", name: "ride"},
        { url: "../../audio/Hip Hop/Triangle HipHop.wav", name: "triangle"},
        { url: "../../audio/Hip Hop/Vibraslap HipHop.wav", name: "vibraslap"},
        { url: "../../audio/Hip Hop/Wood HipHop.wav", name: "wood"},
        { url: "../../audio/Hip Hop/Clave HipHop.wav", name: "clave"},
        { url: "../../audio/Hip Hop/Combo HipHop 1.wav", name: "combo1"},
        { url: "../../audio/Hip Hop/Combo HipHop 2.wav", name: "combo2"},
       ],
    },
    {
      name: "Garage",
      type: "Drumkit",
      isFactoryPresets: true,
      samples: [
        { url: "../../audio/Garage/Kick Garage.wav", name: "kick"},
        { url: "../../audio/Garage/Snare Garage.wav", name: "snare"},
        { url: "../../audio/Garage/ClosedHH Garage.wav", name: "closed hihats"},
        { url: "../../audio/Garage/OpenHH Garage.wav", name: "open hihats"},
        { url: "../../audio/Garage/PedalHH Garage.wav", name: "pedal hihats"},
        { url: "../../audio/Garage/HiTom Garage.wav", name: "tom1"},
        { url: "../../audio/Garage/MidTom Garage.wav", name: "tom2"},
        { url: "../../audio/Garage/LowTom Garage.wav", name: "tom3"},
        { url: "../../audio/Garage/Clap Garage.wav", name: "clap"},
        { url: "../../audio/Garage/SnareRim Garage.wav", name: "rimshot"},
        { url: "../../audio/Garage/Crash Garage.wav", name: "crash"},
        { url: "../../audio/Garage/Ride Garage.wav", name: "ride"},
        { url: "../../audio/Garage/Splash Garage.wav", name: "splash"},
        { url: "../../audio/Garage/Cowbell Garage.wav", name: "cowbell"},
        { url: "../../audio/Garage/StickHit Garage.wav", name: "stick hit"},
        { url: "../../audio/Garage/TambTap Garage.wav", name: "tambourine"},

       ],
    },
    {
      name: "Funky",
      type: "Drumkit",
      isFactoryPresets: true,
      samples: [
        { url: "../../audio/Funky/Kick Funk 1.wav", name: "kick"},
        { url: "../../audio/Funky/Snare Funk 1.wav", name: "snare"},
        { url: "../../audio/Funky/ClosedHH Funk 1.wav", name: "closed hihats"},
        { url: "../../audio/Funky/OpenHH Funk 1.wav", name: "open hihats"},
        { url: "../../audio/Funky/Clap Funk 1.wav", name: "clap"},
        { url: "../../audio/Funky/Rimshot Funk 1.wav", name: "rimshot"},
        { url: "../../audio/Funky/Perc Funk 1.wav", name: "perc1"},
        { url: "../../audio/Funky/Perc Funk 2.wav", name: "perc2"},
        { url: "../../audio/Funky/Shaker Funk 1.wav", name: "shaker"},
        { url: "../../audio/Funky/Bass Funk 3.wav", name: "bass1"},
        { url: "../../audio/Funky/Chord Funk 1.wav", name: "chord1"},
        { url: "../../audio/Funky/Chord Funk 2.wav", name: "chord2"},
        { url: "../../audio/Funky/Pad Funk.wav", name: "pad"},
        { url: "../../audio/Funky/Vox Funk.wav", name: "vox"},
       ],
    },
    {
      name: "House",
      type: "Drumkit",
      isFactoryPresets: true,
      samples: [
        { url: "../../audio/House/Kick House 1.wav", name: "kick1"},
        { url: "../../audio/House/Kick House 2.wav", name: "kick2"},
        { url: "../../audio/House/Snare House 1.wav", name: "snare"},
        { url: "../../audio/House/ClosedHH House 1.wav", name: "closed hihats"},
        { url: "../../audio/House/OpenHH House 1.wav", name: "open hihats"},
        { url: "../../audio/House/Clap House 1.wav", name: "clap"},
        { url: "../../audio/House/Cymbal House.wav", name: "cymbal"},
        { url: "../../audio/House/Shaker House 1.wav", name: "shaker"},
        { url: "../../audio/House/Bass House 1.wav", name: "bass1"},
        { url: "../../audio/House/Bass House 2.wav", name: "bass2"},
        { url: "../../audio/House/Bass House 3.wav", name: "bass3"},
        { url: "../../audio/House/Piano House 1.wav", name: "piano1"},
        { url: "../../audio/House/Piano House 2.wav", name: "piano2"},
        { url: "../../audio/House/Organ House 1.wav", name: "organ1"},
        { url: "../../audio/House/Organ House 2.wav", name: "organ2"},
        { url: "../../audio/House/Organ House 3.wav", name: "organ3"},
       ],
    },
    {
      name: "Pop",
      type: "Drumkit",
      isFactoryPresets: true,
      samples: [
        { url: "../../audio/Pop/Kick Alphabetical 1.wav", name: "kick"},
        { url: "../../audio/Pop/Snare Alphabetical 1.wav", name: "snare"},
        { url: "../../audio/Pop/ClosedHH Alphabetical 1.wav", name: "closed hihats"},
        { url: "../../audio/Pop/OpenHH Alphabetical.wav", name: "open hihats"},
        { url: "../../audio/Pop/Clap Alphabetical 1.wav", name: "clap"},
        { url: "../../audio/Pop/Perc Alphabetical 1.wav", name: "perc1"},
        { url: "../../audio/Pop/Perc Alphabetical 2.wav", name: "perc2"},
        { url: "../../audio/Pop/Shaker Alphabetical 1.wav", name: "shaker"},
        { url: "../../audio/Pop/Bass Alphabetical 1.wav", name: "bass1"},
        { url: "../../audio/Pop/Bass Alphabetical 2.wav", name: "bass2"},
        { url: "../../audio/Pop/Bass Alphabetical 3.wav", name: "bass3"},
        { url: "../../audio/Pop/Synth Alphabetical 1.wav", name: "synth1"},
        { url: "../../audio/Pop/Synth Alphabetical 2.wav", name: "synth2"},
        { url: "../../audio/Pop/Synth Alphabetical 3.wav", name: "synth3"},
        { url: "../../audio/Pop/Vox Alphabetical 1.wav", name: "vox1"},
        { url: "../../audio/Pop/Vox Alphabetical 2.wav", name: "vox2"},
       ],
    },
    {
      name: "Steveland Vinyl",
      type: "Drumkit",
      isFactoryPresets: true,
      samples: [
        { url: "../../audio/Steveland Vinyl/Kick Steveland 1.wav", name: "kick"},
        { url: "../../audio/Steveland Vinyl/Snare Steveland 1.wav", name: "snare1"},
        { url: "../../audio/Steveland Vinyl/Snare Steveland 2.wav", name: "snare2"},
        { url: "../../audio/Steveland Vinyl/ClosedHH Steveland.wav", name: "closed hihats"},
        { url: "../../audio/Steveland Vinyl/OpenHH Steveland.wav", name: "open hihats"},
        { url: "../../audio/Steveland Vinyl/Tom Steveland 1.wav", name: "tom1"},
        { url: "../../audio/Steveland Vinyl/Tom Steveland 2.wav", name: "tom2"},
        { url: "../../audio/Steveland Vinyl/Tom Steveland 3.wav", name: "tom3"},
        { url: "../../audio/Steveland Vinyl/Tom Steveland 4.wav", name: "tom4"},
        { url: "../../audio/Steveland Vinyl/Conga Steveland 1.wav", name: "conga"},
        { url: "../../audio/Steveland Vinyl/Bass Steveland 1.wav", name: "bass1"},
        { url: "../../audio/Steveland Vinyl/Bass Steveland 2.wav", name: "bass2"},
        { url: "../../audio/Steveland Vinyl/Rhodes Steveland 1.wav", name: "rhodes"},
        { url: "../../audio/Steveland Vinyl/Scratch Steveland 1.wav", name: "scratch1"},
        { url: "../../audio/Steveland Vinyl/Scratch Steveland 2.wav", name: "scratch2"},
        { url: "../../audio/Steveland Vinyl/Scratch Steveland 3.wav", name: "scratch3"},
       ],
    },
    {
      name: "Grand Piano",
      type: "Orchestra",
      isFactoryPresets: true,
      samples: [
        { url: "../../audio/Grand Piano/piano-f-a4.wav", name: "piano A4"},
        { url: "../../audio/Grand Piano/piano-f-a5.wav", name: "piano A5"},
        { url: "../../audio/Grand Piano/piano-f-a6.wav", name: "piano A6"},
        { url: "../../audio/Grand Piano/piano-f-c4.wav", name: "piano C4"},
        { url: "../../audio/Grand Piano/piano-f-c5.wav", name: "piano C5"},
        { url: "../../audio/Grand Piano/piano-f-c6.wav", name: "piano C6"},
        { url: "../../audio/Grand Piano/piano-f-ds4.wav", name: "piano D#4"},
        { url: "../../audio/Grand Piano/piano-f-ds5.wav", name: "piano D#5"},
        { url: "../../audio/Grand Piano/piano-f-ds6.wav", name: "piano D#6"},
        { url: "../../audio/Grand Piano/piano-f-fs4.wav", name: "piano F#4"},
        { url: "../../audio/Grand Piano/piano-f-fs5.wav", name: "piano F#5"},
        { url: "../../audio/Grand Piano/piano-f-fs6.wav", name: "piano F#6"},
       ],
    },

    {
      name: "blank preset",
      type: "blank preset",
      isFactoryPresets: true,
      samples: [],
    }
  ];

  //deep copy of the preset object
  // static presetsToSave = JSON.parse(JSON.stringify(this.presets));
  static presetsToSave = structuredClone(this.presets);

  static getPresets() {
    return this.presets;
  }

  static removePreset(preset) {
    this.presets = this.presets.filter((p) => p.name !== preset.name);
  }

  static getFactoryPreset(name) {
    return this.presets.find((p) => p.name === name);
  }

  static getPresetNames() {
    return this.presets.map((p) => p.name);
  }

  static getPresetUrls(preset) {
    //if sample is null return empty string
    return preset.samples.map((s) => s === null ? '' : s.url);
  }

  static getPresetUrlsNames(preset) {
    return preset.samples.map((s) => s === null ? '' : s.name);
  }

  static getPresetTypes(presets) {
    return presets.map((p) => p.type);
  }

  static getPresetFactorySamples() {
    return this.presets.map((p) => p.samples);
  }

  static getCurrentFactoryPreset(presetName) {
    return this.presets.find((p) => p.name === presetName);
  }

  static addPresetFactory(preset) {
    this.presets.push(preset);
  }

  // load presets from LocalStorage
  static loadPresetsFactory() {
    this.presets = JSON.parse(localStorage.getItem("presets"));
  }

  static getPresetsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("presets"));
  }

  static getCurrentPreset(presetName) {
    if(localStorage.presets) {
      const presets = JSON.parse(localStorage.getItem("presets"));
      const currentPreset = presets.find(preset => preset.name === presetName);
      console.log(currentPreset);
      return currentPreset;
    }else {
      return this.presetsToSave.find((p) =>  p.name === presetName);
    }
  }

  static getPresetToSave(presetName) {
    return this.presetsToSave.find((p) => p.name === presetName);
  }

  static newSamples(samplesURLs, samplesNames, samplesDefaultNames, samplePlayers) {
    return samplesURLs.map((url, index) => {
      if(samplePlayers[index]) {
        return { url: url, 
          name: samplesDefaultNames[index],
          player: {
            name: samplesNames[index],
            leftTrim: samplePlayers[index].leftTrimBar.x,
            rightTrim: samplePlayers[index].rightTrimBar.x,
            reversed: samplePlayers[index].reversed,
            semitones: samplePlayers[index].semitones,

            effects: {
              volumeGain : samplePlayers[index].effects.volumeGain,
              pan : samplePlayers[index].effects.pan,
              tone : samplePlayers[index].effects.tone,
              toneValue: samplePlayers[index].effects.toneValue,

              attackValue: samplePlayers[index].effects.attackValue,
              decayValue: samplePlayers[index].effects.decayValue,
              sustainValue: samplePlayers[index].effects.sustainValue,
              releaseValue: samplePlayers[index].effects.releaseValue,
              enableAdsr: samplePlayers[index].enableAdsr
            }
          }
        }
      }
      else {
        return { url: url,
          name: samplesDefaultNames[index],}
      }
  });
}

  static createNoteSet(presetName, presetType, samplePlayer, SamplerHTMLElement) {
    const noteSet = {};
    noteSet.name = presetName;
    noteSet.type = presetType;
    noteSet.isFactoryPresets = false;

    noteSet.samples;
  }

  //create a new preset to add into presetToSave
  static createPreset(presetName, presetType, samplePlayers, SamplerHTMLElement, switchPads) {
    const newPreset = {};
    newPreset.name = presetName;
    newPreset.type = presetType;
    newPreset.isFactoryPresets = false;

    newPreset.samples = this.newSamples(SamplerHTMLElement.URLs, SamplerHTMLElement.name, SamplerHTMLElement.defaultName, samplePlayers)
    if(this.getMidiPresetsFromLocalStorage() !== null && newPreset.type !== 'noteSet') {
      newPreset.midiLearn = this.getMidiPresetsFromLocalStorage();
    } else {
      newPreset.midiLearn = [];
        // let nameSwitchPads = [];
        // let midicc = [];
        // let midiChannel = [];
        // switchPads.forEach((pad) => {
        //   nameSwitchPads.push(pad.id);
        //   midicc.push(pad.midiController.cc);
        //   midiChannel.push(pad.midiController.channel);
        // });
        switchPads.forEach((pad) => {
          const obj = {id: pad.id, cc: {cc: pad.midiController.cc, channel: pad.midiController.channel}};
          newPreset.midiLearn.push(obj);
        });
        // console.log(newPreset.midiLearn);
        // console.log(nameSwitchPads);
        // console.log(midicc);
        // console.log(midiChannel);
        
      }
    this.presetsToSave.push(newPreset);
    if(!localStorage.WebAudioControlsMidiLearn) {
      localStorage.setItem("WebAudioControlsMidiLearn", JSON.stringify(newPreset.midiLearn));
    } else {
      this.resetAllMidiLearning();
      localStorage.setItem("WebAudioControlsMidiLearn", JSON.stringify(newPreset.midiLearn));
    }
  }


  // save presets to LocalStorage
  static savePresets(presetName, samplePlayers, sampleHTMLElements) {
    if(localStorage.getItem("presets")) {
      this.presetsToSave = JSON.parse(localStorage.getItem("presets"));
    }
    const presetToSave = this.presetsToSave.find((p) => p.name === presetName);
    presetToSave.samples = this.newSamples(sampleHTMLElements.URLs, sampleHTMLElements.name, sampleHTMLElements.defaultName, samplePlayers);

    presetToSave.midiLearn = this.getMidiPresetsFromLocalStorage();
    const index = this.presets.findIndex((p) => p.name === presetName);
    localStorage.setItem("presets", JSON.stringify(this.presetsToSave));
    // console.log(samplePlayers);
  }

  static loadPlayerFromCurrentPreset(samplePlayer,index, currentPreset) {
    const currentSample = currentPreset.samples[index];
    samplePlayer.reversed = currentSample.player.reversed;
    samplePlayer.enableAdsr = currentSample.player.enableAdsr;
    samplePlayer.leftTrimBar.x = currentSample.player.leftTrim;
    samplePlayer.rightTrimBar.x = currentSample.player.rightTrim;
    samplePlayer.semitones = currentSample.player.semitones;
    
    samplePlayer.effects.volumeGain = currentSample.player.effects.volumeGain;
    samplePlayer.effects.pan = currentSample.player.effects.pan;
    samplePlayer.effects.tone = currentSample.player.effects.tone;
    samplePlayer.effects.toneValue = currentSample.player.effects.toneValue;

    //adsr
    samplePlayer.effects.attackValue = currentSample.player.effects.attackValue;
    samplePlayer.effects.decayValue = currentSample.player.effects.decayValue;
    samplePlayer.effects.sustainValue = currentSample.player.effects.sustainValue;
    samplePlayer.effects.releaseValue = currentSample.player.effects.releaseValue;
    samplePlayer.enableAdsr = currentSample.player.effects.enableAdsr;
    
    
    
    samplePlayer.reversed = currentSample.player.reversed;
    if(samplePlayer.reversed) {
      samplePlayer.decodedSound = samplePlayer.reverseSound(samplePlayer.decodedSound);
    }

    return samplePlayer;
  }

  //save all presets
  static saveAllPresets() {
    localStorage.setItem("presets", JSON.stringify(this.presetsToSave));
  }

  //load current preset from LocalStorage
  static loadCurrentPreset(presetValue) {
    const presets = JSON.parse(localStorage.getItem("presets"));
    return presets.find(preset => preset.name === presetValue.name || preset.name === presetValue);
  }

  static isFactoryPreset(presetName) {
    if(localStorage.getItem("presets")) {
      this.presetsToSave = JSON.parse(localStorage.getItem("presets"));
    }
    return this.presetsToSave.find((p) => p.name === presetName).isFactoryPresets;
  }

  //remove a preset from LocalStorage
  static removePreset(preset) {
    this.presetsToSave = this.presetsToSave.filter((p) => p.name !== preset);
    localStorage.setItem("presets", JSON.stringify(this.presetsToSave));
  }

  static resetPreset (preset) {
    const factoryPreset = this.presets.find((p) => p.name === preset);
    const index = this.presets.findIndex((p) => p.name === preset);
    this.presetsToSave[index] = factoryPreset;
    localStorage.setItem("presets", JSON.stringify(this.presetsToSave));
  }

  // clear presets from LocalStorage
  static clearPresets() {
    localStorage.clear();
  }

  // Build a preeset menu from the id of a select element. Regroup each preset by type under a submenu
  static buildPresetMenu(select) {
    let presetsToBuild;

    if (this.getPresetsFromLocalStorage()) {
      //preset = presetToLoad;
      presetsToBuild = this.getPresetsFromLocalStorage();
    } else {
      presetsToBuild = this.getPresets();
    }
 
    // let select = document.getElementById(selectId);
    let types = this.getPresetTypes(presetsToBuild);

    // Utiliser un dictionnaire pour stocker les types de preset déjà traités
    let processedTypes = {};

    // Vider le contenu du select avant de le reconstruire
    select.innerHTML = "";

    types.forEach((type) => {
      // Vérifier si le type a déjà été traité
      if (!processedTypes[type]) {
        processedTypes[type] = true; // Marquer le type comme traité

        let optgroup = document.createElement("optgroup");
        optgroup.label = type;

        let presets = presetsToBuild.filter((p) => p.type === type);
        presets.forEach((preset) => {
          let option = document.createElement("option");
          option.value = preset.name;
          option.innerHTML = preset.name;
          optgroup.appendChild(option);
        });

        select.appendChild(optgroup);
      }
    });
  }

  //get Midi Presets
  static getMidiPresetsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("WebAudioControlsMidiLearn"));
  }

  static getMidiPresetFromLocalStorage(switchpad) {
    const midiPresets = JSON.parse(localStorage.getItem("WebAudioControlsMidiLearn"));
    return midiPresets.find((preset) => preset.id === switchpad.id);
  }

  static getMidiLearnFromCurrentPreset(presetName,switchpad) {
    const currentPreset = this.loadCurrentPreset(presetName);
    if(!currentPreset.midiLearn) return;
    const currentListMidiLearn = currentPreset.midiLearn;
    return currentListMidiLearn.find((preset) => preset.id === switchpad.id || preset.id === switchpad);
  }

  static getMidiLearnListFromCurrentPreset(presetName) {
    const currentPreset = this.loadCurrentPreset(presetName);
    if(currentPreset.midiLearn == undefined) return;
    const currentListMidiLearn = currentPreset.midiLearn;
    return currentListMidiLearn;
  }

  static getMidiLearnPadFromNote(note, presetName) {
    const currentPreset = this.loadCurrentPreset(presetName);
    if(!currentPreset.midiLearn) return;
    const currentListMidiLearn = currentPreset.midiLearn;
    const padToPlay =  currentListMidiLearn.find((preset) => preset.cc.cc === note);
    if(!padToPlay) return;
    return padToPlay.id;
  }

  static loadMidiLearnFromCurrentPreset(presetName, switchPads) {
    if(localStorage.WebAudioControlsMidiLearn) {

      //first reset all midi learning
      const midiLearn = JSON.parse(localStorage.WebAudioControlsMidiLearn);
      midiLearn.forEach((midi) => {
        midi.cc = {};
      });

      //if no preset is saved with midi configuration, reset WebAudioControlsMidiLearn
      if(!localStorage.presets) {
        localStorage.setItem("WebAudioControlsMidiLearn", JSON.stringify(midiLearn));
        return;
      }
      //if the current preset is saved with midi configuration, get midi learn from this preset and add it to WebAudioControlsMidiLearn
      if(localStorage.presets){
        if(this.getMidiLearnListFromCurrentPreset(presetName)) {
         this.loadMidiControllerFromCurrentPreset(presetName, switchPads);
        }
        else {
          localStorage.setItem("WebAudioControlsMidiLearn", JSON.stringify(midiLearn));
          switchPads.forEach((switchpad) => {
            switchpad.midiController = {};
          });

        }
      }
    }
  }

  static loadMidiControllerFromCurrentPreset(presetName, switchPads) {
    if(localStorage.presets){
      if(this.getMidiLearnListFromCurrentPreset(presetName, switchPads)) {
        const midiLearnSaved = this.getMidiLearnListFromCurrentPreset(presetName);
        const switchPadsWithMidiLearn = midiLearnSaved.filter(element => element.cc.cc);
        switchPads.forEach((switchpad) => {
          switchpad.midiController = {};
          if(switchPadsWithMidiLearn.find(element => element.id === switchpad.id)) {
            switchpad.midiController.channel = midiLearnSaved.find(element => element.id === switchpad.id).cc.channel;
            switchpad.midiController.cc = midiLearnSaved.find(element => element.id == switchpad.id).cc.cc;
          }
        });
        localStorage.setItem("WebAudioControlsMidiLearn", JSON.stringify(midiLearnSaved));
      }
    }
  }

  static removeMidiLearnFromCurrentPreset(presetName, midiLearn) {
    const currentPreset = this.getMidiPresetsFromLocalStorage();
    const presetToSave = this.presetsToSave.find((p) => p.name === presetName);
    if(!currentPreset.midiLearn) return;
    const currentListMidiLearn = currentPreset.midiLearn;
    currentListMidiLearn.forEach(elem => {
      if(elem.cc.cc) {
        if((elem.cc.cc === midiLearn.cc.cc) 
          && (elem.cc.channel === midiLearn.cc.channel)) {
            elem.cc = {};
        }
     }
    });
    presetToSave.midiLearn = currentListMidiLearn;
    localStorage.setItem("presets", JSON.stringify(this.presetsToSave));
    // localStorage.setItem("WebAudioControlsMidiLearn", JSON.stringify(currentListMidiLearn));
  }

  static clearMidiMappingFromCurrentPreset(presetName) {
    const presetToSave = this.presetsToSave.find((p) => p.name === presetName);
    if(!presetToSave.midiLearn) return;
    const currentListMidiLearn = presetToSave.midiLearn;
    currentListMidiLearn.forEach(elem => {
      if(elem.cc.cc) {
        elem.cc = {};
      }
    }
    );
    localStorage.setItem("WebAudioControlsMidiLearn", JSON.stringify(currentListMidiLearn));
    this.saveAllPresets();
  }

  static resetAllMidiLearning() {
    if(localStorage.WebAudioControlsMidiLearn) {
      const midiLearn = JSON.parse(localStorage.WebAudioControlsMidiLearn);
      midiLearn.forEach((midi) => {
        midi.cc = {};
      });
      localStorage.setItem("WebAudioControlsMidiLearn", JSON.stringify(midiLearn));
    }
  }

  static setDefaultMidiMapping(presetName, switchPads, defaultRootMidiNote) {
    let midiLearnList = [];
    const preset = this.getCurrentPreset(presetName);
    if(!preset.midiLearn) {
      switchPads.forEach((switchPad) => {
        // switchPad.midiController = {};
        const index = switchPad.id.match(/\d+/g)[0];
        midiLearnList.push({id: switchPad.id, cc: {cc: defaultRootMidiNote + parseInt(index), channel: 0}});
        // switchPad.midiController = defaultRootMidiNote + parseInt(index);
      });
      preset.midiLearn = midiLearnList;
    }
  }
}




