import { Link } from "react-router-dom";
import '../components/Styles/Styles.css';

export const NavBar = () => {

    return (
        <>
            <nav>
                <Link className="label" to="/"><button className='input midle'>Home page</button></Link>
                <Link style={{ padding: "20" }} to="/registration"><button className='input midle'>Nauja knyga</button></Link>
                <Link style={{ padding: "20" }} to="/comments"><button className='input midle'>Jūsų komentarai</button></Link>
            </nav>
        </>
    )
}