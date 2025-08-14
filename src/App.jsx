import { useDispatch } from 'react-redux';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const handleNewTaskSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.taskName.value;
    const details = form.taskDetails.value;
    const deadline = form.deadline.value;
    const newTask = { name, details, deadline };
    if (name === '' || details === '' || deadline === '') return;
    console.log(newTask)
  }
  return (
    <div>
      <h1 className='text-3xl font-semibold text-center my-3'>Task Manager</h1>
      <section>
        <h2 className='text-xl text-center'>Add New Task</h2>
        <form onSubmit={handleNewTaskSubmit}>
          <div className='flex flex-col items-center justify-center gap-5 my-3'>
            <input type="text" placeholder="Enter Task Name" className="input" name='taskName' />
            <input type="text" placeholder="Enter Task Details" className="textarea" name='taskDetails' />
            <input type="text" placeholder="Enter Deadline" className="input" name='deadline' />
            <button className='btn bg-green-500 w-xs text-black'>Add New Task</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default App
