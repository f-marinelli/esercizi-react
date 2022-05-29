import { TodoList } from './TodoList';

function App() {
  return (
    <>
      <TodoList
        render={(items, handler) => (
          <ul>
            {items.map((item, i) => (
              <li key={i}>
                <h2>{item}</h2>
                <button type="button" onClick={handler.bind(this, i)}>
                  Remove item
                </button>
              </li>
            ))}
          </ul>
        )}
      />
    </>
  );
}

export default App;
