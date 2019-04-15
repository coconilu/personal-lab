import React, { useState, useEffect } from "react";

export default function MyButton(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>{props.children}</button>
    </div>
  );
}
