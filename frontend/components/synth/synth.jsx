import React from 'react';
import Note from '../../util/note';
import { TONES, NOTE_NAMES } from '../../util/tones';
import $ from 'jquery';

class Synth extends React.Component {
  constructor(props){
    super(props);

    this.notes = NOTE_NAMES.map((note) => {
      return new Note(TONES[note]);
    });
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  onKeyDown(e) {
    // e.preventDefault();
    this.props.keyPressed(e.key);
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);
  }

  playNotes() {
    this.notes.forEach((note, idx) => {
      if (this.props.notes.includes(NOTE_NAMES[idx])){
        note.start();
      } else {
        note.stop();
      }
    });
  }

  render() {
    this.playNotes();
    return (<div>{JSON.stringify(this.notes)}</div>);
  }
}

export default Synth;
