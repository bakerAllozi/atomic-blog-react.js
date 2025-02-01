import React, { useState } from "react";

const Tests = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p data-testid="count">{count}</p>
      <button onClick={() => setCount(count + 2)}>Click Me</button>
    </div>
  );
};

export default Tests;
