function Admin() {
  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold text-red-600">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-10">

        {/* Total Users */}
        <div className="shadow-lg p-6 rounded-lg bg-white">

          <h2 className="text-2xl font-bold">
            Total Users
          </h2>

          <p className="text-4xl mt-4 text-blue-600">
            120
          </p>

        </div>

        {/* Active Subscriptions */}
        <div className="shadow-lg p-6 rounded-lg bg-white">

          <h2 className="text-2xl font-bold">
            Active Plans
          </h2>

          <p className="text-4xl mt-4 text-green-600">
            85
          </p>

        </div>

        {/* Revenue */}
        <div className="shadow-lg p-6 rounded-lg bg-white">

          <h2 className="text-2xl font-bold">
            Revenue
          </h2>

          <p className="text-4xl mt-4 text-purple-600">
            ₹50,000
          </p>

        </div>

      </div>

    </div>
  );
}

export default Admin;