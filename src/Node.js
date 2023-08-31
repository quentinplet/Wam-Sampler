/** @typedef { import('../../sdk-parammgr').ParamMgrNode } ParamMgrNode */
/* eslint-disable no-console */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
import CompositeAudioNode from '../libs/sdk-parammgr/src/CompositeAudioNode.js';

// name is not so important here, the file Node.js is imported by the main plugin file (index.js)
export default class SamplerNode extends CompositeAudioNode {
	/**
	 * @type {ParamMgrNode}
	 */
	_wamNode = undefined;

	/**
	 * @param {ParamMgrNode} wamNode
	 */
	// Mandatory.
	setup(wamNode) {
		this._wamNode = wamNode;
		this.connectInitialNodes();
	}

	constructor(context, options) {
		super(context, options);
		this.createInitialNodes();
	}

	/*  #########  Personnal code for the web audio graph  #########   */
	createInitialNodes() {
		// mandatory, will create defaul input and output
		this.outputNode = this.context.createGain();
	}


	connectInitialNodes() {
		this._output =this.outputNode;
	}

	
	play(samplePlayer) {
		// connect the samplePlayer to the plugin node graph, then start it
		samplePlayer.connect(this.outputNode);

		//et on le joue
		samplePlayer.start();
	}

	getState(){
		if(!this.gui) return {
			presetName: this.currentPreset,
		};
		// console.log("getState currentPreset = " + this.currentPreset);
		const currentState = this.gui.getCurrentState(this.currentPreset, this.gui.samplePlayers);
		return {
			presetName: this.currentPreset,
			currentState: currentState,
		};
	}

	setState(state){
		if(!this.gui) return;
		console.log("setState currentPreset = " + state.presetName);
		//ask GUI to load the preset
		// this.gui.loadCompletePreset(state.presetName);
		this.gui.loadCurrentPreset(state.presetName);

		this.gui.loadCurrentState(state.currentState);

		console.log(state.currentState);
		

	}
	/**
	 * Tools to build sounds
	 */

	// MANDATORY : redefine these methods
	// eslint-disable-next-line class-methods-use-this
	getParamValue(name) {
		return this._wamNode.getParamValue(name);
	}
 
	setParamValue(name, value) {
		return this._wamNode.setParamValue(name, value);
	}

	getParamsValues() {
		return this._wamNode.getParamsValues();
	}

	setParamsValues(values) {
		return this._wamNode.setParamsValues(values);
	}

	
}
