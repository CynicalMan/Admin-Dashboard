import './App.css';
import Navbar from './components/shared/Navbar.component';
import Sidebar from './components/shared/Sidebar.component';
import ItemsPage from './pages/ItemsPage';
import 'react-toastify/dist/ReactToastify.css';



const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex md:flex-row flex-col-reverse">
        <Sidebar />
        <div className="">
          <ItemsPage />
        </div>
      </div>
    </>
  );
}

export default App;
