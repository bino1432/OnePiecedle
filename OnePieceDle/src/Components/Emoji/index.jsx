import { useNavigate } from "react-router-dom";
import './Emoji.css'

function Emoji() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Emoji</h1>

            <button onClick={() => navigate('/Classic')}>
                Classic
            </button>

            <button onClick={() => navigate('/')}>
                Home
            </button>
        </div>
    );
}

export default Emoji;