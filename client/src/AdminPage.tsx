import React, { useState } from 'react'
import { useQuery, useMutation } from 'react-query'
import { SongType } from './types'

function AdminPage() {
  const { data, status } = useQuery<{ song: SongType }>(
    'song',
    () => fetch('/api/song').then((res) => res.json()),
  )

  if (status === 'loading') {
    return <p>Loading</p>
  }

  if (status === 'error') {
    return <p>An error occurred</p>
  }
  if (data === undefined) {
    return <p>An error occurred</p>
  }

  return <SongForm defaultSong={data.song} />
}
const SongForm = ({ defaultSong }: { defaultSong: SongType }) => {
  const [song, setSong] = useState<SongType>(defaultSong)
  const mutation = useMutation(() => {
    return fetch('/api/song',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ song: song })
      }
    )
  })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    mutation.mutate()
  }

  return (
    <form onSubmit={onSubmit}>
      <label className="block mb-1" htmlFor="title">Title</label>
      <input className="w-full mb-1" required type="text" id="title" value={song.title} onChange={(e) => setSong({ ...song, title: e.target.value })} />
      <label className="block mb-1" htmlFor="image">Image</label>
      <input className="w-full mb-1" required type="text" id="image" value={song.image} onChange={(e) => setSong({ ...song, image: e.target.value })} />
      <label className="block mb-1" htmlFor="description">Description</label>
      <textarea className="w-full mb-1" required id="description" value={song.description} onChange={(e) => setSong({ ...song, description: e.target.value })} />
      <button className="block">Submit</button>
    </form>
  )
}

export default AdminPage