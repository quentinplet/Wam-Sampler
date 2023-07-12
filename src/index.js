/* eslint-disable no-underscore-dangle */
// Double role for WebAudioModule :
// 1 - Factory for providing the DSP/WebAudio node and GUI
// 2 - This makes the instance of the current class an Observable
//     (state in WebAudioModule, initialized with the default values of
//      the params variable below...)

// IMPORT NECESSARY DSK FILES
import WebAudioModule from '../libs/sdk/src/WebAudioModule.js';
import ParamMgrFactory from '../libs/sdk-parammgr/src/ParamMgrFactory.js';

// DSP part
import SamplerNode from './Node.js';
// GUI part
import { createElement } from './Gui/index.js';

/**
 * @param {URL} relativeURL
 * @returns {string}
 */
const getBasetUrl = (relativeURL) => {
	const baseURL = relativeURL.href.substring(0, relativeURL.href.lastIndexOf('/'));
	return baseURL;
};

// Definition of a new plugin
// All plugins must inherit from WebAudioModule
export default class SamplerPlugin extends WebAudioModule {
	_baseURL = getBasetUrl(new URL('.', import.meta.url));

	_descriptorUrl = `${this._baseURL}/descriptor.json`;

	async _loadDescriptor() {
		const url = this._descriptorUrl;
		if (!url) throw new TypeError('Descriptor not found');
		const response = await fetch(url);
		const descriptor = await response.json();
		Object.assign(this.descriptor, descriptor);
	}

	async initialize(state) {
		await this._loadDescriptor();
		return super.initialize(state);
	}

	async createAudioNode(initialState) {
		// this node implements the DSP code. It is seen as a single WebAudio node
		// and shares the connect/disconnect methods, but it can be a graph
		// of nodes.
		const url = "../assets/audio/preset1/kick.wav";

		const samplerNode = new SamplerNode(this.audioContext);

		const internalParamsConfig = {
			// samplerNode.overdrives[0] is a waveshaper. When we call setLowGain(value) it will change
			// the curve of the waveshaper... so... we don't really want to automatize at a fast rate...
			// I guess this is the case of a developer who is gonna do custom automation
			currentPreset: {
				name: 'factoryPreset2',
				type: 'choice',
				choices: ['factoryPreset1', 'factoryPreset2'],
				onChange: (value) => { 
					console.log('changement preset : value : ' + value);
					//samplerNode.volumeGain = value; 
				}
			}
		};
		// hmmm no mapping...
		// const paramsMapping = {};

		// Create a param manager instance (ParamMgr comes from the SDK)
		// with the param configs
		const optionsIn = { internalParamsConfig };
		const paramMgrNode = await ParamMgrFactory.create(this, optionsIn);
		// Link the param manager to the DSP code of the plugin.
		// Remember that the param manager will provide automation, etc.
		samplerNode.setup(paramMgrNode);

		// If there is an initial state at construction for this plugin,
		if (initialState) samplerNode.setState(initialState);

		return samplerNode;
	}

	createGui() {
		return createElement(this);
	}
}
