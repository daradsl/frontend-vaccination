import { Outlet } from "react-router-dom";

const Home = () => {
	return(
		<div>
			<h1>Bem-vindo ao Sistema de Agendamento de Vacinação contra Covid-19</h1>
			<Outlet />
		</div>
	);
};

export default Home;