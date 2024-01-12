import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ user }) => {
  return (
    <section>
      <h4>Hello , {user?.username}</h4>
      <Link to="/">Home</Link>
    </section>
  );
};

export default Dashboard;
