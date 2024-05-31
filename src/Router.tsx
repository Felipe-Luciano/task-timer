import {Routes, Route} from 'react-router-dom'
import { HomePage } from './pages/Homepage'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />} >
                <Route path='/' element={<HomePage />}/>
                <Route path='history' element={<History />}/> 
            </Route>
        </Routes>
    )
}