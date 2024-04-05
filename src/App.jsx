import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Course } from './Components/Course'

import { CreatePlan } from './Components/CreatePlan'

import { LearningPath } from './Components/LearningPath'
import { Topics } from './Components/Topics'

function App() {


  return (

    <div className='flex justify-center items-center h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/course' element={<Course />} />
          <Route path='/plan' element={< CreatePlan/>} />
          <Route path='/learningpath' element={< LearningPath/>} />
          <Route path='/topics' element={< Topics/>} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
