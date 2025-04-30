import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null)

  const getContactsFromStorage = () => {
    const data = localStorage.getItem("contacts");
    return data ? JSON.parse(data) : [];
  };

  const [contacts, setContacts] = useState(getContactsFromStorage());
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    category: "family",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedContacts = [...contacts, { ...formData, isLike: false }];
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    setFormData({
      firstname: "",
      lastname: "",
      category: "family",
      phone: ""
    });
  };

  const toggleLike = (index) => {
    const updatedContacts = contacts.map((contact, i) =>
      i === index ? { ...contact, isLike: !contact.isLike } : contact
    );
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  const deleteItem = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  }

  // edit form
  const editForm = (e) => {
    e.preventDefault()

    const updateContact = contacts.map((contact, index) => index === editIndex ? { ...formData } : contact )

    setContacts(updateContact)
    localStorage.setItem('contacts', JSON.stringify(updateContact))
    
    setShowModal(false)
    setFormData({
      firstname: "",
      lastname: "",
      category: "family",
      phone: ""
    })

    setEditIndex(null);

  }

  // console.log(editButton());


  const editButton = (index) => {
    setShowModal(true)

    const stockEditContact = contacts[index]

    setFormData(stockEditContact)
    setEditIndex(index)


  }
  return (

    <div className="p-8 max-w-2xl mx-auto " >
      {showModal && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center">
          <form onSubmit={editForm} className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg font-bold">Edit this content</h2>
            <p className="font-mono">4-element.</p>
            <div className="form-floating mb-3">
              <input required type="text" className="form-control" value={formData.firstname} onChange={handleChange} id="firstname" name="firstname" placeholder="Alex" />
              <label htmlFor="floatingInput">Firs Name</label>
            </div>
            <div className="form-floating mb-3">
              <input required type="text" className="form-control" value={formData.lastname} onChange={handleChange} id="lastname" name="lastname" placeholder="Alexev" />
              <label htmlFor="floatingInput">Last Name</label>
            </div>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}

              className="w-full p-3 mb-3 border rounded"
            >
              <option value="family">Family</option>
              <option value="friends">Friends</option>
              <option value="relatives">Relatives</option>
              <option value="other">Other</option>
            </select>
            <div className="form-floating mb-3">
              <input required value={formData.phone} onChange={handleChange} type="text" name="phone" className="form-control" id="floatingInput" placeholder="931305077" />
              <label htmlFor="floatingInput">Phone Number</label>
            </div>

            <button type="submit" className="btn btn-success w-1/2">Submit</button>
            <button onClick={() => setShowModal(false)} className="btn btn-danger ml-3!">Close</button>
          </form>
        </div>
      )}

      <form onSubmit={handleSubmit} className=" mb-4 flex flex-wrap gap-3">
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          value={formData.firstname}
          onChange={handleChange}
          className="w-1/2 p-2 border rounded"
          required
        />
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          value={formData.lastname}
          onChange={handleChange}
          className="w-1/3 p-2 border rounded"
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-1/3 p-2 border rounded"
        >
          <option value="family">Family</option>
          <option value="friends">Friends</option>
          <option value="relatives">Relatives</option>
          <option value="other">Other</option>
        </select>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-1/2 p-2 border rounded"
          required
        />
        <button type="submit" className="w-1/3 mx-auto p-2 bg-blue-500 text-white rounded">
          Save
        </button>
      </form>
      <hr />

      {/* Cards */}
      <div className="mt-8 space-y-4">
        {contacts.map((contact, index) => (
          <div key={index} className="p-4 border rounded shadow space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">{contact.firstname} {contact.lastname}</h2>
              {contact.isLike && (
                <span className="text-red-500 font-bold">❤️</span>
              )}
            </div>
            <p>Category: {contact.category}</p>
            <p>Phone: {contact.phone}</p>
            <div className="flex justify-between">

              <button
                onClick={() => toggleLike(index)}
                className={`border-red-500 border-2 p-2 rounded-2xl ${contact.isLike ? "bg-red-500 text-white" : "bg-white text-red-500"}`}
              >
                {contact.isLike ? "Liked " : "Like "}
              </button>

              <div>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => editButton(index)}>Tahrirlash</button>

                  <button
                    type="button"
                    className="btn btn-danger "
                    onClick={() => deleteItem(index)}>O'chirish</button>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
