import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Home = () => {
  useEffect(() => {
    console.log("[index.tsx]", "mount");
    return () => {
      console.log("[index.tsx]", "unmount");
    };
  }, []);
  return (
    <div>
      <LocalStateComponent />
      <RouteStateComponent />
    </div>
  );
};

export default Home;

const LocalStateComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>Local state</h4>
      Count: {count}{" "}
      <button onClick={() => setCount(x => x + 1)}>Increment</button>
    </div>
  );
};

const RouteStateComponent = () => {
  const router = useRouter();
  const {
    query: { count = 0 },
  } = router;
  return (
    <div>
      <h4>Route state</h4>
      Count: {count}{" "}
      <button
        onClick={() =>
          router.push({
            pathname: router.pathname,
            // @ts-ignore
            query: { count: count ? parseInt(count, 10) + 1 : 1 },
          })
        }
      >
        Increment
      </button>
    </div>
  );
};
