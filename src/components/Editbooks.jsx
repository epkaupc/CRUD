


function Editbooks({ id, onEdit }) {

  return (
    <button
      type="button"
      className="edit-button"
      onClick={() => onEdit(id)}
    >
      Edit
    </button>
  )
}

export default Editbooks