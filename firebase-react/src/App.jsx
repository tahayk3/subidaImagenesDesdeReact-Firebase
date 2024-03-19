import React from "react";
import { uploadFile } from "./firebase/config";
import { useState } from "react";
function App(){

 const [file, setFile] = useState(null);

 const handleSubmit = async (e) =>{
  e.preventDefault();
  try{
    const result =  await uploadFile(file);
    console.log(result);
    alert("La url de la imagen es: " + result);
  }catch(error){
    console.log(error);
  } 
 }

  return(
    <form onSubmit={handleSubmit}>
      <input type="file" name="" onChange={e=> setFile(e.target.files[0]) } />
      <button>Subir</button>
    </form>
  );
}

export default App