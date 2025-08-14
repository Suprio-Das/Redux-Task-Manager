import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { addTask, deleteTask, doneTask } from './Redux/TaskSlice';

function App() {
  const tasks = useSelector((state) => state.task)
  const dispatch = useDispatch();
  const handleNewTaskSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.taskName.value;
    const details = form.taskDetails.value;
    const deadline = form.deadline.value;
    const newTask = { name, details, deadline };
    if (name === '' || details === '' || deadline === '') return;
    dispatch(addTask(newTask))
    form.reset();
  }
  console.log(tasks)
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
        <h2 className='text-2xl text-center font-semibold my-5'>Current TaskList</h2>
        <section className='w-3/4 mx-auto'>
          {
            tasks.length > 0 ?
              <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Details</th>
                      <th>Deadline</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      tasks.map((task, index) => <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{task.name}</td>
                        <td>{task.details}</td>
                        <td>{task.deadline}</td>
                        <td>
                          <button onClick={() => dispatch(doneTask(task.id))} className='btn btn-success btn-xs me-2'>{task.done === true ? "Done" : "Mark Done"}</button>
                          <button onClick={() => dispatch(deleteTask(task.id))} className='btn btn-error btn-xs'>Delete</button>
                        </td>
                      </tr>)
                    }
                  </tbody>
                </table>
              </div> : "No TASKS YET!!!"
          }
        </section>
      </section>
    </div>
  )
}

export default App
