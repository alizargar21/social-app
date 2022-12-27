import React, { useRef  , useEffect} from "react";
import { useState } from "react";
import Button from "./Button";

const ImageUpload = (props) => {

  const [file , setFile]=  useState()
  const [previewUrl , setPreviewUrl]=  useState()
  
  useEffect(()=>{
    if(!file) {
      return
    }else {
      const fileReader =  new FileReader()
      fileReader.onload = ()=>{
        setPreviewUrl(fileReader.result)
        
      }
      fileReader.readAsDataURL(file)
    }

  }, [file])
  
  const [isValid , setIsValid] = useState(false)
  const filePickerRef = useRef();
  const pickImageHandler = () => {
    filePickerRef.current.click()
  };
  const pickedHandler = (event)=> {
    let pickedFile
    let fileIsValid = isValid
    if(event.target.files  && event.target.files.length === 1){
      pickedFile = event.target.files[0]
      setFile(pickedFile)
      setIsValid(true)
      fileIsValid = true
    }   else {
      setIsValid(false)
      fileIsValid = false
    }
props.onInput(props.id , pickedFile , fileIsValid)


  }
  return (
    <div>
      <input
        type="file"
        id={props.id}
        className="display-none"
        accept=".jpg , .png , .jpeg"
        ref={filePickerRef}
        onChange={pickedHandler}
   />
      <div>
        <div className="">
          {previewUrl && <img src={previewUrl} alt="preview"/>}
          {!previewUrl && <p>please add a image</p>}
        </div>
        <Button
          type="button"
          onClick={pickImageHandler}
          className="cursor-pointer rounded bg-green-500 py-2 px-3 font-semibold text-white"
        >
          add image
        </Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};
export default ImageUpload
