import { useEffect, useState } from "react";

const EditBookModal = ({ isOpen, onClose, book }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    published_date: "",
    genre: "",
    isbn: "",
    price: "",
    rating: "",
    pages: "",
    language: "",
    publisher: "",
    available: true,
  });

  // 🔥 Prefill form when modal opens
  useEffect(() => {
    if (book) {
      setFormData({
        title: book.title || "",
        author: book.author || "",
        published_date: book.published_date || "",
        genre: book.genre || "",
        isbn: book.isbn || "",
        price: book.price || "",
        rating: book.rating || "",
        pages: book.pages || "",
        language: book.language || "",
        publisher: book.publisher || "",
        available: book.available ?? true,
      });
    }
  }, [book]);

  if (!isOpen || !book) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUpdate = () => {
    const payload = {
      id: book.id, // 🔥 REQUIRED FOR UPDATE
      title: String(formData.title),
      author: String(formData.author),
      published_date: String(formData.published_date),
      genre: String(formData.genre),
      isbn: String(formData.isbn),
      price: Number(formData.price),
      rating: Number(formData.rating),
      pages: Number(formData.pages),
      language: String(formData.language),
      publisher: String(formData.publisher),
      available: Boolean(formData.available),
    };

    console.log("Update Payload:", payload);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-white rounded-2xl p-6 shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-indigo-800">
            Edit Book
          </h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="input" />
          <input name="author" value={formData.author} onChange={handleChange} placeholder="Author" className="input" />
          <input type="date" name="published_date" value={formData.published_date} onChange={handleChange} className="input" />
          <input name="genre" value={formData.genre} onChange={handleChange} placeholder="Genre" className="input" />
          <input name="isbn" value={formData.isbn} onChange={handleChange} placeholder="ISBN" className="input" />
          <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="input" />
          <input type="number" name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating" className="input" />
          <input type="number" name="pages" value={formData.pages} onChange={handleChange} placeholder="Pages" className="input" />
          <input name="language" value={formData.language} onChange={handleChange} placeholder="Language" className="input" />
          <input name="publisher" value={formData.publisher} onChange={handleChange} placeholder="Publisher" className="input" />
        </div>

        {/* Available */}
        <div className="mt-4 flex items-center gap-2">
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
          />
          <label>Available</label>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 border rounded-md">
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="px-6 py-2 bg-indigo-600 text-white rounded-md"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBookModal;
