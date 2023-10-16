import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store'; 
import { increment, decrement } from './counterSlice';

const Counter= () => {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;