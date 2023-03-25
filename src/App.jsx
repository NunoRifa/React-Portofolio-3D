import React, { Suspense } from "react";

import { loader } from "./assets";

const PageLoading = () => (
  <div className="flex justify-center items-center h-[100vh] bg-white">
    <img src={loader} alt="loading" className="w-[200px] h-[200px]" />
  </div>
);

const App = () => {
  const LazyComponent = React.lazy(() => import("./IndexComponents"));

  return (
    <Suspense fallback={<PageLoading />}>
      <LazyComponent />
    </Suspense>
  );
};

export default App;
