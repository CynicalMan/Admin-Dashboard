import './App.css';
import Navbar from './components/shared/Navbar.component';
import Sidebar from './components/shared/Sidebar.component';
import ItemsPage from './pages/ItemsPage';
import 'react-toastify/dist/ReactToastify.css';



const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="position-relative flex  justify-between  md:flex-row md:justify-normal  flex-col-reverse">
        <Sidebar />
        <ItemsPage />
      </div>
    </>
  );
}

export default App;
