import './App.css';
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Customers } from './Customers'
import { CustomerDetails } from './CustomerDetails';


export const DataContext = React.createContext();
function App() {
  const [data, setData] = useState([]);
  
    const getCustomersListFromApiAsync = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/93a7ac54-14e7-43a0-8a8d-8e3821cf74d0");
          // console.log(response)
          const json = await response.json();
          setData(json);
          return json;
        } catch (error) {
          console.error(error);
          setData([]);
        } 
      };
  
  useEffect(() => {
      getCustomersListFromApiAsync();
  }, []); 

 const countActiveUsers = () => {
  return data.filter(x => x.isActive === true).length;
 }
 
  const [count, setCount] = useState(0);
  
  const handleToggle = (id) => {
    let mapped = data.map(x => { return x._id == id ? { ...x, isActive: !x.isActive}: {...x};
    });
    setData(mapped);
  }

  return (
    <DataContext.Provider value={data}>
          <div>
            <h1>User Manegment [{count + countActiveUsers()} active users]</h1>
            <Routes>
              <Route path="/customers" element={<Customers num={count} setCount={setCount} data={data} handleToggle={handleToggle} />}/>
              <Route path={'/customer'} element={<CustomerDetails />}/>
            </Routes>    
        </div>
    </DataContext.Provider> 
  );
}
export default App;
