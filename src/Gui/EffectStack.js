import ADSRNode from "./adsrNode.js";

export default class EffectStack {
    constructor(ctx) {
        // An effect stack is a subgraph with audio effects
        // it is meant to be associated to a SamplePlayer instance
        this.ctx = ctx;
        this.buildGraph();
    }

    buildGraph() {
        // input
        this.inputNode = this.ctx.createGain();

        this.volumeNode = this.ctx.createGain();

        this.panNode = this.ctx.createStereoPanner();

        //Filtres pour le réglage du Tone
        this.lowShelfNode = this.ctx.createBiquadFilter();
        this.highShelfNode = this.ctx.createBiquadFilter();
        this.lowShelfNode.type = 'lowshelf';
        this.highShelfNode.type = 'highshelf';

        this.outputNode = this.ctx.createGain();

        //Compresseur
        this.compressorNode = this.ctx.createDynamicsCompressor();

        //Enveloppe ADSR
        this.opts = {};

        this.setDefaultValues();

        // connect the nodes
        this.inputNode.connect(this.lowShelfNode);
        this.lowShelfNode.connect(this.highShelfNode);
        this.highShelfNode.connect(this.panNode);
        this.panNode.connect(this.volumeNode);

        // connect to output
        this.volumeNode.connect(this.outputNode);
    }

    setDefaultValues() {
        this.volumeGain = 0.5;
        this.pan = 0;
        this.tone = 0;
        this.toneValue = 0;
        this.pitchRate = 1;
        this.lowShelfNode.frequency.value = 300;
        this.highShelfNode.frequency.value = 2000;
        //ADSR
        this.opts = {
            attack: 0.2,
            decay: 0.2,
            sustain: 1,
            release: 0.3,
        };
        this.attackValue = 0.2;
        this.decayValue = 0.2;
        this.sustainValue = 1;
        //this.sustime = 5; //temps de maintien de la note
        this.releaseValue = 0.3;

    }

    setParamsEnvValue(_opts){
        this._opts.attack = parseFloat(this.attackValue);
        this._opts.decay = parseFloat(this.decayValue);
        this._opts.sustain = parseFloat(this.sustainValue);
        this._opts.release = parseFloat(this.releaseValue);
        this.envDowntime = this._opts.attack + this._opts.decay + this.sustime;
        this.envDuration = this.envDowntime + this._opts.release;
    }

    get volumeGain() {
        return this.volumeNode.gain.value;
    }

    set volumeGain(_volume) {
		if (!this.isInRange(_volume, 0, 1)) return;
		this.volumeNode.gain.value = (this.normalize(_volume, 0, 1));
		//this.volumeNode.gain.setValueAtTime(_volume, 0);
	}

    get pan() {
        return this.panNode.pan.value;
    }


	set pan(_pan) {
		if (!this.isInRange(_pan, -1, 1)) return;
		this.panNode.pan.value = _pan;
		//console.log('pan', _pan);
	}

    get tone() {
        return this.toneValue;
    }

	set tone(_tone) {
		//if (!this.isInRange(_tone, -1, 1)) return;
		if (_tone < 0) {
			this.highShelfNode.gain.value = this.normalize(_tone, 0, 30);
			//console.log('highShelfNode gain : ' + this.highShelfNode.gain.value)
		} 
		else if (_tone > 0){
			this.lowShelfNode.gain.value = this.normalize(_tone, 0, -30);
			//console.log('lowShelfNode gain : ' + this.lowShelfNode.gain.value)
		} 
		else {
			this.lowShelfNode.gain.value = 0;
			this.highShelfNode.gain.value = 0;
		}

        this.toneValue = _tone;
	}

    

    connect(node) {
        this.outputNode.connect(node);
    }

    disconnect(node) {
        this.outputNode.disconnect(node);
    }

    setAllParams(params) {
        this.volumeGain = params.volumeGain;
        this.pan = params.pan;
        this.toneValue = params.tone;
    }

    // -----------------------------------
	// Utility internal methods
	isNumber(arg) {
		return toString.call(arg) === '[object Number]' && arg === +arg;
	}

	isInRange(arg, min, max) {
		if (!this.isNumber(arg) || !this.isNumber(min) || !this.isNumber(max)) return false;

		return arg >= min && arg <= max;
	}

	// Takes a number from 0 to 1 and normalizes it to fit within range floor to ceiling
	normalize(num, floor, ceil) {
		if (!this.isNumber(num) || !this.isNumber(floor) || !this.isNumber(ceil)) return num;

		return ((ceil - floor) * num) / 1 + floor;
	}

}