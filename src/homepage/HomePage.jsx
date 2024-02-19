import axios from 'axios';
import { useEffect, useState } from "react";

export const HomePage = () => {

    const [books, setBooks] = useState([]);

    const [form, setForm] = useState({
        // title: '',
        // author: '',
        // category: '',
        // price: '',
        // cover: '',
        // status: ''
    });

    useEffect(() => {
        axios.get('https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books')
            .then((response) => {
                setBooks(response.data);
                console.log('books', books);
            })
            .catch(err => console.log(err));
    }, [])

    const handleFormChange = (event) => {
        setForm((prevFormData) => ({ ...prevFormData, [event.target.name]: event.target.value }))
    }

    const handleReseved = (id) => {
        if (books.status === 'true') {
            setBooks((prevFormData) => ({ ...prevFormData, [event.target.name]: event.target.value }))
        }
        axios.put(`https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books`)
            .then((response) => {
                const reservedBook = response.data;
                const filteredBooks = users.filter(book => books.id !== reservedBook.id);
                setBooks(filteredBooks);
                console.log('books', books);
            })
            .catch(err => console.log(err));

        return (
            <>
                {books.map((book) => (
                    <div key={book.id}>
                        <p className="p-style">{book.title} {book.author}, {book.category}, {book.price},{book.status}</p>
                        <button className='input midle' onClick={() => handleReseved(book.id)}>Reserved</button>
                    </div>
                ))}

            </>
        )

    }
}