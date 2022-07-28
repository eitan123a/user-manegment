import React, {useContext} from 'react';
import { Headers } from './Headers.js'
import { DataContext } from './App.js'
import { Link } from 'react-router-dom';
import { ActiveToggle } from './ActiveToggle.js'
import { Digest } from './Digest.js'

export const Customers = ({num, setCount, handleToggle}) => {
    const data = useContext(DataContext);


  
    return (
        <tbody id="table">
            <Headers />
              {data.map((x, index) => 
                    <tr 
                      key={x._id}
                      className={`customers_row ${x.isActive === false ? "strike" : "regular"}`}
                      style={{}}
                      // onClick={} 
                    >
                        <td><ActiveToggle value={x.isActive} num={num} setCount={setCount} x={x} handleToggle={handleToggle}/></td>
                        <td>{x.name.first}</td>
                        <td>{x.name.last}</td>
                        <td>{x.address.split(',')[1] + ', ' + x.address.split(',')[2]}</td>
                        <td>{x.company}</td>
                        <td><Digest first={x.name.first} last={x.name.last}/></td>
                        <td>
                          <Link to={`/customer?id=${x._id}`}>here</Link>
                        </td>
                    </tr>
                    

                )}
        </tbody>

    )
}


/* <td>{x._id}</td>
                      <td>{x.index}</td>
                      <td>{x.guid}</td>
                      <td>{x.balance}</td>
                      <td>{x.picture}</td>
                      <td>{x.age}</td>
                      <td>{x.eyeColor}</td>
                      <td>{x.email}</td>
                      <td>{x.phone}</td>
                      <td>{x.about}</td>
                      <td>{x.registered}</td>
                      <td>{x.latitude}</td>
                      <td>{x.longitude}</td>
                      <td><ul>{x.tags.map(t => <li>{t}</li>)}</ul></td>
                      <td>{x.range}</td>
                      <td>
                        <ul>
                          {x.friends.map(f => <li key={f.id}>{f.name}</li>)}
                        </ul>
                      </td>
                      <td>{x.greeting}</td>
                      <td>{x.favoriteFruit}</td> */