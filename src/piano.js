import React from 'react';
import * as Tone from 'tone';
import './piano.css';

const notes = [
  
  { note: 'C3', type: 'white' },
  { note: 'C#3', type: 'black' },
  { note: 'D3', type: 'white' },
  { note: 'D#3', type: 'black' },
  { note: 'E3', type: 'white' },
  { note: 'F3', type: 'white' },
  { note: 'F#3', type: 'black' },
  { note: 'G3', type: 'white' },
  { note: 'G#3', type: 'black' },
  { note: 'A3', type: 'white' },
  { note: 'A#3', type: 'black' },
  { note: 'B3', type: 'white' },
  
  { note: 'C4', type: 'white' },
  { note: 'C#4', type: 'black' },
  { note: 'D4', type: 'white' },
  { note: 'D#4', type: 'black' },
  { note: 'E4', type: 'white' },
  { note: 'F4', type: 'white' },
  { note: 'F#4', type: 'black' },
  { note: 'G4', type: 'white' },
  { note: 'G#4', type: 'black' },
  { note: 'A4', type: 'white' },
  { note: 'A#4', type: 'black' },
  { note: 'B4', type: 'white' },
  
  { note: 'C5', type: 'white' },
  { note: 'C#5', type: 'black' },
  { note: 'D5', type: 'white' },
  { note: 'D#5', type: 'black' },
  { note: 'E5', type: 'white' },
  { note: 'F5', type: 'white' },
  { note: 'F#5', type: 'black' },
  { note: 'G5', type: 'white' },
  { note: 'G#5', type: 'black' },
  { note: 'A5', type: 'white' },
  { note: 'A#5', type: 'black' },
  { note: 'B5', type: 'white' },
 
  { note: 'C6', type: 'white' }
];

const Piano = () => {
  const playNote = (note, element) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, '8n'); 

   
    element.classList.add('active');
    setTimeout(() => {
      element.classList.remove('active');
    }, 100); 
  };

  return (
    <div className="piano">
      {notes.map(({ note, type }, index) => (
        <div key={index} className={`key-wrapper ${type}`}>
          <button
            className={`key ${type}`}
            onClick={(e) => playNote(note, e.target)} 
          >
            {type === 'black' ? <span className="note-label">{note}</span> : note}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Piano;




