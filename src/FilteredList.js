import { useMemo } from 'react';

const FilteredList = (props) => {
  const filteredList = useMemo(
    () =>
      props.list
        .filter((el) => el.age > 18)
        .map((el) => (
          <div key={el.id}>
            <h1>Name: {el.name}</h1>
            <h1>Age: {el.age}</h1>
            <h1>Id: {el.id}</h1>
          </div>
        )),
    [props]
  );

  return <>{filteredList}</>;
};

export default FilteredList;
