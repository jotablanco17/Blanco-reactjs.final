
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCounter } from '../hooks/Usecounter';

const Counter = ({ inital, stock, onAdd }) => {
    const {count , addCount, restCount} = useCounter(inital, stock)
    return (
        <center>
            <button className="btn btn-success" onClick={addCount}>+1</button>
            <label>
                <strong>{count}</strong>
            </label>
            <button className="btn btn-success" onClick={restCount}>-1</button>
            <button className=' btn btn-outline-primary' onClick={() => onAdd(count)}> agregar al carrito</button>
        </center>
    )

}
export default Counter