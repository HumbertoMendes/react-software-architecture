import { RecoilRoot } from 'recoil';
import { CounterButton } from './CounterButton';
import { CounterProvider } from './CounterProvider';
import './App.css';

const App = () => {
	// return (
	// 	<CounterProvider>
	// 		<h1>State Management Example</h1>
	// 		<CounterButton />
	// 	</CounterProvider>
	// );
    return (
        <RecoilRoot>
			<h1>State Management Example</h1>
			<CounterButton />
		</RecoilRoot>
    );
}

export default App;
