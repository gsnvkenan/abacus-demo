import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)
  const [A_1,setA_1]=useState(10);   const [A_2,setA_2]=useState(10);   const [A_3,setA_3]=useState(10)
  const [B_1, setB_1]=useState(10);  const [B_2, setB_2]=useState(10);  const [B_3, setB_3]=useState(10); 

  const ballIncreaseA=(n)=>{
    setCountA(n+countA)
  }
  const ballIncreaseB=(n)=>{
    setCountB(n+countB)
  }
  const ballDecreaseA=(n)=>{
    setCountA(countA-n)
  }
  const ballDecreaseB=(n)=>{
    setCountB(countB-n)
  }



  return (
    <>
      <div className='body'>
        <h1 className='aCount'>{countA}</h1>    
          <div className='abacus'>
            <div className='abac-center'>
              <div className='abac-top'>
                
                <div className='balls'>
                {Array.from({ length: A_1 }).map((_, key) => (
                        <div key= {key} className='ball'onClick={()=>{ballIncreaseA(5);setA_1(A_1-1)}} ></div>
                ))}
                  <div className='ball-left'>
                    {Array.from({ length: 10-A_1 }).map((_, key) => (
                        <div key= {key} className='ball2'onClick={()=>{ballDecreaseA(5);setA_1(A_1+1)}} ></div>
                ))}
                  </div>
                </div>


                <div className='balls'>
                {Array.from({ length: A_2 }).map((_, key) => (
                        <div key= {key} className='ball'onClick={()=>{ballIncreaseA(10);setA_2(A_2-1)}} ></div>
                ))}

                <div className='ball-left'>
                    {Array.from({ length: 10-A_2 }).map((_, key) => (
                        <div key= {key} className='ball2'onClick={()=>{ballDecreaseA(10);setA_2(A_2+1)}} ></div>
                ))}
                  </div>
                </div>



                <div className='balls'>
                {Array.from({ length: A_3 }).map((_, key) => (
                        <div key= {key} className='ball'onClick={()=>{ballIncreaseA(100);setA_3(A_3-1)}} ></div>
                ))}
                <div className='ball-left'>
                    {Array.from({ length: 10-A_3 }).map((_, key) => (
                        <div key= {key} className='ball2'onClick={()=>{ballDecreaseA(100);setA_3(A_3+1)}} ></div>
                ))}
                  </div>
                </div>
              </div>





              <div className='abac-bottom'>


                <div className='balls'>
                {Array.from({ length: B_1 }).map((_, key) => (
                        <div key= {key} className='ball'onClick={()=>{ballIncreaseB(5);setB_1(B_1-1)}} ></div>
                ))}
                  <div className='ball-left'>
                    {Array.from({ length: 10-B_1 }).map((_, key) => (
                        <div key= {key} className='ball2'onClick={()=>{ballDecreaseB(5);setB_1(B_1+1)}} ></div>
                ))}
                  </div>
                </div>


                <div className='balls'>
                {Array.from({ length: B_2 }).map((_, key) => (
                        <div key= {key} className='ball'onClick={()=>{ballIncreaseB(10);setB_2(B_2-1)}} ></div>
                ))}

                <div className='ball-left'>
                    {Array.from({ length: 10-B_2 }).map((_, key) => (
                        <div key= {key} className='ball2'onClick={()=>{ballDecreaseB(10);setB_2(B_2+1)}} ></div>
                ))}
                  </div>
                </div>



                <div className='balls'>
                {Array.from({ length: B_3 }).map((_, key) => (
                        <div key= {key} className='ball'onClick={()=>{ballIncreaseB(100);setB_3(B_3-1)}} ></div>
                ))}
                <div className='ball-left'>
                    {Array.from({ length: 10-B_3 }).map((_, key) => (
                        <div key= {key} className='ball2'onClick={()=>{ballDecreaseB(100);setB_3(B_3+1)}} ></div>
                ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        <h1 className='bCount'>{countB}</h1>  
      </div>
    </>
  )
}

export default App
