import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Home from "./components/pages/Home";

const App = () => {
	return (
		<Container>
			<Route path="/" element={<Home />} />
		</Container>
	)
}

export default App;