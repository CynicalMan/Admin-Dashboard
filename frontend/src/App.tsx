import './App.css';
import Navbar from './components/shared/Navbar.component';
import Sidebar from './components/shared/Sidebar.component';
import ItemsPage from './pages/ItemsPage';


const App: React.FC = () => {
  console.log(
    "hghjgjh"
  );
  
  return (
    <>
      <Navbar />
      <div className="flex mt-2">
        <Sidebar />
        <div className="mx-auto mt-1">
          <ItemsPage />
        </div>
      </div>
    </>
  );
}

export default App;
