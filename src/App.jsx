import { useState } from 'react'
import './App.css'
import BookmarkForm from './assets/components/BookmarkForm.jsx'
import { BookmarkList } from './assets/components/BookmarkList.jsx'
import DeleteForm from './assets/components/DeleteForm.jsx'
import { supabase } from './lib/supabase.js'

const user = { id: "90a2d637-8d2f-4c51-813c-cb8401aad7e5" }

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [editingId, setEditingId] = useState(null)


function addBookmark(bookmark) {
  supabase
    .from('bookmarks')
    .insert([
      {
        user_id: user.id,
        title: bookmark.title,
        url: bookmark.url
      } 
    ])
    .select()
    .then(({ data, error }) => {
      if (error) {
        console.error('Erro ao adicionar bookmark:', error)
      } else {
        const newBookmark = data[0]
        setBookmarks(prev => [...prev, newBookmark])
      }
    })
  setBookmarks(prev => [
    ...prev,
    { ...bookmark, id: Date.now() 
    }
  ])
}

function deleteAll() {
  setBookmarks([])
}

function startEdit(id) {
  setEditingId(id)
}

function saveEdit(updated)
{
  supabase
    .from('bookmarks')
    .update([
      {
        user_id: user.id,
        title: updated.title,
        url: updated.url
      } 
    ])

  setBookmarks(prev =>
    prev.map(b =>
      b.id === updated.id ? updated : b
    )
  )
  setEditingId(null)
}

const editingBookmark = bookmarks.find(b => b.id === editingId)

  return (
    <div>
    
      <DeleteForm onDelete={deleteAll} />

      <BookmarkForm
        onAdd={addBookmark}
        onEdit={saveEdit}
        editing={editingBookmark}
      />

{editingId && <p>Editando ID: {editingId}</p>}

     <BookmarkList
  bookmarks={bookmarks}
  onEdit={startEdit}
  supabase={supabase}
/>
    </div>
  )
}

export default App
