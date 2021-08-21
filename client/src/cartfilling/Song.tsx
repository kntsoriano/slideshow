import React from 'react'
import { useQuery } from 'react-query'
import { SongType } from '../types'

const Song = () => {
  const { data, status } = useQuery<{ song: SongType }>(
    'song',
    () => fetch('/api/song').then((res) => res.json()),
    { refetchInterval: 500 }
  )

  if (status === 'error') {
    return (
      <div className="w-full md:w-4/5 bg-black relative h-screen/2 md:h-auto">
        <p className="absolute top-0 left-0 lg:top-5 lg:left-5 text-white text-sm lg:text-xl bg-black p-2 text-center w-full lg:w-auto">
          An error has occurred. Please refresh the page.
        </p>
      </div>
    )
  }

  if (status === 'loading') {
    return (
      <div className="w-full md:w-4/5 bg-black relative h-screen/2 md:h-auto">
        <p className="absolute top-0 left-0 lg:top-5 lg:left-5 text-white text-sm lg:text-xl bg-black p-2 text-center w-full lg:w-auto">
          Loading...
        </p>
      </div>
    )
  }

  if (data === undefined) {
    return (
      <div className="w-full md:w-4/5 bg-black relative h-screen/2 md:h-auto">
        <p className="absolute top-0 left-0 lg:top-5 lg:left-5 text-white text-sm lg:text-xl bg-black p-2 text-center w-full lg:w-auto">
          An error has occurred. Please refresh the page.
        </p>
      </div>
    )
  }

  return (
    <div
      className="w-full md:w-4/5 bg-contain bg-no-repeat bg-center bg-black relative h-screen/2 md:h-auto flex items-center justify-center relative"
      style={{ backgroundColor: `#20201d` }}
    >
      <div
        className="pointer-events-none"
        style={{
          animation: "grain 10s steps(10) infinite",
          backgroundImage:
            "url('https://www.dropbox.com/s/h7ab1c82ctzy83n/noise.png?raw=1')",
          width: "500%",
          height: "500%",
          opacity: "0.3",
          position: "fixed",
        }}
      />
      <div>
        <p
          className="absolute top-1 left-0 lg:left-5 lg:top-5 text-white lg:text-sm text-xs text-center w-full lg:w-auto"
          style={{
            fontFamily: "'DejaVu Sans Mono', monospace",
            color: '#60ac39'
          }}
        >
          live now: cartfilling
        </p>
        <img
          src={data.song.image}
          alt={data.song.title}
          className="m-auto mb-4 lg:w-3/4 w-60"
          style={{
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 1), 0 10px 10px -5px rgba(0, 0, 0, 1)",
          }}
        />
        {data.song.title.length !== 0 ? (
          <p
            className="text-center text-white lg:text-lg text-xs p-1 mb-2"
            style={{
              fontFamily: "'DejaVu Sans Mono', monospace",
            }}
          >
            {data.song.title}
          </p>
        ) : null}
        <audio
          controls
          autoPlay
          className="w-50 m-auto"
          src="https://booth.clubindoors.com/stream"
        >
          Your browser does not support the audio tag.
        </audio>
      </div>
    </div>
  );
}


export default Song;
