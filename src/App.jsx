import './App.css'
import Egn from './EGN'
import Inbox from './Inbox/Inbox'
import Inallchat from './Inbox/InboxCOMPO/InAllChat'
import Inchat from './Inbox/InboxCOMPO/InChat'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <main className='maincontainer'>
        <Router>
          <Egn />
          <Routes>
            <Route path="/inbox" element={<Inbox />} >
              <Route path='' element={<Inallchat />} />
              <Route path='bin' element={<Inallchat />} />
              <Route path='chat' element={<Inchat />} />
            </Route>
          </Routes>
        </Router>
      </main>
    </>
  )
}