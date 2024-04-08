import React from 'react';
import design from '../Assets/img/design.jpeg';
import design1 from '../night.png'

function Home() {
  return (
    <>
      <div className="" >
        <header>
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl text-center font-bold">Project Management Soft Skills</h1>
            <hr className='mt-4'/>
          </div>
        </header>

        <main>
          <div className="max-w-screen-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-extrabold">Welcome to our platform!</h2>
              <p className="mt-4 text-lg">Enhance your project management soft skills with our comprehensive resources and tools.</p>
            </div>
          </div>

          <div className="">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold">Our Features</h2>
                <p className="mt-4 text-lg">Discover what sets us apart:</p>
              </div>
              <div className="mt-10">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className=" bg-gray-100 p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold ">Resource Library</h3>
                    <p className="mt-4 text-base ">Access a wide range of articles, guides, and tutorials on project management soft skills.</p>
                  </div>
                  <div className=" bg-gray-100 p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold ">Interactive Tools</h3>
                    <p className="mt-4 text-base ">Utilize our interactive tools and templates to practice and improve your skills.</p>
                  </div>
                  <div className=" bg-gray-100 p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold ">Community Support</h3>
                    <p className="mt-4 text-base ">Engage with our community of professionals to share insights and best practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold">Types of Information</h2>
                <p className="mt-4 text-lg">Explore different aspects of project management:</p>
              </div>
              <div className="mt-10">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <img src={design} className='opacity-70 hover:opacity-100 rounded-2xl  transition-all' alt='page-image' />
                  <img src={design} className='opacity-70 hover:opacity-100 rounded-2xl  transition-all' alt='page-image' />
                  <img src={design} className='opacity-70 hover:opacity-100 rounded-2xl  transition-all' alt='page-image' />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
