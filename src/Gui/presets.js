


export const presets  = [
    {
        name: "preset1",
        type: "Drumkit",
        samples: [{url:"../../audio/preset1/kick.wav", name:"kick"},
                  {url:"../../audio/preset1/snare.wav", name:"snare"},
                  {url:"../../audio/preset1/hihat.wav", name:"hihat"},
                  {url:"../../audio/preset1/tom1.wav", name:"tom1"},
                  {url:"../../audio/preset1/tom2.wav", name:"tom2"},
                  {url:"../../audio/preset1/tom3.wav", name:"tom3"},]
    }
]

export default class PresetManager {
  static presets = [
    {
      name: "preset1",
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

              attackvalue: samplePlayers[index].effects.attackvalue,
              decayvalue: samplePlayers[index].effects.decayvalue,
              sustainvalue: samplePlayers[index].effects.sustainvalue,
              releasevalue: samplePlayers[index].effects.releasevalue,
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

  //create a new preset to add into presetToSave
  static createPreset(presetName, presetType, samplePlayers, SamplerHTMLElement) {
    const newPreset = {};
    newPreset.name = presetName;
    newPreset.type = presetType;
    newPreset.isFactoryPresets = false;

    newPreset.samples = this.newSamples(SamplerHTMLElement.URLs, SamplerHTMLElement.name, SamplerHTMLElement.defaultName, samplePlayers)
    this.presetsToSave.push(newPreset);
  }


  // save presets to LocalStorage
  static savePresets(presetName, samplePlayers, sampleHTMLElements) {
    console.log(this.presets);
    console.log(samplePlayers);
    if(localStorage.getItem("presets")) {
      this.presetsToSave = JSON.parse(localStorage.getItem("presets"));
    }
    const presetToSave = this.presetsToSave.find((p) => p.name === presetName);
    presetToSave.samples = this.newSamples(sampleHTMLElements.URLs, sampleHTMLElements.name, sampleHTMLElements.defaultName, samplePlayers);
    console.log(this.presetsToSave);
    console.log(this.presets);
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
    samplePlayer.effects.attackvalue = currentSample.player.effects.attackvalue;
    samplePlayer.effects.decayvalue = currentSample.player.effects.decayvalue;
    samplePlayer.effects.sustainvalue = currentSample.player.effects.sustainvalue;
    samplePlayer.effects.releasevalue = currentSample.player.effects.releasevalue;
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
}



