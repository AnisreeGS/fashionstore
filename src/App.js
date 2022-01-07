import './App.css';
import {  TextField } from '@mui/material';
import AddProducts from './pages/AddProducts';
import {Routes,Outlet,Route,Link} from 'react-router-dom' ;
import AppBar from './components/Appbar';
// import ProductsList from './pages/ProductsList';
import BasicTable from './pages/Table';
// import {createData,descendingComparator,getComparator,stableSort,EnhancedTableHead} from './pages/ProductTable';

function App() {
  return (
    <div className="App">    
       <Routes>
        <Route path="/" element={<AppBar/>}>
        <Route path="/addproducts" element={<AddProducts/>}/>
        <Route path="/productslist" element={<BasicTable/>}/>
        </Route>
      </Routes>  
    </div>
  );
}

export default App;



