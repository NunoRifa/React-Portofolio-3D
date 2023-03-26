import React, { Suspense } from "react";

import { loader } from "./assets";
import PageError from "./components/PageError";

const PageLoading = () => (
  <div className="flex justify-center items-center h-[100vh] bg-white">
    <img src={loader} alt="loading" className="w-[200px] h-[200px]" />
  </div>
);

const App = () => {
  const LazyComponent = React.lazy(() => import("./IndexComponents"));

  const platform = window.navigator.platform;
  const detect =
    platform.toLowerCase().includes("linux ") ||
    platform.toLowerCase().includes("android");

  return (
    <Suspense fallback={<PageLoading />}>
      {detect ? <PageError /> : <LazyComponent />}
    </Suspense>
  );
};

export default App;
