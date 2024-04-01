
import React from 'react';
import primaveraImage from '../../Assets/img/design.jpeg'; // Import your image
import design1 from '../../night.png'

const ActivityPage = ({title, description, importance , benefits}) => {
    return (
        <div className=""  style={{backgroundImage : `url(${design1})`}}>
            <header className=" shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h3 className="text-4xl font-extrabold text-center text-white">Understanding {title} in Project Management</h3>
                </div>
            </header>
            <main className=' '>
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="text-center mx-auto ">
                        <div className='  rounded-xl p-8'>
                            <p className="mt-4 text-lg text-white">{description}</p>
                        </div>
                    </div>
                    <div className="mx-auto md:flex md:flex-row md:justify-between items-start ">
                        <div className="md:mr-8">
                            <div className="mt-12">
                                <div className='shadow-lg  rounded-xl px-8'>
                                    <div className=' border-2 border-gray-300 rounded-xl p-5' >
                                    <h3 className="text-2xl font-bold text-white">Why {title} is Important for Project Management</h3>
                                    <p className="mt-4 text-lg text-white">{title} plays a crucial role in project management due to its ability to:</p>
                                    <ul className="mt-4 text-lg text-white list-disc list-inside">
                                    {importance.map((imp, id) =>{
                                          return <li key={id-10}>{imp}</li>;
                                        })}
                                    </ul>
                                    </div>
                                {/* </div>
                            </div>
                            <div className="mt-12">
                                <div className='shadow-lg bg-gray-800 rounded-xl p-8'> */}
                                <div  className=' border-2 border-gray-300 rounded-xl p-5 mt-5' >
                                    <h3 className="text-2xl font-bold text-white">Benefits of Using {title} in Project Management</h3>
                                    <p className="mt-4 text-lg text-white">The benefits of utilizing {title} in project management include:</p>
                                    <ul className="mt-4 text-lg text-white list-disc list-inside">
                                        {benefits.map((benefit,id) =>{
                                          return <li key={id+10}>{benefit}</li>;
                                        })}
                                    </ul>
                                    </div>
                                </div>
                                <div className='px-8 float-right'  >
                                    <button className='   bg-green-500 text-black rounded-xl px-5 py-2 mt-5'>Enroll Now</button>
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