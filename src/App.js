import { useEffect, useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Form from './components/Form';
import Todo from './components/todo/Todo';

function App() {
  const [contacts, setContacts]=useState([
    {fullname:'Burak',
      phoneNumber:123 
     },
     {fullname:'Apo',
       phoneNumber:456 
     },
     {fullname:'Tekin',
       phoneNumber:678 
     }
  ])

  useEffect(()=>{
    console.log(contacts);
  },[contacts])
  
  return (
    <div className="App">
       {/* <div className='form'>
       <Contact contacts={contacts}/>
       <Form addContact={setContacts} contacts={contacts}/>
       </div> */}

       <Todo/>
    </div>
  );
} 
  
export default App;
