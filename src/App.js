import {useState} from 'react'
import Navbar from './components/navbar/Navbar';

const App = () => {

  const [sidebarAction, setSidebarAction] = useState(false);

  const actionSidebar = () => {
    setSidebarAction(!setSidebarAction);
  }

  return (
    <div className="container">
      <Navbar sidebarAction={sidebarAction} actionSidebar={actionSidebar}/>
      <h1>React Dashboard</h1>
    </div>
  );
}

export default App;
