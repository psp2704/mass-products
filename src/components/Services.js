import React from 'react';
import { Link } from 'react-router-dom';
import design1 from '../night.png'
import './services.css'
function Services() {

    return (
        <>
            <div className="bg-gradient-to-r from-fuchsia-300 to-purple-300 " style={{backgroundImage : `url(${design1})`, }}>
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-white">Why It's Important</h2>
                        <p className="mt-4 text-lg text-white">Discover the significance of each soft skill:</p>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-gray-800 p-8 rounded-lg shadow-md">
                            <Link to='/courses/excel'>    <h3 className="text-xl font-semibold text-white">Excel</h3>
                                <p className="mt-2 text-base  text-gray-300">Excel is essential for data analysis, visualization, and project planning. It helps project managers organize and manipulate data efficiently, track project progress, and perform complex calculations.</p>
                            </Link></div>
                        <div className="bg-gray-800 p-8 rounded-lg shadow-md">
                            <Link to='/courses/power-bi'>    <h3 className="text-xl font-semibold text-white">Power BI</h3>
                                <p className="mt-2 text-base  text-gray-300">Power BI enables project managers to visualize and share insights from project data. It helps analyze project metrics, identify trends, and make data-driven decisions.</p>
                            </Link></div>
                        <div className="bg-gray-800 p-8 rounded-lg shadow-md">
                            <Link to='/courses/primavera'>    <h3 className="text-xl font-semibold text-white">Primavera</h3>
                                <p className="mt-2 text-base  text-gray-300">Primavera offers advanced features for project planning, scheduling, and resource management. It helps project managers create detailed project plans, allocate resources efficiently, and track project progress against milestones.</p>
                            </Link></div>
                        <div className="bg-gray-800 p-8 rounded-lg shadow-md">
                            <Link to='/courses/evm'>    <h3 className="text-xl font-semibold text-white">Earned Value Management (EVM)</h3>
                                <p className="mt-2 text-base  text-gray-300">EVM measures project performance objectively by integrating project scope, schedule, and cost data. It enables project managers to monitor project performance, identify variances, and take corrective actions.</p>
                            </Link></div>
                        <div className="bg-gray-800 p-8 rounded-lg shadow-md">
                            <Link to='/courses/ms-project'>    <h3 className="text-xl font-semibold text-white">Microsoft Project</h3>
                                <p className="mt-2 text-base  text-gray-300">Microsoft Project provides tools for planning, scheduling, and resource management. It helps project managers create project schedules, track progress, and collaborate with team members effectively.</p>
                            </Link></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services