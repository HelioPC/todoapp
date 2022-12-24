import { useAppTheme } from './contexts/Theme'
import * as C from './style'

const App = () => {
	const { dispatch } = useAppTheme()
	return (
		<C.App>
			<h1>Olá mundo</h1>
			<button onClick={() => dispatch.switchTheme()}>
				Change theme
			</button>
		</C.App>
	)
}

export default App
