import React, { useRef, useEffect, useCallback } from 'react'

const timeout = 3000
const url = 'https://booth.clubindoors.com/stream'

export const Audio = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const heartbeatRef = useRef<number>()

  const handleDisconnect = useCallback(
    () => {
      if (!audioRef.current) {
        return
      }

      audioRef.current.load()
    },
    []
  )

  useEffect(() => {
    if (!audioRef.current) {
      return
    }
    audioRef.current.load()

    heartbeatRef.current = window.setTimeout(handleDisconnect, timeout)

    audioRef.current.addEventListener('timeupdate', () => {
      clearTimeout(heartbeatRef.current)

      if (audioRef.current?.currentTime === 0) { return }

      heartbeatRef.current = window.setTimeout(handleDisconnect, timeout)
    })

    audioRef.current.oncanplay = () => {
      audioRef.current?.play()
    }

    audioRef.current.onerror = handleDisconnect
  }, [handleDisconnect])


	return (
    <audio
      ref={audioRef}
      controls
      autoPlay
      className="w-50 m-auto"
      src={url}
    >
      Your browser does not support the audio tag.
    </audio>
	)
}