import { useCallback, useState } from 'react';
import './App.css';

function App() {
 const [length, setLength] = useState(8);
 const [numberAllowed, setNumberAllowed] = useState(false);
 const [charAllowed, setCharAllowed] = useState(false);
 const [Password, setPassword] = useState("");

 const passwordGenerator = useCallback(() => {
   let pass = "";
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   if (numberAllowed) str += "0123456789";
   if (charAllowed) str += "!@#$%^&*(){}[]~`";

   for (let i = 1; i <= length; i++) {
     const char = Math.floor(Math.random() * str.length); // up to last element
     pass += str.charAt(char);
   }
   setPassword(pass);
 }, [length, numberAllowed, charAllowed, setPassword]);

 const copyToClipboard = () => {
   if (Password) {
     navigator.clipboard.writeText(Password);
     alert("Password copied to clipboard!");
   } else {
     alert("Generate a password first!");
   }
 };

 return (
   <>
     <div className='w-full max-w-lg mx-auto mt-16 p-8 rounded-lg shadow-lg text-orange-500 bg-gray-800'>
       <h1 className='text-2xl font-bold mb-6 text-white text-center'>Password Generator</h1>
       <div className='flex shadow-inner bg-gray-900 rounded-lg mb-4'>
         <input 
           type="text"
           value={Password}
           className='outline-none py-2 px-4 w-full bg-gray-700 text-white rounded-l-lg'
           placeholder='Generated Password'
           readOnly
         />
         <button 
           onClick={copyToClipboard} 
           className='bg-blue-700 text-white px-4 py-2 hover:bg-blue-800 transition-all'>
           Copy
         </button>
         <button 
           onClick={passwordGenerator} 
           className='bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition-all'>
           Generate
         </button>
       </div>

       <div className='flex justify-between text-white'>
         <div className='flex items-center'>
           <input 
             type='checkbox' 
             checked={numberAllowed} 
             onChange={() => setNumberAllowed(!numberAllowed)} 
             className='mr-2'
           />
           <label>Include Numbers</label>
         </div>
         <div className='flex items-center'>
           <input 
             type='checkbox' 
             checked={charAllowed} 
             onChange={() => setCharAllowed(!charAllowed)} 
             className='mr-2'
           />
           <label>Include Symbols</label>
         </div>
         <div className='flex items-center'>
           <label className='mr-2'>Length: {length}</label>
           <input 
             type="range" 
             min="4" 
             max="20" 
             value={length} 
             onChange={(e) => setLength(e.target.value)} 
             className='cursor-pointer'
           />
         </div>
       </div>
     </div>
   </>
 );
}

export default App;
