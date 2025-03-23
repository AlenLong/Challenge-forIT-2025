import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskItem from './components/TaskItem';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/:id" element={<TaskItem />} />
          <Route path="/task/new" element={<TaskForm />} />
          <Route path="/task/edit/:id" element={<TaskForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;