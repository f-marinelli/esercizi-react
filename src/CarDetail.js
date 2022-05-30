import { useEffect, useRef } from 'react';

const CarDetail = ({ initialData }) => {
  const modelRef = useRef();
  const colorRef = useRef();
  const yearRef = useRef();

  useEffect(() => {
    modelRef.current.value = initialData.model;
    colorRef.current.value = initialData.color;
    yearRef.current.value = initialData.year;
  }, [initialData]);

  return (
    <form>
      <input type="text" name="model" ref={modelRef} />
      <input type="text" name="color" ref={colorRef} />
      <input type="number" name="year" ref={yearRef} />
    </form>
  );
};

export default CarDetail;
