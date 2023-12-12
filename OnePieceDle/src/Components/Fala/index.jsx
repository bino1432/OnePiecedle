import { useNavigate } from "react-router-dom";
import './Fala.css'

function Fala() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Fala</h1>

            <button onClick={() => navigate('/Classic')}>
                Classic
            </button>

            <button onClick={() => navigate('/')}>
                Home
            </button>
        </div>
    );
}

export default Fala;