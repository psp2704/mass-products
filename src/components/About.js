import React from 'react';
import design from '../magic.png'

const AboutPage = () => {
  return (
    <div className="" style={{background:`url(${design})`}}>
      <header className="">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-center font-bold text-white">About Our Platform</h1>
        </div>
      </header>
      
      <main>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-white">Empowering Project Managers</h2>
            <p className="mt-4 text-lg text-gray-300">Learn about the soft skills we provide:</p>
          </div>
        </div>
        
        <div className="">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-white">Why It's Important</h2>
              <p className="mt-4 text-lg text-gray-300">Discover the significance of each soft skill:</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-black p-8 border-gray-300 border-2 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white">Excel</h3>
                <p className="mt-2 text-base text-gray-400">Excel is essential for data analysis, visualization, and project planning. It helps project managers organize and manipulate data efficiently, track project progress, and perform complex calculations.</p>
              </div>
              <div className="bg-black p-8 border-gray-300 border-2 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white">Power BI</h3>
                <p className="mt-2 text-base text-gray-400">Power BI enables project managers to visualize and share insights from project data. It helps analyze project metrics, identify trends, and make data-driven decisions.</p>
              </div>
              <div className="bg-black p-8 border-gray-300 border-2 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white">Primavera</h3>
                <p className="mt-2 text-base text-gray-400">Primavera offers advanced features for project planning, scheduling, and resource management. It helps project managers create detailed project plans, allocate resources efficiently, and track project progress against milestones.</p>
              </div>
              <div className="bg-black p-8 border-gray-300 border-2 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white">Earned Value Management (EVM)</h3>
                <p className="mt-2 text-base text-gray-400">EVM measures project performance objectively by integrating project scope, schedule, and cost data. It enables project managers to monitor project performance, identify variances, and take corrective actions.</p>
              </div>
              <div className="bg-black p-8 border-gray-300 border-2 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white">Microsoft Project</h3>
                <p className="mt-2 text-base text-gray-400">Microsoft Project provides tools for planning, scheduling, and resource management. It helps project managers create project schedules, track progress, and collaborate with team members effectively.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default AboutPage;
