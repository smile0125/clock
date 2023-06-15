import React, { lazy, Suspense } from "react";

const Index = lazy(() =>
  import(/*webpackChunkName: "index"*/ "../src/pages/Index")
);

const SuspenseComponent = (Component) => {
  return (
    <Suspense callback="loading">
      <Component />
    </Suspense>
  );
};

const lazyComponents = [
  {
    path: "/",
    element: SuspenseComponent(Index),
  },
];

export default lazyComponents;
