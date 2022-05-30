import CarDetail from './CarDetail';

function App() {
  return (
    <>
      <CarDetail
        initialData={{
          model: 'punto',
          color: 'orange',
          year: 1982,
        }}
      />
    </>
  );
}

export default App;
