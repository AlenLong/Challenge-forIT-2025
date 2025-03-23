import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/new" element={<TaskForm />} />
        <Route path="/task/edit/:id" element={<TaskForm />} />
      </Routes>
    </Router>
  );
}

export default App;
