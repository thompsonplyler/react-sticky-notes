import React from 'react'
import StickyNote from './StickyNote'

export default function StickyNoteContainer({stickyNotes}) {
  return (
    <div>
        <h3>Sticky Notes!</h3>
        {(stickyNotes.length===0)?"You have no notes.":stickyNotes.map((note, idx)=> 
        <StickyNote 
            key={idx} 
            title={note.title} 
            content={note.content} 
        />)}
    </div>
  )
}


// Ternary Operator Syntax
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// true ? yes : no