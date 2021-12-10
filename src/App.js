import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {
  // const name = 'brad'
  // const x=false
  const [tasks,setTasks] =useState([
    {
        id:1,
        text:'Food Shopping',
        day:'5th Feb at 2:30pm',
        reminder:false
    },
    {
        id:2,
        text:'Food Shopping 2',
        day:'5th Feb at 2:30pm',
        reminder:false
    },
    {
        id:3,
        text:'Food Shopping 3',
        day:'5th Feb at 2:30pm',
        reminder:false
    },
    {
        id:4,
        text:'Food Shopping 4',
        day:'5th Feb at 2:30pm',
        reminder:false
    },
    {
        id:5,
        text:'Food Shopping 5',
        day:'5th Feb at 2:30pm',
        reminder:false
    }
])
  return (
    <div className="App">
     {/* 
     step 1
     <h1>Hello World</h1>
     <h2>Hello  {x?'Yes':'No'}</h2> */}
    <Header />
    <Tasks tasks={tasks}/>
    </div>
     
  );
}

export default App;
