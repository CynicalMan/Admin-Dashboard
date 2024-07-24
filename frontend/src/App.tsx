import './App.css';
import Navbar from './components/shared/Navbar.component';
import Sidebar from './components/shared/Sidebar.component';
import ItemsPage from './pages/ItemsPage';
import 'react-toastify/dist/ReactToastify.css';



const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full bg-white">
          <ItemsPage />
          {/* <ThemePicker/> */}
        </div>
      </div>
    </>
  );
}

export default App;
