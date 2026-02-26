import { useEffect, useRef, useState } from "react"
import Button from "./components/button"
import Input from "./components/input"
import { VolumeUpFill, VolumeMuteFill } from 'react-bootstrap-icons';


const characters = ["Zim", "Gir"];
const musics = ["agadoo", "chicken"];

function App() {
  const [resp, setResp] = useState("");
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [curCharacter, setCurCharacter] = useState("");
  const [curMusic, setCurMusic] = useState("");
  const res = [val1, val2];

  useEffect(() => {
    toggleMute(),
    setCurCharacter(
      characters[Math.floor(Math.random() * characters.length)]
    );
    setCurMusic(
      musics[Math.floor(Math.random() * musics.length)]
    );
  }, [])
  
  const handleChangeVal1 = (e:any) => {
    setVal1(e.target.value);
  }
  
  const handleChangeVal2 = (e:any) => {
    setVal2(e.target.value);
  }

  const handleChoice = () => {
    if (val1 == "" || val2 == "") {
      setResp("");
      return;
    }
    let rand = Math.floor(Math.random() * res.length);
    setResp(res[rand])
  }

   const [isMuted, setIsMuted] = useState(false);
   const audioRef = useRef<HTMLAudioElement | null>(null);
   const toggleMute = () => {
     setIsMuted(!isMuted);
   };

   const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);
  

  return (
    <div className="w-screen flex flex-col items-center justify-center">

      <audio loop preload="none" muted={isMuted} ref={audioRef}>
        <source src={`/audios/${curMusic}.mp4`} type="audio/mpeg"/>
        <source src={`/audios/${curMusic}.ogg`} type="audio/ogg"/>
        <source src={`/audios/${curMusic}.wav`} type="audio/wav"/>
      </audio>
      
      <button onClick={() => {playAudio(), toggleMute()}} className="fixed top-2 left-2 sm:top-4 sm:left-4 cursor-pointer p-2 opacity-70 hover:opacity-100 transition duration-300 ease-in-out">
        {isMuted ? 
          <VolumeMuteFill size={32} className="text-ocean-dark"/> : 
          <VolumeUpFill size={32} className="text-ocean-dark"/>
        }
      </button>

      <div className="flex flex-col min-h-screen justify-center items-center p-4 gap-5 w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%]">
        <img src={`${curCharacter}.gif`} alt='' className=" mt-5 w-[120px] sm:w-[160px] md:w-[200px] mb-2 select-none"/>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-ocean-dark font-extrabold text-xl sm:text-2xl md:text-3xl capitalize text-center">{curCharacter} Escolha Por Mim!</h1>
          <h6>coloque a baixo as opções</h6>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center mt-6 w-full">
          <Input placeholder="Opção 1" onChange={handleChangeVal1} value={val1}/>
          <span className="text-xl font-bold text-ocean-dark">ou</span>
          <Input placeholder="Opção 2" onChange={handleChangeVal2} value={val2}/>
        </div>
        <Button text="escolher" width="200" onClick={handleChoice}/>
        <div className="p-4 flex justify-center items-center w-[100%]">
          { resp &&
          <div className="border-solid border-4 w-full max-w-xl border-ocean-dark p-4 rounded-xl flex flex-row items-center justify-center gap-2 text-center">
            <h1 className="text-ocean-dark font-bold text-xl">{curCharacter} Escolheu: </h1>
            <h1 className="text-ocean-dark font-extrabold text-xl uppercase">{resp}</h1>
          </div>
          }
        </div>

        <div className="w-screen flex flex-col items-center justify-center absolute bottom-0">
          <span>criado por <a href="https://github.com/pedroma193" target="_blank" rel="noopener noreferrer" className="underline text-ocean-dark cursor-pointer">Pedro</a></span>
        </div>
      </div>
    </div>
  )
}

export default App
