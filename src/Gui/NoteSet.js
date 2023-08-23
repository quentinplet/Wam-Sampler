export default class NoteSet {
  static scales = [
    {
      name: "Major",
      notes: {
        ascending: [
          { key: "C", semitones: 0 },
          { key: "D", semitones: 2 },
          { key: "E", semitones: 4 },
          { key: "F", semitones: 5 },
          { key: "G", semitones: 7 },
          { key: "A", semitones: 9 },
          { key: "B", semitones: 11 },
          { key: "C", semitones: 12 },
          { key: "D", semitones: 14 },
          { key: "E", semitones: 16 },
          { key: "F", semitones: 17 },
        ],
        descending: [
          { key: "C", semitones: 0 },
          { key: "B", semitones: -1 },
          { key: "A", semitones: -3 },
          { key: "G", semitones: -5 },
          { key: "F", semitones: -7 },
          { key: "E", semitones: -8 },
          { key: "D", semitones: -10 },
          { key: "C", semitones: -12 },
          { key: "B", semitones: -13 },
          { key: "A", semitones: -15 },
          { key: "G", semitones: -17 },
        ],
      },
    },
    {
      name: "Natural Minor",
      notes: {
        ascending: [
          { key: "C", semitones: 0 },
          { key: "D", semitones: 2 },
          { key: "Eb", semitones: 3 },
          { key: "F", semitones: 5 },
          { key: "G", semitones: 7 },
          { key: "Ab", semitones: 8 },
          { key: "Bb", semitones: 10 },
          { key: "C", semitones: 12 },
          { key: "D", semitones: 14 },
          { key: "Eb", semitones: 15 },
          { key: "F", semitones: 17 },
        ],
        descending: [
          { key: "C", semitones: 0 },
          { key: "Bb", semitones: -2 },
          { key: "Ab", semitones: -4 },
          { key: "G", semitones: -5 },
          { key: "F", semitones: -7 },
          { key: "Eb", semitones: -9 },
          { key: "D", semitones: -10 },
          { key: "C", semitones: -12 },
          { key: "Bb", semitones: -14 },
          { key: "Ab", semitones: -16 },
          { key: "G", semitones: -17 },
        ],
      },
    },
    {
      name: "Harmonic Minor",
      notes: {
        ascending: [
          { key: "C", semitones: 0 },
          { key: "D", semitones: 2 },
          { key: "Eb", semitones: 3 },
          { key: "F", semitones: 5 },
          { key: "G", semitones: 7 },
          { key: "Ab", semitones: 8 },
          { key: "B", semitones: 11 },
          { key: "C", semitones: 12 },
          { key: "D", semitones: 14 },
          { key: "Eb", semitones: 15 },
          { key: "F", semitones: 17 },
        ],
        descending: [
          { key: "C", semitones: 0 },
          { key: "B", semitones: -1 },
          { key: "Ab", semitones: -4 },
          { key: "G", semitones: -5 },
          { key: "F", semitones: -7 },
          { key: "Eb", semitones: -9 },
          { key: "D", semitones: -10 },
          { key: "C", semitones: -12 },
          { key: "B", semitones: -13 },
          { key: "A", semitones: -15 },
          { key: "G", semitones: -17 },
        ],
      },
    },
    {
      name: "Melodic Minor",
      notes: {
        ascending: [
          { key: "C", semitones: 0 },
          { key: "D", semitones: 2 },
          { key: "Eb", semitones: 3 },
          { key: "F", semitones: 5 },
          { key: "G", semitones: 7 },
          { key: "A", semitones: 9 },
          { key: "B", semitones: 11 },
          { key: "C", semitones: 12 },
          { key: "D", semitones: 14 },
          { key: "Eb", semitones: 15 },
          { key: "F", semitones: 17 },
        ],
        descending: [
          { key: "C", semitones: 0 },
          { key: "B", semitones: -1 },
          { key: "A", semitones: -3 },
          { key: "G", semitones: -5 },
          { key: "F", semitones: -7 },
          { key: "Eb", semitones: -9 },
          { key: "D", semitones: -10 },
          { key: "C", semitones: -12 },
          { key: "B", semitones: -13 },
          { key: "Ab", semitones: -16 },
          { key: "G", semitones: -17 },
        ],
      },
    },
    {
      name: "Pentatonic Major",
      notes: {
        ascending: [
          { key: "C", semitones: 0 },
          { key: "D", semitones: 2 },
          { key: "E", semitones: 4 },
          { key: "G", semitones: 7 },
          { key: "A", semitones: 9 },
          { key: "C", semitones: 12 },
          { key: "D", semitones: 14 },
          { key: "E", semitones: 16 },
          { key: "G", semitones: 19 },
          { key: "A", semitones: 21 },    
        ],
        descending: [
          { key: "C", semitones: 0 },
          { key: "A", semitones: -3 },
          { key: "G", semitones: -5 },
          { key: "E", semitones: -8 },
          { key: "D", semitones: -10 },
          { key: "C", semitones: -12 },
          { key: "A", semitones: -15 },
          { key: "G", semitones: -17 },
          { key: "E", semitones: -20 },
          { key: "D", semitones: -22 },       
        ],
      },
    },
    {
      name: "Pentatonic Minor",
      notes: {
        ascending: [
          { key: "C", semitones: 0 },
          { key: "Eb", semitones: 3 },
          { key: "F", semitones: 5 },
          { key: "G", semitones: 7 },
          { key: "Bb", semitones: 10 },
          { key: "C", semitones: 12 },
          { key: "Eb", semitones: 15 },
          { key: "F", semitones: 17 },
          { key: "G", semitones: 19 },
          { key: "Bb", semitones: 22 },  
        ],
        descending: [
          { key: "C", semitones: 0 },
          { key: "Bb", semitones: -2 },
          { key: "G", semitones: -5 },
          { key: "F", semitones: -7 },
          { key: "Eb", semitones: -9 },
          { key: "C", semitones: -12 },
          { key: "Bb", semitones: -14 },
          { key: "G", semitones: -17 },
          { key: "F", semitones: -19 },
          { key: "Eb", semitones: -21 },
        ],
      },
    },
    {
      name: "Blues scale",
      notes: {
        ascending: [
          { key: "C", semitones: 0 },
          { key: "Eb", semitones: 3 },
          { key: "F", semitones: 5 },
          { key: "Gb", semitones: 6 },
          { key: "G", semitones: 7 },
          { key: "Bb", semitones: 10 },
          { key: "C", semitones: 12 },
          { key: "Eb", semitones: 15 },
          { key: "F", semitones: 17 },
          { key: "Gb", semitones: 18 },
          { key: "G", semitones: 19 },
          { key: "Bb", semitones: 22 },
        ],
        descending: [
          { key: "C", semitones: 0 },
          { key: "Bb", semitones: -2 },
          { key: "G", semitones: -5 },
          { key: "Gb", semitones: -6 },
          { key: "F", semitones: -7 },
          { key: "Eb", semitones: -9 },
          { key: "C", semitones: -12 },
          { key: "Bb", semitones: -14 },
          { key: "G", semitones: -17 },
          { key: "Gb", semitones: -18 },
          { key: "F", semitones: -19 },
          { key: "Eb", semitones: -21 },
        ],
      },
    },
    {
      name: "Ionian",
      notes: {
        ascending: [
          { key: "C", semitones: 0 },
          { key: "D", semitones: 2 },
          { key: "E", semitones: 4 },
          { key: "F", semitones: 5 },
          { key: "G", semitones: 7 },
          { key: "A", semitones: 9 },
          { key: "B", semitones: 11 },
          { key: "C", semitones: 12 },
          { key: "D", semitones: 14 },
          { key: "E", semitones: 16 },
          { key: "F", semitones: 17 },
        ],
        descending: [
          { key: "C", semitones: 0 },
          { key: "B", semitones: -1 },
          { key: "A", semitones: -3 },
          { key: "G", semitones: -5 },
          { key: "F", semitones: -7 },
          { key: "E", semitones: -8 },
          { key: "D", semitones: -10 },
          { key: "C", semitones: -12 },
          { key: "B", semitones: -13 },
          { key: "A", semitones: -15 },
          { key: "G", semitones: -17 },
        ],
      },
    },
    {
      name: "Dorian",
      notes: {
        ascending: [
          { key: "C", semitones: 0 },
          { key: "D", semitones: 2 },
          { key: "Eb", semitones: 3 },
          { key: "F", semitones: 5 },
          { key: "G", semitones: 7 },
          { key: "A", semitones: 9 },
          { key: "Bb", semitones: 10 },
          { key: "C", semitones: 12 },
          { key: "D", semitones: 14 },
          { key: "Eb", semitones: 15 },
          { key: "F", semitones: 17 },
        ],
        descending: [
          { key: "C", semitones: 0 },
          { key: "Bb", semitones: -2 },
          { key: "A", semitones: -3 },
          { key: "G", semitones: -5 },
          { key: "F", semitones: -7 },
          { key: "Eb", semitones: -9 },
          { key: "D", semitones: -10 },
          { key: "C", semitones: -12 },
          { key: "Bb", semitones: -14 },
          { key: "A", semitones: -15 },
          { key: "G", semitones: -17 },
        ],
      },
    },
    {
      name: "Phrygian",
      notes: {
        ascending: [
          { key: "C", semitones: 0 },
          { key: "Db", semitones: 1 },
          { key: "Eb", semitones: 3 },
          { key: "F", semitones: 5 },
          { key: "G", semitones: 7 },
          { key: "Ab", semitones: 8 },
          { key: "Bb", semitones: 10 },
          { key: "C", semitones: 12 },
          { key: "Db", semitones: 13 },
          { key: "Eb", semitones: 15 },
          { key: "F", semitones: 17 },
        ],
        descending: [
          { key: "C", semitones: 0 },
          { key: "Bb", semitones: -2 },
          { key: "Ab", semitones: -4 },
          { key: "G", semitones: -5 },
          { key: "F", semitones: -7 },
          { key: "Eb", semitones: -9 },
          { key: "Db", semitones: -11 },
          { key: "C", semitones: -12 },
          { key: "Bb", semitones: -14 },
          { key: "Ab", semitones: -16 },
          { key: "G", semitones: -17 },
        ],
      },
    },
    {
      name: "Lydian",
      notes: {
        ascending: [
          { key: "C", semitones: 0 },
          { key: "D", semitones: 2 },
          { key: "E", semitones: 4 },
          { key: "F#", semitones: 6 },
          { key: "G", semitones: 7 },
          { key: "A", semitones: 9 },
          { key: "B", semitones: 11 },
          { key: "C", semitones: 12 },
          { key: "D", semitones: 14 },
          { key: "E", semitones: 16 },
          { key: "F#", semitones: 18 },
        ],
        descending: [
          { key: "C", semitones: 0 },
          { key: "B", semitones: -1 },
          { key: "A", semitones: -3 },
          { key: "G", semitones: -5 },
          { key: "F#", semitones: -6 },
          { key: "E", semitones: -8 },
          { key: "D", semitones: -10 },
          { key: "C", semitones: -12 },
          { key: "B", semitones: -13 },
          { key: "A", semitones: -15 },
          { key: "G", semitones: -17 },
        ],
      },
    },
    {
      name: "Mixolydian",
      notes: {
        ascending: [
          { key: "C", semitones: 0 },
          { key: "D", semitones: 2 },
          { key: "E", semitones: 4 },
          { key: "F", semitones: 5 },
          { key: "G", semitones: 7 },
          { key: "A", semitones: 9 },
          { key: "Bb", semitones: 10 },
          { key: "C", semitones: 12 },
          { key: "D", semitones: 14 },
          { key: "E", semitones: 16 },
          { key: "F", semitones: 17 },
        ],
        descending: [
          { key: "C", semitones: 0 },
          { key: "Bb", semitones: -2 },
          { key: "A", semitones: -3 },
          { key: "G", semitones: -5 },
          { key: "F", semitones: -7 },
          { key: "E", semitones: -8 },
          { key: "D", semitones: -10 },
          { key: "C", semitones: -12 },
          { key: "Bb", semitones: -14 },
          { key: "A", semitones: -15 },
          { key: "G", semitones: -17 },
        ],
      },
    },
    {
      name: "Aeolian",
      notes: {
        ascending: [
          { key: "C", semitones: 0 },
          { key: "D", semitones: 2 },
          { key: "Eb", semitones: 3 },
          { key: "F", semitones: 5 },
          { key: "G", semitones: 7 },
          { key: "Ab", semitones: 8 },
          { key: "Bb", semitones: 10 },
          { key: "C", semitones: 12 },
          { key: "D", semitones: 14 },
          { key: "Eb", semitones: 15 },
          { key: "F", semitones: 17 },
        ],
        descending: [
          { key: "C", semitones: 0 },
          { key: "Bb", semitones: -2 },
          { key: "Ab", semitones: -4 },
          { key: "G", semitones: -5 },
          { key: "F", semitones: -7 },
          { key: "Eb", semitones: -9 },
          { key: "D", semitones: -10 },
          { key: "C", semitones: -12 },
          { key: "Bb", semitones: -14 },
          { key: "Ab", semitones: -16 },
          { key: "G", semitones: -17 },
        ],
      },
    },
    {
      name: "Locrian",
      notes: {
        ascending: [
          { key: "C", semitones: 0 },
          { key: "Db", semitones: 1 },
          { key: "Eb", semitones: 3 },
          { key: "F", semitones: 5 },
          { key: "Gb", semitones: 6 },
          { key: "Ab", semitones: 8 },
          { key: "Bb", semitones: 10 },
          { key: "C", semitones: 12 },
          { key: "Db", semitones: 13 },
          { key: "Eb", semitones: 15 },
          { key: "F", semitones: 17 },
        ],
        descending: [
          { key: "C", semitones: 0 },
          { key: "Bb", semitones: -2 },
          { key: "Ab", semitones: -4 },
          { key: "Gb", semitones: -6 },
          { key: "F", semitones: -7 },
          { key: "Eb", semitones: -9 },
          { key: "Db", semitones: -11 },
          { key: "C", semitones: -12 },
          { key: "Bb", semitones: -14 },
          { key: "Ab", semitones: -16 },
          { key: "Gb", semitones: -18 },
        ],
      },
    },
    {
      name: "Whole Tone",
      notes: {
        ascending: [
          { key: "C", semitones: 0 },
          { key: "D", semitones: 2 },
          { key: "E", semitones: 4 },
          { key: "Gb", semitones: 6 },
          { key: "Ab", semitones: 8 },
          { key: "Bb", semitones: 10 },
          { key: "C", semitones: 12 },
          { key: "D", semitones: 14 },
          { key: "E", semitones: 16 },
          { key: "Gb", semitones: 18 },
          { key: "Ab", semitones: 20 },
          { key: "Bb", semitones: 22 },
        ],
        descending: [
          { key: "C", semitones: 0 },
          { key: "Bb", semitones: -2 },
          { key: "Ab", semitones: -4 },
          { key: "Gb", semitones: -6 },
          { key: "E", semitones: -8 },
          { key: "D", semitones: -10 },
          { key: "C", semitones: -12 },
          { key: "Bb", semitones: -14 },
          { key: "Ab", semitones: -16 },
          { key: "Gb", semitones: -18 },
          { key: "E", semitones: -20 },
          { key: "D", semitones: -22 },
        ],
      },
    },
    {
      name: "Chromatic",
      notes: {
        ascending: [
          { key: "C", semitones: 0 },
          { key: "C#", semitones: 1 },
          { key: "D", semitones: 2 },
          { key: "D#", semitones: 3 },
          { key: "E", semitones: 4 },
          { key: "F", semitones: 5 },
          { key: "F#", semitones: 6 },
          { key: "G", semitones: 7 },
          { key: "G#", semitones: 8 },
          { key: "A", semitones: 9 },
        ],
        descending: [
          { key: "C", semitones: 0 },
          { key: "B", semitones: -1 },
          { key: "Bb", semitones: -2 },
          { key: "A", semitones: -3 },
          { key: "Ab", semitones: -4 },
          { key: "G", semitones: -5 },
          { key: "Gb", semitones: -6 },
          { key: "F", semitones: -7 },
          { key: "E", semitones: -8 },
          { key: "Eb", semitones: -9 },
        ],
      },
    },
  ];

  static notesNamesFlat = ['A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab'];
  static notesNamesSharp = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#',
                            'A','A#','B','C','C#','D','D#','E','F','F#','G','G#',
                            'A','A#','B','C','C#','D','D#','E','F','F#','G','G#','A'];
  static notesSharp = [{key: 'A', ascendingSemitonesFromRoot: 9, descendingSemitonesFromRoot: -3},
                       {key: 'A#', ascendingSemitonesFromRoot: 10, descendingSemitonesFromRoot: -2},
                       {key: 'B', ascendingSemitonesFromRoot: 11, descendingSemitonesFromRoot: -1},
                       {key: 'C', ascendingSemitonesFromRoot: 0, descendingSemitonesFromRoot: -12},
                       {key: 'C#', ascendingSemitonesFromRoot: 1, descendingSemitonesFromRoot: -11},
                       {key: 'D', ascendingSemitonesFromRoot: 2, descendingSemitonesFromRoot: -10},
                       {key: 'D#', ascendingSemitonesFromRoot: 3, descendingSemitonesFromRoot: -9},
                       {key: 'E', ascendingSemitonesFromRoot: 4, descendingSemitonesFromRoot: -8},
                       {key: 'F', ascendingSemitonesFromRoot: 5, descendingSemitonesFromRoot: -7},
                       {key: 'F#', ascendingSemitonesFromRoot: 6, descendingSemitonesFromRoot: -6},
                       {key: 'G', ascendingSemitonesFromRoot: 7, descendingSemitonesFromRoot: -5},
                       {key: 'G#', ascendingSemitonesFromRoot: 8, descendingSemitonesFromRoot: -4},]
  static scalesWithFlat = ['F','Bb','Eb','Ab','Db','Gb','Cb'];
  static scalesWithSharp = ['G','D','A','E','B','F#','C#'];

  static changeScaleNoteName(ascendingNotesSemitones, descendingNotesSemitones, rootNoteName) {

    const noteLetter = rootNoteName.match(/[A-G][#b]?/)[0];
    //By default the octave is 4
    let midiOctave = 4;
    //If the name of the sample already contains the octave (like 'C4')
    if(rootNoteName.match(/[0-9]/)){
      midiOctave = rootNoteName.match(/[0-9]/)[0];
    }

    const indexNoteLetter = this.notesNamesSharp.indexOf(noteLetter);
    const lastIndexNoteLetter = this.notesNamesSharp.lastIndexOf(noteLetter);
    const ascendingSemitonesFromRoot = this.notesSharp.find((note) => note.key === noteLetter).ascendingSemitonesFromRoot;
    const descendingSemitonesFromRoot = this.notesSharp.find((note) => note.key === noteLetter).descendingSemitonesFromRoot;
    
    const newAscendingNotesNames = ascendingNotesSemitones.map((semitone) => {
      const index = indexNoteLetter + semitone;
      let newMidiOctave = midiOctave;
      if(ascendingSemitonesFromRoot + semitone >= 12) {
        newMidiOctave = +midiOctave + Math.floor((ascendingSemitonesFromRoot + semitone)  / 12);
      }
      return this.notesNamesSharp[index] + newMidiOctave ;
    });

    const newDescendingNotesNames = descendingNotesSemitones.map((semitone) => {
      const index = lastIndexNoteLetter + semitone;
      let newMidiOctave = midiOctave;
      if(descendingSemitonesFromRoot + semitone < -12) {
        newMidiOctave = +midiOctave - 1;
      }
      return this.notesNamesSharp[index] + newMidiOctave;
    });

    const newNamesScale = {
      ascending: newAscendingNotesNames,
      descending: newDescendingNotesNames
    };

    return newNamesScale;

    // const newScale = scale.notes.ascending.map((note, index) => {
    //   const newNote = {};
    //   newNote.key = newNameScale[index];
    //   newNote.semitones = note.semitones;
    //   return newNote;
    // });

    // console.log(newScale);
    

  }

  static setEffectsSamplePlayer(currentSamplePlayer, rootPlayer) {
    currentSamplePlayer.leftTrimBar.x = rootPlayer.leftTrimBar.x;
    currentSamplePlayer.rightTrimBar.x = rootPlayer.rightTrimBar.x;
    
    currentSamplePlayer.effects.attackValue = rootPlayer.effects.attackValue;
    currentSamplePlayer.effects.decayValue = rootPlayer.effects.decayValue;
    currentSamplePlayer.effects.sustainValue = rootPlayer.effects.sustainValue;
    currentSamplePlayer.effects.releaseValue = rootPlayer.effects.releaseValue;
    currentSamplePlayer.enableAdsr = rootPlayer.enableAdsr;

    return currentSamplePlayer;
  }

  static getListOfSemitones(selectMenuValue) {
    const notes = {};
    let ascendingNotes, descendingNotes;
    switch (selectMenuValue) {
      case "majorScale":
        ascendingNotes = this.ascendingMajorScale;
        descendingNotes = this.descendingMajorScale;
        break;
      case "minorScale":
        ascendingNotes = this.ascendingMinorScale;
        descendingNotes = this.descendingMinorScale;
        break;
    }
    notes.ascendingNotes = ascendingNotes;
    notes.descendingNotes = descendingNotes;
    return notes;
  }

  static getScales() {
    return this.scales;
  }

  static buildScaleMenu(select) {
    this.scales.forEach((scale) => {
      const option = document.createElement("option");
      option.value = scale.name;
      option.innerHTML = scale.name;
      select.appendChild(option);
    });

  }
}
