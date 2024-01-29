import React, {useState} from 'react'
import { Toaster } from 'react-hot-toast'
import './index.js'
import ScottBui from './components/ScottBui.jsx'
import SkyeGee from './components/SkyeGee.jsx'

const App = () => {
  const [selectedProfile, setSelectedProfile] = useState('Scott')

  const handleProfile1 = () => {
    setSelectedProfile('Scott');
  }

  const handleProfile2 = () => {
    setSelectedProfile('SkyeGee');
  }

  return (
    <div className='bg-mamba bg-dgray min-h-screen font-poppins'>
      <Toaster/>
      <div className='flex justify-center pt-4'>
        <label className='relative inline-flex cursor-pointer rounded-md bg-rblack p-1'>
          <span
            className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm
            ${selectedProfile === 'Scott' ? 'text-primary bg-gray' : 'text-body-color'}`}
            onClick ={handleProfile1}
          >
            Scott Bui
          </span>
          <span
            className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm
            ${selectedProfile === 'SkyeGee' ? 'text-primary bg-pink' : 'text-body-color'}`}
            onClick ={handleProfile2}
          >
            SkyeGee
          </span>
        </label>
      </div>
      {selectedProfile === 'Scott' && <ScottBui/>}
      {selectedProfile === 'SkyeGee' && <SkyeGee/>}
    </div>
  )
}

export default App