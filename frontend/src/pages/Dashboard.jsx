import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }

  }, []);

  return (

    <div className="p-10">

      <h1 className="text-4xl font-bold text-blue-600">
        User Dashboard
      </h1>

      <p className="mt-6 text-xl">
        Welcome User 🎉
      </p>

    </div>
  );
}

export default Dashboard;