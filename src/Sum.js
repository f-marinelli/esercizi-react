const Sum = (props) => {
  return <h1>{props.numeri.reduce((acc, cur) => acc + cur)}</h1>;
};

export default Sum;
