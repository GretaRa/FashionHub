import Navbar from "../Navbar/Navbar"


function HomePage(){
  return(
    <>
      <Navbar/>
      <div className="flex justify-center items-center h-screen">
        <div className="text-3xl font-bold text-center">
          <h1>Welcome to the Home Page</h1>
        </div>
      </div>
    </>
  );
}

export default HomePage;