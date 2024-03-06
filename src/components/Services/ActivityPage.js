
import React from 'react';
import primaveraImage from '../../Assets/img/design.jpeg'; // Import your image

const ActivityPage = ({title, description, importance , benefits}) => {
    return (
        <div className="">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h3 className="text-4xl font-extrabold text-center text-gray-900">Understanding {title} in Project Management</h3>
                </div>
            </header>

            <main className='bg-gradient-to-r from-white via-purple-100 to-white '>
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="text-center mx-auto ">
                        <div className='shadow-lg bg-white rounded-xl p-8'>
                            <p className="mt-4 text-lg text-gray-600">{description}</p>
                        </div>
                    </div>
                    <div className="mx-auto md:flex md:flex-row md:justify-between items-start ">

                        <div className="md:mr-8">

                            <div className="mt-12">
                                <div className='shadow-lg bg-white rounded-xl p-8'>
                                    <h3 className="text-2xl font-bold text-gray-900">Why {title} is Important for Project Management</h3>
                                    <p className="mt-4 text-lg text-gray-600">{title} plays a crucial role in project management due to its ability to:</p>
                                    <ul className="mt-4 text-lg text-gray-600 list-disc list-inside">
                                    {importance.map((imp, id) =>{
                                          return <li key={id-10}>{imp}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-12">
                                <div className='shadow-lg bg-white rounded-xl p-8'>
                                    <h3 className="text-2xl font-bold text-gray-900">Benefits of Using {title} in Project Management</h3>
                                    <p className="mt-4 text-lg text-gray-600">The benefits of utilizing {title} in project management include:</p>
                                    <ul className="mt-4 text-lg text-gray-600 list-disc list-inside">
                                        {benefits.map((benefit,id) =>{
                                          return <li key={id+10}>{benefit}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <img src={primaveraImage} alt="Primavera" className="max-h-96 w-full md:w-1/3 mt-12 rounded-lg shadow-md" />
                    </div>
                </div>
            </main>

           
        </div>
    );
}

export default ActivityPage;