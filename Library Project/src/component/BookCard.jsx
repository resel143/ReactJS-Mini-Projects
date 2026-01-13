const BookCard = ({ book, onSuccess, onEdit }) => {

    const handleDelete = () => {
        fetch('http://127.0.0.1:8000/api/books/delete',{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
            }),
        })
        .then((res)=> res.json())
        .then((res)=> onSuccess())
        .catch(err => console.error(err))
    }


  return (
    <div
      className="group relative rounded-2xl bg-gradient-to-br from-white via-blue-50 to-indigo-50 
                 border border-blue-200 shadow-md hover:shadow-2xl 
                 hover:-translate-y-1 hover:scale-[1.015] transition-all duration-300"
    >
      {/* Accent Bar */}
      <div className="h-2 rounded-t-2xl bg-gradient-to-r from-indigo-600 to-blue-500" />

      <div className="p-6">
        <h2 className="text-xl font-bold text-indigo-900 group-hover:text-blue-700 transition">
          {book.title}
        </h2>
        <p className="text-sm text-blue-600 mb-4">
          by {book.author}
        </p>

        {/* Meta */}
        <div className="space-y-2 text-sm text-slate-700">
          <p><span className="font-medium text-indigo-800">Genre:</span> {book.genre}</p>
          <p><span className="font-medium text-indigo-800">Publisher:</span> {book.publisher}</p>
          <p><span className="font-medium text-indigo-800">Language:</span> {book.language}</p>
          <p><span className="font-medium text-indigo-800">Pages:</span> {book.pages}</p>
          <p><span className="font-medium text-indigo-800">Rating:</span> ⭐ {book.rating}</p>
          <p><span className="font-medium text-indigo-800">Price:</span> ₹{book.price}</p>
        </div>

        {/* Status */}
        <div className="mt-4">
          {book.available ? (
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 ring-1 ring-blue-200">
              Available
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700 ring-1 ring-red-200">
              Not Available
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button   onClick={() => onEdit(book)} className="px-4 py-2 text-sm font-medium rounded-md border border-indigo-300 text-indigo-700 hover:bg-indigo-50 transition">
            Edit
          </button>
          <button onClick={() => handleDelete()} className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
