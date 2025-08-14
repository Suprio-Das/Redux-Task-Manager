import { useDispatch } from 'react-redux';
import './App.css'
import { addTask } from './Redux/TaskSlice';

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
    dispatch(addTask(newTask))
    form.reset();
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
        <h2 className='text-2xl text-center font-semibold my-5'>Current TaskList</h2>
        <section className='w-3/4 mx-auto'>
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </div>
  )
}

export default App
