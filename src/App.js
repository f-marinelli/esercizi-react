import FilteredList from './FilteredList';

const list = [
  { name: 'Luca', age: 17, id: 1 },
  { name: 'Marco', age: 22, id: 2 },
  { name: 'Paolo', age: 45, id: 3 },
];

function App() {
  return (
    <>
      <FilteredList list={list} />
    </>
  );
}

export default App;
