const Sum = ({ numeri = [4, 5, 6] }) => {
  return <h1>{numeri.reduce((acc, cur) => acc + cur)}</h1>;
};

export default Sum;
