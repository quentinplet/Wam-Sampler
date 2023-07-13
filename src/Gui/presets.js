


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
    static presets  = [
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

    static getPresets() {
        return this.presets;
    }

    static addPreset(preset) {
        this.presets.push(preset);
    }

    static removePreset(preset) {
        this.presets = this.presets.filter(p => p.name !== preset.name);
    }

    static getPreset(name) {
        return this.presets.find(p => p.name === name);
    }

    static getPresetNames() {
        return this.presets.map(p => p.name);
    }

    static getPresetTypes() {
        return this.presets.map(p => p.type);
    }

    static getPresetSamples() {
        return this.presets.map(p => p.samples);
    }

    // save presets to LocalStorage
    static savePresets() {
        localStorage.setItem("presets", JSON.stringify(this.presets));
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
    static buildPresetMenu(selectId) {
        let select = document.getElementById(selectId);
        let types = this.getPresetTypes();
        types.forEach(type => {
            let optgroup = document.createElement("optgroup");
            optgroup.label = type;
            let presets = this.presets.filter(p => p.type === type);
            presets.forEach(preset => {
                let option = document.createElement("option");
                option.value = preset.name;
                option.innerHTML = preset.name;
                optgroup.appendChild(option);
            });
            select.appendChild(optgroup);
        });
    }
    
}