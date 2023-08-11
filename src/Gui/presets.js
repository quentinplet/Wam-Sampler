export default class PresetManager {
  static presets = [
    {
      name: "Acoustic Kit",
      type: "Drumkit",
      isFactoryPresets: true,
      samples: [
        { url: "../../audio/preset1/kick.wav", name: "kick" },
        { url: "../../audio/preset1/snare.wav", name: "snare" },
        { url: "../../audio/preset1/hihat.wav", name: "hihat" },
        { url: "../../audio/preset1/tom1.wav", name: "tom1" },
        { url: "../../audio/preset1/tom2.wav", name: "tom2" },
        { url: "../../audio/preset1/tom3.wav", name: "tom3" },
      ],
    },
    {
      name: "preset2",
      type: "Drumkit",
      isFactoryPresets: true,
      samples: [
        { url: "../../audio/preset2/kick.wav", name: "kick" },
        { url: "../../audio/preset2/snare.wav", name: "snare" },
        { url: "../../audio/preset2/tom1.wav", name: "tom1" },
        { url: "../../audio/preset2/tom2.wav", name: "tom2" },
        { url: "../../audio/preset2/tom3.wav", name: "tom3" },
        { url: "../../audio/preset2/tom4.wav", name: "tom4" },
        { url: "../../audio/preset2/hihat1.wav", name: "hihat1" },
        { url: "../../audio/preset2/hihat2.wav", name: "hihat2" },
        { url: "../../audio/preset2/clap1.wav", name: "clap1" },
        { url: "../../audio/preset2/clap2.wav", name: "clap2" },
        { url: "../../audio/preset2/crash1.wav", name: "crash1" },
        { url: "../../audio/preset2/crash2.wav", name: "crash2" },
        { url: "../../audio/preset2/ride1.wav", name: "ride1" },
        { url: "../../audio/preset2/ride2.wav", name: "ride2" },
        { url: "../../audio/preset2/perc1.wav", name: "perc1" },
        { url: "../../audio/preset2/perc2.wav", name: "perc2" },
      ],
    },
    {
      name: "preset3",
      type: "Drumkit",
      isFactoryPresets: true,
      samples: [{ url: "../../audio/preset2/snare.wav", name: "kick" }],
    },
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

  static getPreset(name) {
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
    if(!currentPreset.midiLearn) return;
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

  static resetAllMidiLearning() {
    if(localStorage.WebAudioControlsMidiLearn) {
      const midiLearn = JSON.parse(localStorage.WebAudioControlsMidiLearn);
      midiLearn.forEach((midi) => {
        midi.cc = {};
      });
      localStorage.setItem("WebAudioControlsMidiLearn", JSON.stringify(midiLearn));
    }
  }

  // static getMidiLearnPreset(switchpad) {
  //   const midiPresets = 
  // }
}



