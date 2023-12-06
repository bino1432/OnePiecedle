import { useNavigate } from 'react-router-dom';
import  './Home.css'

function Home(){

    const navigate = useNavigate();
    
    return (
        <div>

            <h1>Home</h1>

            <button onClick={() => navigate('/Classic')}>
                Classic
            </button>

            <button onClick={() => navigate('/Emoji')}>
                Emoji
            </button>
        </div>
    );
}

export default Home;