import Header from "./component/partials/Header";
import React from "react";
import Navigation from "./component/partials/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "./store/StoreContext";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Test from "./component/pages/Test";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              <Route path={`*`} element={<Test />} />
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
