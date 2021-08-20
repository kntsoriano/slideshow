import React from 'react'
import { useQuery } from 'react-query'
import { SongType } from './types'

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
      className="w-full md:w-4/5 bg-contain bg-no-repeat bg-center bg-black relative h-screen/2 md:h-auto"
      style={{ backgroundImage: `url('${data.song.image}')` }}
    >
      {data.song.title.length !== 0 ? (
        <p className="absolute top-0 left-0 lg:top-5 lg:left-5 text-white text-sm lg:text-xl bg-black p-2 text-center w-full lg:w-auto">
          ▶️ {data.song.title}
        </p>
      ) : null}

      {data.song.description.length !== 0 ? (
        <p className="absolute bottom-0 left-0 lg:bottom-5 lg:left-5 text-white text-sm lg:text-2xl bg-black text-center p-2 w-full lg:w-auto">
          {data.song.description}
        </p>
      ) : null }
    </div>
  )
}


export default Song;