import React, { useState } from "react";
// import "./generalStyles.css";
// import Form from "./Form";
// const App = () => {
//   return (
//     <main>
//       <Form />
//     </main>
//   );
// };

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./newPages/Home";
import SingleProduct from "./newPages/SingleProduct";
import AllProduct from "./newPages/AllProduct";
import Error from "./newPages/Error";
import Dashboard from "./newPages/Dashboard";
import Login from "./newPages/Login";
import About from "./newPages/About";
import ProtectedRoute from "./newPages/ProtectedRoute";
import SharedLayout from "./newPages/SharedLayout";
const App = () => {
  const [user, setUser] = useState(null);
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="products" element={<AllProduct />} />
          <Route path="products/:productID" element={<SingleProduct />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
