import { useNavigate } from 'react-router-dom';
import './Classic.css'

function Classic() {

    const navigate = useNavigate();

    return(
        <div>

            <h1>Classic</h1>

            <button onClick={() => navigate('/Fala')}>
                Fala
            </button>

            <button onClick={() => navigate('/')}>
                Home
            </button>

        </div>
    )
}

export default Classic;