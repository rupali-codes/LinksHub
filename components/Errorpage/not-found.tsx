import Image from 'next/image'

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen min-w-screen flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-between px-5">
          <div className="w-full lg:w-1/2 mx-8 text-center md:text-left">
            <div className="text-5xl md:text-7xl text-violet-500 font-extrabold mb-8">
              404
            </div>
            <p className="text-xl md:text-2xl  leading-normal mb-8">
              Sorry, we couldn't find the page you're looking for.
            </p>
            <a
              href="/"
              className="inline-block px-5 py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-700 border border-transparent rounded-lg focus:outline-none bg-violet-600 active:bg-yellow-600 hover:bg-yellow-300"
            >
              Back to homepage
            </a>
          </div>
          <div className="w-full lg:w-1/2 mx-auto my-12">
            <img
              src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
              alt="Page not found"
            ></img>
          </div>
        </div>
      </div>
    </>
  )
}
