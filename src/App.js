import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";

const App = () => {
	return (
		<Container>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Container>
	)
}

export default App;