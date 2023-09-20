import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Test from "./component/pages/Test";
import { StoreProvider } from "./store/StoreContext";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              <Route path={`*`} element={<Test />} />
              <Route path={`/settings/accesslevel`} element={<Test />} />
              <Route path={`/settings/users`} element={<Test />} />
              <Route path={`/settings/activities`} element={<Test />} />
              <Route path={`/settings/rates`} element={<Test />} />
              <Route path={`/settings/engagement`} element={<Test />} />
              <Route path={`/settings/offices`} element={<Test />} />
              <Route path={`/settings/department`} element={<Test />} />
              <Route path={`/settings/entities`} element={<Test />} />
              <Route path={`/settings/referraltype`} element={<Test />} />
              <Route path={`/settings/referralsource`} element={<Test />} />
              <Route path={`/settings/lostreason`} element={<Test />} />
              <Route path={`/settings/lostto`} element={<Test />} />
              <Route path={`/settings/wonreason`} element={<Test />} />
              <Route path={`/settings/clientclass`} element={<Test />} />
              <Route
                path={`/settings/form1099special-character`}
                element={<Test />}
              />
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
