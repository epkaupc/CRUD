import Editbooks from './Editbooks.jsx'

export function BookmarkList({ bookmarks = [], onEdit }) {
  if (bookmarks.length === 0) return null

  return (
    <ul className="bklist">
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
