import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/main/Main'
import Navbar from './components/nav/Navbar';


const  App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
    console.log("Adeus Mundo Cruel")
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      <Main/>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
    </div>
  );
}

export default App;
