import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Test from "./component/pages/Test";
import { StoreProvider } from "./store/StoreContext";
import Users from "./component/pages/developer/settings/users/Users";
import System from "./component/pages/developer/settings/users/system/System";
import Engagement from "./component/pages/developer/settings/engagement/Engagement";
import Other from "./component/pages/developer/settings/users/other/Other";
import Roles from "./component/pages/developer/settings/users/roles/Roles";
import Category from "./component/pages/developer/settings/engagement/category/Category";
import Template from "./component/pages/developer/settings/engagement/template/Template";
import Entities from "./component/pages/developer/settings/entities/Entities";
import Activities from "./component/pages/developer/settings/activities/Activities";
import Rates from "./component/pages/developer/settings/rates/Rates";
import Offices from "./component/pages/developer/settings/offices/Offices";
import Department from "./component/pages/developer/settings/department/Department";
import ReferrralType from "./component/pages/developer/settings/referral-type/ReferralType";
import ReferrralSource from "./component/pages/developer/settings/referral-source/ReferralSource";

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
              <Route path={`/settings/users`} element={<Users />} />
              <Route path={`/settings/users/system`} element={<System />} />
              <Route path={`/settings/users/other`} element={<Other />} />
              <Route path={`/settings/users/roles`} element={<Roles />} />
              <Route path={`/settings/activities`} element={<Activities />} />
              <Route path={`/settings/rates`} element={<Rates />} />
              <Route path={`/settings/engagement`} element={<Engagement />} />
              <Route
                path={`/settings/engagement/category`}
                element={<Category />}
              />
              <Route
                path={`/settings/engagement/template`}
                element={<Template />}
              />
              <Route path={`/settings/offices`} element={<Test />} />
              <Route path={`/settings/department`} element={<Test />} />
              <Route path={`/settings/entities`} element={<Entities />} />
              <Route path={`/settings/offices`} element={<Offices />} />
              <Route path={`/settings/department`} element={<Department />} />
              <Route path={`/settings/entities`} element={<Test />} />
              <Route
                path={`/settings/referraltype`}
                element={<ReferrralType />}
              />
              <Route path={`/settings/referralsource`} element={<ReferrralSource />} />
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
