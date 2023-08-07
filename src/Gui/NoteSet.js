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
      name: "Minor",
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
          { key: "Ab", semitones: -3 },
          { key: "G", semitones: -5 },
          { key: "F", semitones: -7 },
          { key: "Eb", semitones: -8 },
          { key: "D", semitones: -10 },
          { key: "C", semitones: -12 },
          { key: "Bb", semitones: -13 },
          { key: "Ab", semitones: -15 },
          { key: "G", semitones: -17 },
        ],
      },
    },
  ];
  // Major scale
  static ascendingMajorScale = [
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
  ];

  static descendingMajorScale = [
    { key: "C", semitones: 0 },
    { key: "B", semitones: -1 },
    { key: "A", semitones: -3 },
    { key: "G", semitones: -5 },
    { key: "F", semitones: -7 },
    { key: "E", semitones: -8 },
    { key: "R", semitones: -10 },
    { key: "C", semitones: -12 },
    { key: "B", semitones: -13 },
    { key: "A", semitones: -15 },
    { key: "G", semitones: -17 },
  ];

  // Minor scale
  static ascendingMinorScale = [
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
  ];

  static descendingMinorScale = [
    { key: "C", semitones: 0 },
    { key: "Bb", semitones: -2 },
    { key: "Ab", semitones: -3 },
    { key: "G", semitones: -5 },
    { key: "F", semitones: -7 },
    { key: "Eb", semitones: -8 },
    { key: "D", semitones: -10 },
    { key: "C", semitones: -12 },
    { key: "Bb", semitones: -13 },
    { key: "Ab", semitones: -15 },
    { key: "G", semitones: -17 },
  ];

  // Harmonic minor scale
  static ascendingHarmonicMinorScale = [
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
  ];

  static notesNamesFlat = ['A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab'];
  static notesNamesSharp = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#',
                            'A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];

  static scalesWithFlat = ['F','Bb','Eb','Ab','Db','Gb','Cb'];
  static scalesWithSharp = ['G','D','A','E','B','F#','C#'];

  static changeScaleNoteName(ascendingNotesSemitones, descendingNotesSemitones, noteName) {

    const noteLetter = noteName.match(/[A-G]/)[0];
    const midiOctave = noteName.match(/[0-9]/)[0];

    const indexNoteLetter = this.notesNamesSharp.indexOf(noteLetter);
    const lastIndexNoteLetter = this.notesNamesSharp.lastIndexOf(noteLetter);
    
    const newAscendingNotesNames = ascendingNotesSemitones.map((semitone) => {
      const index = indexNoteLetter + semitone;
      return this.notesNamesSharp[index] + (semitone >= 12 ? +midiOctave + 1 : +midiOctave) ;
    });

    const newDescendingNotesNames = descendingNotesSemitones.map((semitone) => {
      const index = lastIndexNoteLetter + semitone;
      return this.notesNamesSharp[index] + (semitone == 0 ? +midiOctave : +midiOctave - 1) ;
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
