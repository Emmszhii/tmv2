import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Test from "./component/pages/Test";
import Client from "./component/pages/developer/client/Client";
import ClientContactInformation from "./component/pages/developer/client/information/contact-information/ClientContactInformation";
import ClientMain from "./component/pages/developer/client/information/main/ClientMain";
import SpecialCharacter from "./component/pages/developer/settings/1099-special-character/1099SpecialCharacter";
import Activity from "./component/pages/developer/settings/activity/Activity";
import ClientClass from "./component/pages/developer/settings/client-class/ClientClass";
import Department from "./component/pages/developer/settings/department/Department";
import Engagement from "./component/pages/developer/settings/engagement/Engagement";
import Category from "./component/pages/developer/settings/engagement/category/Category";
import Template from "./component/pages/developer/settings/engagement/template/Template";
import Entities from "./component/pages/developer/settings/entities/Entities";
import LostReason from "./component/pages/developer/settings/lost-reason/LostReason";
import LostTo from "./component/pages/developer/settings/lost-to/LostTo";
import Office from "./component/pages/developer/settings/office/Office";
import Rates from "./component/pages/developer/settings/rates/Rates";
import ReferrralSource from "./component/pages/developer/settings/referral-source/ReferralSource";
import ReferrralType from "./component/pages/developer/settings/referral-type/ReferralType";
import Users from "./component/pages/developer/settings/users/Users";
import Other from "./component/pages/developer/settings/users/other/Other";
import Roles from "./component/pages/developer/settings/users/roles/Roles";
import System from "./component/pages/developer/settings/users/system/System";
import WonReason from "./component/pages/developer/settings/won-reason/WonReason";
import Staff from "./component/pages/developer/staff/Staff";
import { StoreProvider } from "./store/StoreContext";
import ClientEngagement from "./component/pages/developer/client/information/engagement/ClientEngagement";
import ClientBillingAR from "./component/pages/developer/client/information/billing-ar/ClientBillingAR";
import ClientCustomFields from "./component/pages/developer/client/information/custom-fields/ClientCustomFields";
import ClientNotes from "./component/pages/developer/client/information/notes/ClientNotes";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              <Route path={`*`} element={<Test />} />
              <Route path={`/staff`} element={<Staff />} />
              <Route path={`/client`} element={<Client />} />
              <Route
                path={`/system/client/information/main`}
                element={<ClientMain />}
              />
              <Route
                path={`/system/client/information/contact-information`}
                element={<ClientContactInformation />}
              />
              <Route
                path={`/system/client/information/engagement`}
                element={<ClientEngagement />}
              />
              <Route
                path={`/system/client/information/billing-ar`}
                element={<ClientBillingAR />}
              />
              <Route
                path={`/system/client/information/custom-fields`}
                element={<ClientCustomFields />}
              />
              <Route
                path={`/system/client/information/notes`}
                element={<ClientNotes />}
              />
              <Route path={`/settings/accesslevel`} element={<Test />} />
              <Route path={`/settings/users`} element={<Users />} />
              <Route path={`/settings/users/system`} element={<System />} />
              <Route path={`/settings/users/other`} element={<Other />} />
              <Route path={`/settings/users/roles`} element={<Roles />} />
              <Route path={`/settings/activity`} element={<Activity />} />
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
              <Route path={`/settings/entities`} element={<Entities />} />
              <Route path={`/settings/office`} element={<Office />} />
              <Route path={`/settings/department`} element={<Department />} />
              <Route path={`/settings/entities`} element={<Test />} />
              <Route
                path={`/settings/referraltype`}
                element={<ReferrralType />}
              />
              <Route
                path={`/settings/referralsource`}
                element={<ReferrralSource />}
              />
              <Route path={`/settings/lostreason`} element={<LostReason />} />
              <Route path={`/settings/lostto`} element={<LostTo />} />
              <Route path={`/settings/wonreason`} element={<WonReason />} />
              <Route path={`/settings/clientclass`} element={<ClientClass />} />
              <Route
                path={`/settings/form1099special-character`}
                element={<SpecialCharacter />}
              />
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
