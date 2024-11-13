import "./App.css";
import Card from "./components/Card.jsx";  // Importing from the correct path

function App() {
  let myObj = {
    username: "Anwar Alam",
    age: 23,
  };

  return (
    <>
      {/* Example with Tailwind styles */}
      {/* <h1 className="bg-blue-500 text-white p-4 rounded-xl">Hello, Welcome to the world of Tailwind</h1> */}

      {/* Example of figure with Tailwind */}
      {/* 
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg"
          alt="Sunflower"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> 
      */}

      {/* Pass props to the Card component */}
      <Card username="chai or code" someObj={myObj} />
      <br/>
      <Card username="hitesh" someObj={myObj} />
    </>
  );
}

export default App;

 
