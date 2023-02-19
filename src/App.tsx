import { useState } from 'react'
import ColorfulGlassBlurSection from './sections/ColorfulGlassBlurSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <ColorfulGlassBlurSection />
    </div>
  )
}

export default App
