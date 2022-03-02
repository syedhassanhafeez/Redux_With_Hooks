import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './store/actions/countAction'
import Users from './components/Users';

function App() {
  const state = useSelector((state) => state);

  //In destructuring
  // const { count: { value } } = useSelector((state) => state)
  const dispatch = useDispatch();
  console.log(state);
  return (
    <div className="App">
      <h1>REDUX</h1>
      <h3>{state.count.value}</h3>
      {/* <h3>{value}</h3> */}

      <div>
        <button onClick={() => dispatch(increment())}>INCREMENT</button>
        <button onClick={() => dispatch(decrement())}>DECREMENT</button>
        <button onClick={() => dispatch(reset())}>RESET</button>
      </div>

      <Users />
    </div>
  );
}

export default App;
