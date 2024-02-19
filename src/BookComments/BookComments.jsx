import '../components/Styles/Styles.css';

export const BookComments = () => {

    const HandleOnSubmit = () => {
        var name = this.state.name;
        // event.preventDefault();
        alert("Ačiū," + { name } + ", jūsų atsiliepimą gavome.")
    }

    return (
        <>
            <h3>Komentarai apie knygą</h3>
            <form>
                <label className="label">Jūsų vardas:
                    <input className="input" type="text" minLength={2} name="name" onChange={HandleOnSubmit} />
                </label>
                <label className="label">Knygos pavadinimas:
                    <input className="input" type="text" minLength={2} name="title" onChange={HandleOnSubmit} />
                </label>
                <label className="label">Komentaras:
                    <input className="input" type="text" minLength={5} name="comments" onChange={HandleOnSubmit} />
                </label>
                <button className="input" type="submit" onSubmit={HandleOnSubmit}>Submit</button>
            </form>

        </>
    )
}