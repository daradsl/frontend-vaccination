import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";

const Router = () => {
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout/>}>
					<Route element={<Home/>} index />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;