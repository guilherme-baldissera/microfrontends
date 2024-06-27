import React from "react";

// @ts-ignore
const CounterContext = React.createContext();

const CounterProvider = ({ children }) => {
    const [count, setCount] = React.useState(0);
    const [hello, setHello] = React.useState("Using React");

    const increment = () => setCount(counter => counter + 1);
    const decrement = () => setCount(counter => counter - 1);

    const value = {
        count,
        increment,
        decrement,
        hello
    };

    return (
        <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
    );
};

const SayHello = () => {
    // @ts-ignore
  const { hello } = React.useContext(CounterContext);
    return <h1>{hello}</h1>;
};

const IncrementCounter = () => {
    // @ts-ignore
  const { increment } = React.useContext(CounterContext);
    return <button onClick={increment}> Increment</button>;
};

const DecrementCounter = () => {
    // @ts-ignore
  const { decrement } = React.useContext(CounterContext);
    return <button onClick={decrement}> Decrement</button>;
};

const ShowResult = () => {
    // @ts-ignore
  const { count } = React.useContext(CounterContext);
    return <h1>{count}</h1>;
};

const Root = (props) => (
    <CounterProvider>
      <section>{props.name} is mounted!</section>
        <SayHello />
        <ShowResult />
        <IncrementCounter />
        <DecrementCounter />
    </CounterProvider>
);

export default Root;
