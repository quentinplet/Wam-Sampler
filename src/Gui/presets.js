


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
      samples: [{ url: "../../audio/preset2/snare.wav", name: "kick" }],
    },
  ];

  static getPresets() {
    return this.presets;
  }

  static addPreset(preset) {
    this.presets.push(preset);
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

  static getPresetTypes() {
    return this.presets.map((p) => p.type);
  }

  static getPresetSamples() {
    return this.presets.map((p) => p.samples);
  }

  static getCurrentPreset(presetName) {
    return this.presets.find((p) => p.name === presetName);
  }

  // save presets to LocalStorage
  static savePresets(presetName, samplePlayers, sampleHTMLElements) {
    const samplesURLs = sampleHTMLElements.URLs;
    const samplesNames = sampleHTMLElements.name;
    const samplesDefaultNames = sampleHTMLElements.defaultName;
    
    //if new samples add this samples urls and names to the preset
    this.presets.find((p) => p.name === presetName).samples = samplesURLs.map((url, index) => {
      return { url: url, name: samplesDefaultNames[index]}});
    console.log(this.presets);
    this.presets
      .find((p) => p.name === presetName)
      .samples.forEach((sample, index) => {
        sample.url = samplesURLs[index];
        sample.name = samplesDefaultNames[index];
        const player = {};
        player.name = samplesNames[index];
        // player.reversed = samplePlayers[index].reversed;
        // player.enableAdsr = samplePlayers[index].enableAdsr;
        // player.effects = samplePlayers[index].effects;
        sample.player = player;
        
      });

    console.log(this.presets);

    const index = this.presets.findIndex((p) => p.name === presetName);
    localStorage.setItem("presets", JSON.stringify(this.presets));
    // console.log(samplePlayers);
  }

  // load presets from LocalStorage
  static loadPresets() {
    this.presets = JSON.parse(localStorage.getItem("presets"));
  }

  //remove a preset from LocalStorage
  static removePreset(preset) {
    localStorage.removeItem(preset.name);
  }

  // clear presets from LocalStorage
  static clearPresets() {
    localStorage.clear();
  }

  // Build a preeset menu from the id of a select element. Regroup each preset by type under a submenu
  static buildPresetMenu(select) {
    // let select = document.getElementById(selectId);
    let types = this.getPresetTypes();

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

        let presets = this.presets.filter((p) => p.type === type);
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