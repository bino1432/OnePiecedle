import { useNavigate } from "react-router-dom";
import Header from "../Header";


function Fala() {

    const navigate = useNavigate();

    return (
        <div className="bg-back h-screen flex items-center content-center flex-col text-center gap-20 p-6">
            <Header></Header>
            <h1 className="text-5xl font-bold">Fala</h1>

            <button className="border border-black p-6 rounded-lg text-3xl font-bold  bg-slate-500/50 transition duration-300  hover:bg-blue-500/50" onClick={() => navigate('/Classic')}>
                Classic
            </button>

            <button className="border  border-black rounded-lg p-6 text-3xl font-bold  bg-slate-500/50 transition duration-300  hover:bg-blue-500/50" onClick={() => navigate('/')}>
                Home
            </button>
        </div>
    );
}

export default Fala;