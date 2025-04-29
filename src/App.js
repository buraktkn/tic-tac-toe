import { useContext, useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/todo/Todo";
import FetchAPI from "./components/FetchAPI";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import User from "./components/User";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Post from "./components/Post";
import Albums from "./components/Albums";
import Album from "./components/Album";
import Erorr from "./components/Erorr";
import Formik from "./components/FormikExample";
import FormikExample from "./components/FormikExample";
import SignUp from "./components/SignUp";
import ThemeContext, { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import WeatherApp from "./components/WeatherApp";

function App() {
  const [contacts, setContacts] = useState([
    { fullname: "Burak", phoneNumber: 123 },
    { fullname: "Apo", phoneNumber: 456 },
    { fullname: "Tekin", phoneNumber: 678 },
  ]);

  // useEffect(() => {
  //   console.log(contacts);
  // }, [contacts]);

  return (
    // <div className="App">
    //   {
    //     <div className='form'>
    //     <Contact contacts={contacts}/>
    //     <Form addContact={setContacts} contacts={contacts}/>
    //     </div>
    //     <Todo/>
    //     <FetchAPI />
    //   }
    // </div>
    <ThemeProvider>
      <Router> 
      <div>
        <Navbar/>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} >
            <Route index element={<p>Select a User</p>}/>
            <Route path=":id" element={<User/>}/>
          </Route>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/post/:id" element={<Post/>}/>
          <Route path="/albums" element={<Albums/>}/>
          <Route path="/album/:id" element={<Album/>}/>
          <Route path="/formik" element={<FormikExample/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/weather-app" element={<WeatherApp/>}/>
          <Route path="*" element={<Erorr/>} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default App;
