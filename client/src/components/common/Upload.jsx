import React, { useState, useRef, useEffect } from 'react'; 
import upload_icon from '../../assets/upload.svg'
import { BlobServiceClient } from "@azure/storage-blob";

const az_blob_connection_string = import.meta.env.VITE_AZURE_BLOB_CONNECTION_STRING
const az_blob_key = import.meta.env.VITE_AZURE_BLOB_KEY
const az_blob_container = import.meta.env.VITE_AZURE_BLOB_CONTAINER
const az_blob_sas_url = import.meta.env.VITE_AZURE_BLOB_SAS_URL
const az_blob_sas_token = import.meta.env.VITE_AZURE_BLOB_SAS_TOKEN
const blob_endpoint = import.meta.env.VITE_AZURE_BLOB_CONNECTION_URL

export default function (props){

    const selectedFile = props.selectedFile
    const setSelectedFile = props.setSelectedFile
    const fileSelected = props.fileSelected
    const setFileSelected = props.setFileSelected

    useEffect(() => {
        if (selectedFile) {
          // Do something with the selected file
          console.log(selectedFile, '...selectedFile')
        }
    }, [selectedFile, fileSelected])

    const fileInputRef = useRef(null);

        const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setSelectedFile(file);
            setFileSelected(true);          
            //uploadImageToAzure(file);
        } 
        };
    
        const handleUpload = () => {
            if (fileInputRef.current) {
              fileInputRef.current.click();
            }
        };

        const handleDrop = (event) => {
            event.preventDefault();
            const droppedFile = event.dataTransfer.files[0];
            // Check if the dropped file is an Excel file (xlsx format)
            setSelectedFile(droppedFile);
            setFileSelected(true);

        };
    
        const handleDragOver = (event) => {
            event.preventDefault();
        };

    return(<>
        <div 
              className="rounded-md bg-whitesmoke box-border max-w-[355px] w-full h-[153px] flex flex-row items-center justify-start py-2 px-6 text-center text-dimgray border-[1px] border-dashed border-darkgray"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <div 
                  className="max-w-[355px] w-full shrink flex flex-col items-center justify-center gap-[16px]"
                  onClick={handleUpload}
              >
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src={upload_icon}
                />
                <div className="relative tracking-[-0.04em] inline-block w-[229px]">
                  <span>{`Drag and drop or `}</span>
                  <span 
                    className="[text-decoration:underline] text-blueviolet cursor-pointer"
                  >
                    Browse
                  </span>
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
                accept="image/*, .pdf" // Specify the accepted file type (Excel files)
                capture="camera"
              />
            </div>
    </>)
}