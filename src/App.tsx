import { useState } from "react"
import Button from "./components/button"
import Input from "./components/input"

function App() {
  const [resp, setResp] = useState("");
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const res = [val1, val2];

  const handleChangeVal1 = (e:any) => {
    setVal1(e.target.value);
  }
  
  const handleChangeVal2 = (e:any) => {
    setVal2(e.target.value);
  }

  const handleChoice = () => {
    let rand = Math.floor(Math.random() * (2 - 0) + 0);
    setResp(res[rand])
  }

  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col h-screen justify-center w-[40%] items-center p-4 gap-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-ocean-dark font-extrabold text-3xl capitalize"> Escolha Por Mim!</h1>
          <h6>coloque a baixo as opções</h6>
        </div>
        <div className="flex flex-row gap-4 items-center mt-10">
          <Input placeholder="Valor 1" onChange={handleChangeVal1} value={val1}/>
          <span className="text-xl font-bold text-ocean-dark">ou</span>
          <Input placeholder="Valor 2" onChange={handleChangeVal2} value={val2}/>
        </div>
        <Button text="escolher" width="200" onClick={handleChoice}/>
        { resp &&
        <div className="border-solid border-4 w-[100%] border-ocean-dark p-4 rounded-xl flex flex-row items-center justify-center gap-2 text-center">
          <h1 className="text-ocean-dark font-bold text-xl">Escolhido: </h1>
          <h1 className="text-ocean-dark font-extrabold text-xl uppercase">{resp}</h1>
        </div>
        }
      </div>
    </div>
  )
}

export default App
