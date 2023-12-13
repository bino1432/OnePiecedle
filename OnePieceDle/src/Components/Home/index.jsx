import { useNavigate } from 'react-router-dom';
import Header from '../Header';

function Home() {

    const navigate = useNavigate();

    return (
        <div className='bg-back h-screen p-6 items-center content-center  flex flex-col gap-40'>
            <Header></Header>

            <div className='flex flex-col text-center gap-20   '>
                <div className='border border-black rounded-lg bg-slate-500/50 transition duration-300  hover:bg-blue-500/50' onClick={() => navigate('/Classic')}>
                    <div className='text-3xl font-bold'>Clássico</div>
                    <div className='text-2xl'>Use as pistas para descobrir o personagem</div>
                </div>

                <button className='border p-6 text-3xl font-bold border-black rounded-lg bg-slate-500/50 transition duration-300  hover:bg-blue-500/50' onClick={() => navigate('/Fala')}>
                    Fala
                </button>
            </div>
        </div>
    );
}

export default Home;