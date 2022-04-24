import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const Router = () => {
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout/>}>
					<Route element={<Home/>} index />
					<Route path='/listAppointments' element={<ListAppointments/>} />
					<Route path='/newAppointment' element={<Appointment/>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;