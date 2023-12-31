import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./routes/Signup.js";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route
          path="/login"
          element={
            <div>
              테스트용 임시 login화면임. <Link to="/">회원가입으로</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
