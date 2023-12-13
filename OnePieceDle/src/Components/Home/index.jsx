import { useNavigate } from 'react-router-dom';
import './Home.css'

function Home() {

    const navigate = useNavigate();

    return (
        <div>

            <h1 className='titleHome'>OnePiecedle</h1>

            <div className='btnHome'>
                <div className='btn_classico' onClick={() => navigate('/Classic')}>
                    <div className='btn_title'>Clássico</div>
                    <div className='btn_description'>Use as pistas para descobrir o personagem</div>
                </div>

                <button onClick={() => navigate('/Fala')}>
                    Fala
                </button>
            </div>
        </div>
    );
}

export default Home;