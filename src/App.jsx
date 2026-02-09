import { useState } from 'react'
import './App.css'
import BookmarkForm from './components/BookmarkForm.jsx'
import { BookmarkList } from './components/BookmarkList.jsx'
import DeleteForm from '../src/components/DeleteForm.jsx'

const user = { id: "90a2d637-8d2f-4c51-813c-cb8401aad7e5" }

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [editingId, setEditingId] = useState(null)


function addBookmark(bookmark) {
  const sql = `INSERT INTO bookmarks (title, url, user_id) VALUES (?, ?, ?)`
  setBookmarks(prev => [
    ...prev,
    { ...bookmark, id: Date.now() }
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
/>
    </div>
  )
}

export default App
