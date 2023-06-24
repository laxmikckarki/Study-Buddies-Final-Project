import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterPage from "./pages/Register";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/register" element={<RegisterPage />} />
		<Route path="/login" element={<Login />} />
	</Routes>
);

export default App;
