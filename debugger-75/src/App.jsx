import { useState } from "react"


function App() {
  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);

  const topla = () => {
    debugger
    const toplam = vize1 + vize2;
    return toplam;
  }

  const ortalamaBul = () => {
    debugger
    const toplam = (topla() / 2);
    yazdir(toplam);
  }

  const yazdir = (sonuc) => {
    debugger
    console.log(`Ortalama: ${sonuc}`);
  }

  return (
    <>
      <div><input type="number" value={vize1} onChange={(e) => setVize1(Number(e.target.value))}></input></div>
      <div><input type="number" value={vize2} onChange={(e) => setVize2(Number(e.target.value))}></input></div>
      <div><button onClick={ortalamaBul}>Ortalama Hesapla</button></div>
    </>
  )
}

export default App
