import React from 'react'
import Song from './slideshow/Song'
import Chat from './slideshow/Chat'

const Slideshow = () => {
  return (
    <div className="md:flex">
      <Song />
      <Chat showAudio />
    </div>
  )
}

export default Slideshow;