import { useState } from "react"

export const App = () => {
  const [real, setReal] = useState<number>(100);
  const [dolar, setDolar] = useState<number>(5);
  const [result, setResult] = useState<number>(real/dolar);

  const handleChange = (num:number, field:string) => {
    if(field === "real"){
      setReal(num);
    }
    if(field === "dolar"){
      setDolar(num);
    }
    setResult(num/dolar);
  }

  return (<>
    <label htmlFor="real">Real</label><br/>
    <input value={real} onChange={e => handleChange(Number(e.target.value), "real")} type="number" name="real" id="real" /><br/><br/>

    <label htmlFor="dolar">Cotação do Dólar</label><br/>
    <input value={dolar} onChange={e => handleChange(Number(e.target.value), "dolar")} type="number" name="dolar" id="dolar" />
    
    <div><h1>${result}</h1></div>
  </>)
}