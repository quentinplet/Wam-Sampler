import WaveformDrawer from './WaveformDrawer.js';
import EffectStack from './EffectStack.js';
import ADSRNode from "./adsrNode.js";

export default class SamplePlayer {
    constructor(audioCtx, canvasWaveform, canvasOverlay, color, decodedSound, pluginAudioNode) {
        this.ctx = audioCtx;
        this.canvasWaveform = canvasWaveform;
        this.decodedSound = decodedSound;
        this.color = color;
        this.pluginAudioNode = pluginAudioNode;
        // effects
        this.effects = new EffectStack(this.ctx);

        //adsr
        this.env;
        this.downtime;

        this.pitchValue = 0;
        this.semitones = 0;
        this.enableAdsr = false;

        // we add an overlay canvas on top of the waveform canvas
        this.canvasOverlay = canvasOverlay;
        this.ctxCanvasOverlay = this.canvasOverlay.getContext("2d");

        this.leftTrimBar = {
            x: 0,
            color: "white"
        }
        this.rightTrimBar = {
            x: this.canvasOverlay.width,
            color: "white"
        }

        this.waveformDrawer = new WaveformDrawer();
        this.waveformDrawer.init(this.decodedSound, this.canvasWaveform, this.color);
    }

    connect(node) {
        // les effets sont à la sortie du graphe du sample player
        this.effects.connect(node);
    }

    play() {
        this.startTime = this.ctx.currentTime;

        this.bufferSource = this.ctx.createBufferSource();
        this.bufferSource.buffer = this.decodedSound;
        //this.bufferSource.playbackRate.value = this.effects.pitchRate;

        //création d'un nouveau buffer avec une nouvelle durée avec le pitch modifié 
        if (this.semitones) {
            this.newBuffer = this.pitchedSound(this.bufferSource.buffer);
            this.bufferSource = this.ctx.createBufferSource();
            this.bufferSource.buffer = this.newBuffer;
        }

        this.inputNode = this.bufferSource;

        let bufferDuration = this.bufferSource.buffer.duration;
        // let newBufferDuration = bufferDuration / this.bufferSource.playbackRate.value;
        // bufferDuration = newBufferDuration;

        // console.log("buffer length : " + this.bufferSource.buffer.length);
        // console.log("buffer playbackRate : " + this.bufferSource.playbackRate.value);
        // console.log("buffer Duration : " + this.bufferSource.buffer.duration);
        //console.log("new buffer Duration : " + newBufferDuration);

        //ADSR envelope

        //if env is enabled 
        // this.env = ADSRNode(this.ctx, {
        //     attack : 0.2,
        //     decay : 0.2,
        //     sustain : 1,
        //     release : 0.5
        // });
        this.gainEnvNode = this.ctx.createGain();
        this.effects.opts.attack = this.effects.attackValue;
        this.effects.opts.decay = this.effects.decayValue;
        this.effects.opts.sustain = this.effects.sustainValue;
        this.effects.opts.release = this.effects.releaseValue;
        if (this.enableAdsr) {
            //setParamsEnvValue(this.effects.opts);
            let sustime = bufferDuration - (this.effects.opts.attack + this.effects.opts.decay + this.effects.opts.release);
            sustime = bufferDuration; //temps temporaire de sustain
            this.downtime = this.effects.opts.attack + this.effects.opts.decay + sustime;
            this.gainEnvNode.gain.value = 0;
            this.env = new ADSRNode(this.ctx, this.effects.opts);
            this.env.start(this.ctx.currentTime);
            this.env.connect(this.gainEnvNode.gain);
            this.env.trigger(this.ctx.currentTime);
            //this.env.release(this.ctx.currentTime + parseFloat(sustime));
            //this.releaseEnv();
        }

        if (!this.enableAdsr) {
            this.gainEnvNode.gain.value = 1;
        }

        //connect buffer sound to gainEnvNode then to effects
        this.bufferSource.connect(this.gainEnvNode);
        this.gainEnvNode.connect(this.effects.inputNode);

        //this.bufferSource.connect(this.ctx.destination);


        // pixelsToSeconds
        this.leftTrimBar.startTime = this.pixelToSeconds(this.leftTrimBar.x, bufferDuration);
        this.trimmedDuration = this.pixelToSeconds(this.rightTrimBar.x - this.leftTrimBar.x, bufferDuration);
        // this.bufferSource.start(0, this.leftTrimBar.startTime, trimmedDuration);
        this.pluginAudioNode.play(this);

        this.startTime = this.ctx.currentTime;
    }

    releaseEnv() {
        if (this.env) {
            this.env.release(this.ctx.currentTime + this.effects.opts.release);
        }
    }


    stop() {
        if (this.bufferSource) {
            this.bufferSource.stop();
            this.bufferSource.disconnect();
            this.bufferSource = null;
            this.startTime = 0;
        }
    }

    reverseSound(buffer) {
        let newBuffer = this.ctx.createBuffer(
            buffer.numberOfChannels,
            buffer.length,
            this.ctx.sampleRate
        )

        for (let i = 0; i < buffer.numberOfChannels; i++) {
            let channelData = buffer.getChannelData(i);
            newBuffer.copyToChannel(channelData.reverse(), i)
        };

        this.waveformDrawer = new WaveformDrawer();
        this.waveformDrawer.init(this.decodedSound, this.canvasWaveform, this.color);

        return newBuffer;
    }

