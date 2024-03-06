import React from 'react';
import { Link } from 'react-router-dom';

function Services() {

    return (
        <>
            <div className="">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Why It's Important</h2>
                        <p className="mt-4 text-lg text-white">Discover the significance of each soft skill:</p>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <Link to='/services/excel'>    <h3 className="text-xl font-semibold text-gray-900">Excel</h3>
                                <p className="mt-2 text-base text-gray-600">Excel is essential for data analysis, visualization, and project planning. It helps project managers organize and manipulate data efficiently, track project progress, and perform complex calculations.</p>
                            </Link></div>
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <Link to='/services/power-bi'>    <h3 className="text-xl font-semibold text-gray-900">Power BI</h3>
                                <p className="mt-2 text-base text-gray-600">Power BI enables project managers to visualize and share insights from project data. It helps analyze project metrics, identify trends, and make data-driven decisions.</p>
                            </Link></div>
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <Link to='/services/primavera'>    <h3 className="text-xl font-semibold text-gray-900">Primavera</h3>
                                <p className="mt-2 text-base text-gray-600">Primavera offers advanced features for project planning, scheduling, and resource management. It helps project managers create detailed project plans, allocate resources efficiently, and track project progress against milestones.</p>
                            </Link></div>
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <Link to='/services/evm'>    <h3 className="text-xl font-semibold text-gray-900">Earned Value Management (EVM)</h3>
                                <p className="mt-2 text-base text-gray-600">EVM measures project performance objectively by integrating project scope, schedule, and cost data. It enables project managers to monitor project performance, identify variances, and take corrective actions.</p>
                            </Link></div>
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <Link to='/services/ms-project'>    <h3 className="text-xl font-semibold text-gray-900">Microsoft Project</h3>
                                <p className="mt-2 text-base text-gray-600">Microsoft Project provides tools for planning, scheduling, and resource management. It helps project managers create project schedules, track progress, and collaborate with team members effectively.</p>
                            </Link></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services