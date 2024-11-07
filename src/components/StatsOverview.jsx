import React, { useState, useEffect } from 'react';

const StatsOverview = () => {
  // State variables to track the stats
  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [offices, setOffices] = useState(0);

  // Function to animate the counter
  const animateCounter = (target, setter) => {
    let start = 0;
    let step = Math.ceil(target / 100); // Adjust step size for smoothness
    let current = start;

    const increment = () => {
      if (current < target) {
        current += step;
        setter(Math.min(current, target)); // Avoid exceeding target
        requestAnimationFrame(increment); // Continue animation
      }
    };
    increment();
  };

  // Effect to start the counter animation
  useEffect(() => {
    animateCounter(1, setExperience); // Years of Experience (Target: 1)
    animateCounter(10, setClients); // Happy Clients (Target: 10)
    animateCounter(20, setEmployees); // Employees (Target: 20)
    animateCounter(1, setOffices); // Offices (Target: 1)

    // No cleanup needed as requestAnimationFrame cleans up automatically
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-10 md:flex-row py-10 justify-between px-10 items-center">
        {/* Left aligned heading section */}
        <div className="max-w-md">
          <h2 className="text-3xl font-semibold tracking-tight">
            Translating technology into a positive impact
          </h2>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Our approach allows us to deliver exceptional experiences that drive
            growth and success for all stakeholders. Let's rise to new heights with the
            power of digital transformation.
          </p>
        </div>

        {/* Stats grid with auto-increment effects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          <div>
            <div className="text-4xl font-bold">{experience}+</div>
            <div className="text-sm text-gray-600">Years of Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold">{clients}+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold">{employees}+</div>
            <div className="text-sm text-gray-600">Employees</div>
          </div>
          <div>
            <div className="text-4xl font-bold">{offices}</div>
            <div className="text-sm text-gray-600">Offices Around the World</div>
          </div>
        </div>
      </div>

      {/* Bottom centered text */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-gray-800 text-xl">
          We rethink business growth for you through our collective
          experience with strategic partner ecosystem.
        </p>
      </div>
    </div>
  );
};

export default StatsOverview;