    // newPitchSound(buffer, pitchRate) {
    //     let newBuffer = this.ctx.createBuffer(
    //         buffer.numberOfChannels,
    //         buffer.length,
    //         this.ctx.sampleRate
    //     )

    //     for (let i = 0; i < buffer.numberOfChannels; i++) {
    //         let channelData = buffer.getChannelData(i);
    //         newBuffer.copyToChannel(channelData, i)
    //     };
    // }

    pitchedSound(buffer) {
        const ratio = Math.pow(2, -this.semitones / 12);
        const length = buffer.length * ratio;
        const repitchedBuffer = this.ctx.createBuffer(buffer.numberOfChannels, length, buffer.sampleRate);
        for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
            const inputData = buffer.getChannelData(channel);
            const outputData = repitchedBuffer.getChannelData(channel);
            for (let i = 0; i < length; i++) {
                outputData[i] = inputData[Math.floor(i / ratio)];
            }
        }

        // this.waveformDrawer = new WaveformDrawer();
        // this.waveformDrawer.init(this.decodedSound, this.canvasWaveform, this.color);

        return repitchedBuffer;
    }


    start() {
        this.bufferSource.start(0, this.leftTrimBar.startTime, this.trimmedDuration);
    }

    pixelToSeconds(x, bufferDuration) {
        // canvas.width -> bufferDuration
        // x -> result
        return x * bufferDuration / this.canvasOverlay.width;
    }

    secondsToPixel(time, bufferDuration) {
        // bufferDuration -> canvas.width
        // time -> result
        return time * this.canvasOverlay.width / bufferDuration;
    }

    drawWaveform() {
        const ctxWaveform = this.canvasWaveform.getContext("2d");

        // draw waveform
        ctxWaveform.clearRect(0, 0, this.canvasWaveform.width, this.canvasWaveform.height);
        this.waveformDrawer.drawWave(0, this.canvasWaveform.height);
    }

    drawOverlays() {
        // clear overlay canvas;
        this.ctxCanvasOverlay.clearRect(0, 0, this.canvasOverlay.width, this.canvasOverlay.height);

        // draw trim bars and triangles
        this.drawTrimArrows();

        // draw timebar
        this.drawTimeBar();

        // draw currentTime/totalTime
        this.drawTimes();
    }

    drawTimes() {
        if (!this.bufferSource) return;
        let ctx = this.ctxCanvasOverlay;

        ctx.save();

        // draw in canvas currentTime in format seconds:miliseconds
        let elapsedTime = this.ctx.currentTime - this.startTime;
        let elapsedTimeInPixels = this.secondsToPixel(elapsedTime, this.bufferSource.buffer.duration);
        let currentTime = this.pixelToSeconds(elapsedTimeInPixels, this.bufferSource.buffer.duration);
        let currentSeconds = Math.floor(currentTime);
        let currentMiliseconds = Math.floor((currentTime - currentSeconds) * 100);
        let currentText = currentSeconds + ":" + currentMiliseconds;

        // compute length of the region being played
        const pixelLength = this.rightTrimBar.x - this.leftTrimBar.x;
        const secondLength = this.pixelToSeconds(pixelLength, this.bufferSource.buffer.duration);
        let seconds = Math.floor(secondLength);
        let miliseconds = Math.floor((secondLength - seconds) * 100);
        // draw the times
        let text = currentText + " / " + seconds + ":" + miliseconds;
        ctx.fillStyle = "white";
        ctx.font = "10px Arial";
        ctx.fillText(text, 225, 45);

        ctx.restore();
    }

    drawTimeBar() {
        if (!this.bufferSource) return;
        let ctx = this.ctxCanvasOverlay;
        ctx.save();
        // Draw vertical bar at currentTime from this.bufferSource
        let elapsedTime = this.ctx.currentTime - this.startTime;
        //console.log(elapsedTime)
        let elapsedTimeInPixels = this.secondsToPixel(elapsedTime, this.bufferSource.buffer.duration);
        //console.log(elapsedTimeInPixels)
        let x = this.leftTrimBar.x + elapsedTimeInPixels;
        if (x <= this.rightTrimBar.x) {
            ctx.lineWidth = 2;
            ctx.strokeStyle = "white";
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, this.canvasOverlay.height);
            ctx.stroke();
        } else {
            // stop the bufferSource
            this.bufferSource.stop();
            this.bufferSource = null;
        }
        ctx.restore();
    }

    drawTrimArrows() {
        let ctx = this.ctxCanvasOverlay;

        ctx.save();

        // two vertical lines
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.leftTrimBar.color;
        ctx.beginPath();
        // start
        ctx.moveTo(this.leftTrimBar.x, 0);
        ctx.lineTo(this.leftTrimBar.x, this.canvasOverlay.height);
        ctx.stroke();

        // end
        ctx.beginPath();
        ctx.strokeStyle = this.rightTrimBar.color;
        ctx.moveTo(this.rightTrimBar.x, 0);
        ctx.lineTo(this.rightTrimBar.x, this.canvasOverlay.height);
        ctx.stroke();

        // triangle start
        ctx.fillStyle = this.leftTrimBar.color;
        ctx.beginPath();
        ctx.moveTo(this.leftTrimBar.x, -0);
        ctx.lineTo(this.leftTrimBar.x + 5, 4);
        ctx.lineTo(this.leftTrimBar.x, 8);
        ctx.fill();

        // tiangle end
        ctx.beginPath();
        ctx.fillStyle = this.rightTrimBar.color;
        ctx.moveTo(this.rightTrimBar.x, -0);
        ctx.lineTo(this.rightTrimBar.x - 5, 4);
        ctx.lineTo(this.rightTrimBar.x, 8);
        ctx.fill();

        // We draw grey transparent rectangles before leftTrimBar and after rightTrimBar
        ctx.fillStyle = "rgba(128, 128, 128, 0.7)"
        ctx.fillRect(0, 0, this.leftTrimBar.x, this.canvasOverlay.height);
        ctx.fillRect(this.rightTrimBar.x, 0, this.canvasOverlay.width, this.canvasOverlay.height);

        ctx.restore();
    }

    highLightTrimBarsWhenClose(mousePos) {
        // compute distance between mousePos and trim pos
        let d = this.distance(mousePos.x, this.leftTrimBar.x);
        if ((d < 10) && (!this.rightTrimBar.selected) && (d > -5)) {
            this.leftTrimBar.color = "red";
            this.leftTrimBar.selected = true;
        } else {
            this.leftTrimBar.color = "white";
            this.leftTrimBar.selected = false;
        }

        d = this.distance(mousePos.x, this.rightTrimBar.x);
        if ((d < 5) && (!this.leftTrimBar.selected) && (d > -10)) {
            this.rightTrimBar.color = "red";
            this.rightTrimBar.selected = true;
        } else {
            this.rightTrimBar.color = "white";
            this.rightTrimBar.selected = false;
        }

        this.updateTrimBars(mousePos);
    }

    distance(x1, x2) {
        return (x2 - x1);
    }

    // on mouse move
    updateTrimBars(mousePos) {
        if (this.leftTrimBar.dragged) {
            if (this.leftTrimBar.x < this.rightTrimBar.x)
                this.leftTrimBar.x = mousePos.x;
            else {
                if (mousePos.x < this.rightTrimBar.x)
                    this.leftTrimBar.x = mousePos.x;
            }
            // Si la barre de gauche est déplacée à droite de la barre de droite
            // alors on realease les trimbars
            if (this.leftTrimBar.x > this.rightTrimBar.x) {
                this.releaseTrimBarsOnMouseOut();
                this.leftTrimBar.x = this.rightTrimBar.x;
            }
            if (mousePos.x <= 0) {
                this.leftTrimBar.x = 0;
                this.releaseTrimBarsOnMouseOut();
                //leftTrimBar.dragged = false;
                //leftTrimBar.selected = false;
                //leftTrimBar.color = "white";
            }
        }

        if (this.rightTrimBar.dragged) {
            if (this.rightTrimBar.x > this.leftTrimBar.x)
                this.rightTrimBar.x = mousePos.x;
            else {
                if (mousePos.x > this.rightTrimBar.x)
                    this.rightTrimBar.x = mousePos.x;
            }
            // Si la barre de droite est déplacée à gauche de la barre de gauche
            // alors on realease les trimbars
            if (this.rightTrimBar.x < this.leftTrimBar.x) {
                this.releaseTrimBarsOnMouseOut();
                this.rightTrimBar.x = this.leftTrimBar.x;
            }
            if (mousePos.x >= this.canvasOverlay.width) {
                this.rightTrimBar.x = this.canvasOverlay.width;
                this.releaseTrimBarsOnMouseOut();
                //leftTrimBar.dragged = false;
                //leftTrimBar.selected = false;
                //leftTrimBar.color = "white";
            }
        }


    }

    // on mouse click
    selectTrimbars() {
        if (this.leftTrimBar.selected)
            this.leftTrimBar.dragged = true;

        if (this.rightTrimBar.selected)
            this.rightTrimBar.dragged = true;
    }

    // on mouse up
    releaseTrimBars() {
        if (this.leftTrimBar.dragged) {
            this.leftTrimBar.dragged = false;
            this.leftTrimBar.selected = false;
            if (this.leftTrimBar.x > this.rightTrimBar.x)
                this.leftTrimBar.x = this.rightTrimBar.x;
        }

        if (this.rightTrimBar.dragged) {
            this.rightTrimBar.dragged = false;
            this.rightTrimBar.selected = false;

            if (this.rightTrimBar.x < this.leftTrimBar.x)
                this.rightTrimBar.x = this.leftTrimBar.x;
        }
    }

    // on mouse out
    releaseTrimBarsOnMouseOut() {
        this.leftTrimBar.dragged = false;
        this.leftTrimBar.selected = false;
        this.rightTrimBar.dragged = false;
        this.rightTrimBar.selected = false;
    }
}