
import React from 'react';
import primaveraImage from '../../Assets/img/design.jpeg'; // Import your image
import ActivityPage from './ActivityPage';

const Primavera = () => {
    const data = {
        title : "Primavera", 
        description : "Primavera is a comprehensive project management software suite designed for large-scale projects and complex portfolios. It offers advanced features for project planning, scheduling, and resource management.",
        importance : [
            "Create detailed project plans and schedules",
            "Allocate resources efficiently",
            "Track project progress against milestones",
            "Identify critical paths and optimize project timelines",
            "Facilitate collaboration among project teams and stakeholders",
            "Ensure alignment with organizational goals and objectives"
        ],
        benefits : [
            "Enhanced project planning and scheduling capabilities",
            "Improved resource allocation and utilization",
            "Greater visibility into project progress and performance",
            "Proactive risk management and mitigation",
            "Streamlined collaboration and communication among project stakeholders",
            "Higher chances of project success and on-time delivery"
        ]
    }
    return (
        <>

       <ActivityPage title={data.title}  importance={data.importance} description={data.description} benefits={data.benefits}/>
        <div className="">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-5xl font-extrabold text-center text-gray-900">Understanding Primavera in Project Management</h2>
                </div>
            </header>

            <main className='bg-gradient-to-r from-white via-purple-100 to-white '>
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="text-center mx-auto ">
                        <div className='shadow-lg bg-white rounded-xl p-8'>
                            <p className="mt-4 text-lg text-gray-600">Primavera is a comprehensive project management software suite designed for large-scale projects and complex portfolios. It offers advanced features for project planning, scheduling, and resource management.</p>
                        </div>
                    </div>
                    <div className="mx-auto md:flex md:flex-row md:justify-between items-start ">

                        <div className="md:mr-8">

                            <div className="mt-12">
                                <div className='shadow-lg bg-white rounded-xl p-8'>
                                    <h3 className="text-2xl font-bold text-gray-900">Why Primavera is Important for Project Management</h3>
                                    <p className="mt-4 text-lg text-gray-600">Primavera plays a crucial role in project management due to its ability to:</p>
                                    <ul className="mt-4 text-lg text-gray-600 list-disc list-inside">
                                        <li>Create detailed project plans and schedules</li>
                                        <li>Allocate resources efficiently</li>
                                        <li>Track project progress against milestones</li>
                                        <li>Identify critical paths and optimize project timelines</li>
                                        <li>Facilitate collaboration among project teams and stakeholders</li>
                                        <li>Ensure alignment with organizational goals and objectives</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-12">
                                <div className='shadow-lg bg-white rounded-xl p-8'>
                                    <h3 className="text-2xl font-bold text-gray-900">Benefits of Using Primavera in Project Management</h3>
                                    <p className="mt-4 text-lg text-gray-600">The benefits of utilizing Primavera in project management include:</p>
                                    <ul className="mt-4 text-lg text-gray-600 list-disc list-inside">
                                        <li>Enhanced project planning and scheduling capabilities</li>
                                        <li>Improved resource allocation and utilization</li>
                                        <li>Greater visibility into project progress and performance</li>
                                        <li>Proactive risk management and mitigation</li>
                                        <li>Streamlined collaboration and communication among project stakeholders</li>
                                        <li>Higher chances of project success and on-time delivery</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <img src={primaveraImage} alt="Primavera" className="max-h-96 w-full md:w-1/3 mt-12 rounded-lg shadow-md" />
                    </div>
                </div>
            </main>

           
        </div>
        </>
    );
}

export default Primavera;

