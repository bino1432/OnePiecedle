import { useNavigate } from 'react-router-dom';
import './Home.css'

function Home() {

    const navigate = useNavigate();

    return (
        <div>

            <h1 className='titleHome'>OnePiecedle</h1>

            <div className='btnHome'>
            <button onClick={() => navigate('/Classic')}>
                Classic
            </button>

            <button onClick={() => navigate('/Fala')}>
                Fala
            </button>
            </div>
        </div>
    );
}

export default Home;