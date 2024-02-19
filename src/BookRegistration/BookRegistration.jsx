import '../components/Styles/Styles.css';
import { useState } from "react";

export const BookRegistration = () => {

    const [form, setForm] = useState({
        title: '',
        author: '',
        category: '',
        price: '',
        cover: '',
        status: ''
    });

    const handleOnSubmit = (event) => {
        event.preventDefault();
        books.cover = 'https://thumb.knygos-static.lt/UZy3X0H5uPMC-OTNEzeZmgQTnOM=/fit-in/0x460/images/books/14434725/1707315681_paprasta-gaminti_1707139342.png)'

        axios.post('https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books', form)
            .then(response => {
                setUsers([...books, response.data]);
                setForm({
                    title: '',
                    author: '',
                    category: '',
                    price: '',
                    cover: '',
                    status: ''
                })
                console.log('books', books);

            })
            .catch(err => console.log(err));
    }

    const handleFormChange = (event) => {
        setForm((prevFormData) => ({ ...prevFormData, [event.target.name]: event.target.value }))
    }

    return (
        <>
            <form>
                <label className="label">Title:
                    <input className="input" type="text" minLength={2} name="title" value={form.title} onChange={handleFormChange} required />
                </label>
                <label className="label">Author:
                    <input className="input" type="text" minLength={2} name="author" value={form.author} onChange={handleFormChange} required />
                </label>
                <label className="label">Category:
                    <input className="input" type="text" minLength={2} name="category" value={form.category} onChange={handleFormChange} required />
                </label>
                <label className="label">Price:
                    <input className="input" type="number" name="price" value={form.price} onChange={handleFormChange} required />
                </label>
                <label className="label">Status:
                    <input className="input" type="boolean" name="status" value={form.status} onChange={handleFormChange} required />
                </label>

                <button className='input' type="submit">Submit</button>


            </form>
        </>

    )

}