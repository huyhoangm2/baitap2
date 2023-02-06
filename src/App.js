import logo from './logo.svg';
import './App.css';
import  { useState } from 'react';

function UserForm({setName} ) {
  return (
    <div>
      Name:<input type="text" name="Name" placeholder="please enter name"
      onChange={(e) => setName(e.target.value)}/>
    </div>
  );
}
function Greeting({name}) {
  return<div>{name && `Greeting ${name}` } </div>;

}
export default function App() {
  const [name, setName] = useState("");
  

  return (
    <div>
      <UserForm setName={setName}/>
      <Greeting name={name}/>
    </div>
  );
}

