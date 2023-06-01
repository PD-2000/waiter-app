import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { fetchTables } from "./Redux/tablesRedux";
import { fetchStatus } from './Redux/tableStatusRedux';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Home from "./components/pages/Home";
import SingleTable from "./components/pages/SingleTable";
import NotFound from "./components/pages/NotFound";
import Footer from "./components/views/Footer";
import NavBar from './components/views/NavBar';

const App = () => {
	const dispatch = useDispatch();
	
	useEffect(() => dispatch(fetchTables()), [dispatch]);
	useEffect(() => dispatch(fetchStatus()), [dispatch]);

	return (
		<Container>
			<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/table/:id" element={<SingleTable />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			<Footer />
		</Container>
	);
};

export default App;