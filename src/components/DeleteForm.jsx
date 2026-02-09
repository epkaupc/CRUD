
    function DeleteForm({ onDelete }) {
      const handleDelete = (e) => {
        e.preventDefault();
        onDelete();
      };

    return (
        <form onSubmit={handleDelete} className="delete-form">
            <button type="submit" className="delete-button">Delete All Bookmarks</button>
        </form>
    );
    }
    export default DeleteForm;
















