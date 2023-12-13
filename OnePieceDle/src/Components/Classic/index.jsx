import { useNavigate } from 'react-router-dom';
import Header from '../Header';


function Classic() {

    const navigate = useNavigate();

    return(
        <div className='bg-back h-screen p-6 items-center content-center flex flex-col gap-20 text-center'>
            <Header></Header>

            <h1 className='text-5xl font-bold'>Classic</h1>

            <button className='border p-6 border-black rounded-lg text-3xl font-bold  bg-slate-500/50 transition duration-300  hover:bg-blue-500/50' onClick={() => navigate('/Fala')}>
                Fala
            </button>

            <button className='border p-6 border-black rounded-lg text-3xl font-bold  bg-slate-500/50 transition duration-300  hover:bg-blue-500/50' onClick={() => navigate('/')}>
                Home
            </button>

        </div>
    )
}

export default Classic;