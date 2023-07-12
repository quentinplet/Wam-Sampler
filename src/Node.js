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
		// on connecte le samplePlayer au graphe du noeud du plugin
		// et on le démarre
		samplePlayer.connect(this.outputNode);

		//et on le joue
		samplePlayer.start();
	}

	getState(){
		console.log("getState currentPreset = " + this.currentPreset);
		return {
			presetName: this.currentPreset
		};
	}

	setState(state){
		console.log("setState currentPreset = " + state.presetName);
		// demander à la GUI de loader le preset
		this.gui.loadCompletePreset(state.presetName);
		console.log(this.gui);

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
