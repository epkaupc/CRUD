import { useEffect } from 'react';
import supabase from '../../lib/supabase.js'
import Editbooks from './Editbooks.jsx'


async function fetchBookmarks(setBookmarks) {
  useEffect(() => {
      
      const { data, error } = supabase  
        .from('bookmarks')
        .select('*')
      if (error) {
        console.error('Erro ao buscar bookmarks:', error)
      } else {
        setBookmarks(data)
      }
    })

  fetchBookmarks(setBookmarks);
};
    
export function BookmarkList({ bookmarks = [], onEdit }) {
  if (bookmarks.length === 0) return null

  return (
    supabase.from('bookmarks').select('id, title, url'),
  <ul className="bklist">
    fechBookmarks();
      {bookmarks.map(bookmark => (
        <li key={bookmark.id}>
          <a
            href={bookmark.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {bookmark.title}
          </a>

          <Editbooks
            id={bookmark.id}
            onEdit={onEdit}
          />
        </li>
      ))}
    </ul>
  )
}
