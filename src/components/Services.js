import React from 'react';
import { Link } from 'react-router-dom';
import design1 from '../night.png'
import './services.css'
function Services() {

    // style={{backgroundImage : `url(${design1})`, }}
    return (
        <>
            <div className=" ">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold ">Why It's Important</h2>
                        <p className="mt-4 text-lg text-grey-900">Discover the significance of each soft skill:</p>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className=" p-8 border-gray-300 border-2 rounded-lg shadow-md">
                            <Link to='/courses/excel'>    <h3 className="text-xl font-semibold ">Excel</h3>
                                <p className="mt-2 text-base  text-gray-900">Excel is essential for data analysis, visualization, and project planning. It helps project managers organize and manipulate data efficiently, track project progress, and perform complex calculations.</p>
                            </Link></div>
                        <div className=" p-8 border-gray-300 border-2 rounded-lg shadow-md">
                            <Link to='/courses/power-bi'>    <h3 className="text-xl font-semibold ">Power BI</h3>
                                <p className="mt-2 text-base  text-gray-900">Power BI enables project managers to visualize and share insights from project data. It helps analyze project metrics, identify trends, and make data-driven decisions.</p>
                            </Link></div>
                        <div className=" p-8 border-gray-300 border-2 rounded-lg shadow-md">
                            <Link to='/courses/primavera'>    <h3 className="text-xl font-semibold ">Primavera</h3>
                                <p className="mt-2 text-base  text-gray-900">Primavera offers advanced features for project planning, scheduling, and resource management. It helps project managers create detailed project plans, allocate resources efficiently, and track project progress against milestones.</p>
                            </Link></div>
                        <div className=" p-8 border-gray-300 border-2 rounded-lg shadow-md">
                            <Link to='/courses/evm'>    <h3 className="text-xl font-semibold ">Earned Value Management (EVM)</h3>
                                <p className="mt-2 text-base  text-gray-900">EVM measures project performance objectively by integrating project scope, schedule, and cost data. It enables project managers to monitor project performance, identify variances, and take corrective actions.</p>
                            </Link></div>
                        <div className=" p-8 border-gray-300 border-2 rounded-lg shadow-md">
                            <Link to='/courses/ms-project'>    <h3 className="text-xl font-semibold ">Microsoft Project</h3>
                                <p className="mt-2 text-base  text-gray-900">Microsoft Project provides tools for planning, scheduling, and resource management. It helps project managers create project schedules, track progress, and collaborate with team members effectively.</p>
                            </Link></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services