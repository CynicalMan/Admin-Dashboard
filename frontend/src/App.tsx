import './App.css';
import Navbar from './components/shared/Navbar.component';
import Sidebar from './components/shared/Sidebar.component';
import Home from './views/Home';


function App() {
  return (
    <>
      <Navbar />
      <div className="flex mt-2">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
