
import { useEffect, useState } from 'react'

export default function BookmarkForm({ onAdd, onEdit, editing }) {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    if (editing) {
      setTitle(editing.title)
      setUrl(editing.url)
    }
  }, [editing])
  
function handleSubmit(e) {
    e.preventDefault()

    if (editing) {
      onEdit({ id: editing.id, title, url })
    } else {
      onAdd({ title, url })
    }

    setTitle('')
    setUrl('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Nome"
      />
      <input
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="Link"
      />
      <button>
        {editing ? "Salvar" : "Adicionar"}
      </button>
    </form>
  )
}