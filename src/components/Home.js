import React from 'react'
import  design from '../Assets/img/bg.png'
function Home() {
  return (
    <>

    <div className="bg-gray-100" style={{backgroundImage : `url( ${design} )`}}>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-center font-bold text-gray-900">Project Management Soft Skills</h1>
        </div>
      </header>
      
      <main>
        <div className=" max-w-screen-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white via-purple-100 to-white" >
          <div className="max-w-3xl mx-auto text-center ">
            <h2 className="text-4xl font-extrabold text-gray-900">Welcome to our platform!</h2>
            <p className="mt-4 text-lg ">Enhance your project management soft skills with our comprehensive resources and tools.</p>
          </div>
        </div>
        
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Our Features</h2>
              <p className="mt-4 text-lg text-gray-600">Discover what sets us apart:</p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900">Resource Library</h3>
                  <p className="mt-4 text-base text-gray-600">Access a wide range of articles, guides, and tutorials on project management soft skills.</p>
                </div>
                <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900">Interactive Tools</h3>
                  <p className="mt-4 text-base text-gray-600">Utilize our interactive tools and templates to practice and improve your skills.</p>
                </div>
                <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900">Community Support</h3>
                  <p className="mt-4 text-base text-gray-600">Engage with our community of professionals to share insights and best practices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>



      <div className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Types of Information</h2>
              <p className="mt-4 text-lg text-gray-600">Explore different aspects of project management:</p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
               <img src={design} className='rounded-lg opacity-70 hover:opacity-100 transition-all' alt='Project Management Resource' />
               <img src={design} className='rounded-lg opacity-70 hover:opacity-100 transition-all' alt='Project Management Resource' />
               <img src={design} className='rounded-lg opacity-70 hover:opacity-100 transition-all' alt='Project Management Resource' />
              </div>
            </div>
          </div>
        </div>
      
    </div>
    </>
  )
}

export default Home