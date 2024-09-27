
import './App.css';
import NavBar from './components/navbar';
function App() {
  return (
    <div className='relative bg-primaryBackground text-primaryText'> 
      <NavBar/>
      

      <div className="flex flex-col justify-center items-center h-full min-h-[86.9vh] ">
        <header className="text-center ">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Manage your tasks with ease
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Login with your Google account and keep track of all your tasks and goals
          </p>
        </header>       
      </div>
      <footer className="w-full bg-accent absolute bottom-0 text-left items-center h-14">
        <div className='flex items-center h-full px-4 justify-between'>
          <p className="text-base md:text-lg">
            Designed and Developed by Sai Ram
          </p>
          <div className="flex justify-center">
            <span className="w-6 h-6 bg-primaryText rounded-full mx-2"></span>
            <span className="w-6 h-6 bg-primaryText rounded-full mx-2"></span>
            <span className="w-6 h-6 bg-primaryText rounded-full mx-2"></span>
          
          </div>
          </div>
        </footer>
    </div>
  );
}

export default App;
