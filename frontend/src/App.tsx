import './App.css';
import Navbar from './components/shared/Navbar.component';
import Sidebar from './components/shared/Sidebar.component';
import ItemsPage from './pages/ItemsPage';
import 'react-toastify/dist/ReactToastify.css';



const App: React.FC = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <div className="flex h-[calc(100%-48px)] justify-between md:flex-row  flex-col-reverse">
        <Sidebar />
        <div className="">
          <ItemsPage />
        </div>
      </div>
    </div>
  );
}

export default App;
