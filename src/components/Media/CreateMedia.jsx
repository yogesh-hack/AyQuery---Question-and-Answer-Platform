import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { GrGallery } from "react-icons/gr";

const CreateMedia = () => {
    const [files, setFiles] = useState([]);
    const [caption, setCaption] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [location, setLocation] = useState('');
    const [post, setPost] = useState('Post now');

    const onDrop = useCallback((acceptedFiles) => {
        setFiles(prev => [
            ...prev,
            ...acceptedFiles.map(file =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            )
        ]);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'image/*': [],
            'video/*': []
        },
        multiple: true
    });

    const handleDelete = (index) => {
        setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    };
    const openModal = (file) => {
        setSelectedFile(file);
    };

    const closeModal = () => {
        setSelectedFile(null);
    };
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-xl p-6 my-auto text-center h-80 cursor-pointer dark:border-gray-600 flex items-center justify-center">
    <input {...getInputProps()} />
    <GrGallery className="w-36 h-36" />
    <p className="text-gray-400 dark:text-gray-500">Drag and Drop your Media</p>
</div>

<div className="flex mt-4 space-x-2 overflow-x-auto">
                {files.map((file, index) => (
                    <div key={index} className="relative w-16 h-16 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 group">
                        {/* Delete Button */}
                        <div
                            className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full cursor-pointer dark:border-gray-900"
                            onClick={() => handleDelete(index)} // Call delete logic
                        >
                            X
                        </div>

                        <div onClick={() => openModal(file)} className="cursor-pointer">
                            {file.type.startsWith('image/') ? (
                                <img
                                    src={file.preview}
                                    alt="preview"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <video
                                    src={file.preview}
                                    className="w-full h-full object-cover"
                                    poster={file.preview} controls={false}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            </div>

            <div>
                
<div class="flex mb-3 items-start gap-2.5">
   <div class="flex w-full flex-col gap-1">
      <div class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
         <div class="flex items-center space-x-3 rtl:space-x-reverse">
         <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie Green image"/>
            <span class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
         </div>
            <div class="w-full pt-2 me-2">
               <textarea
    value={caption}
    rows={8}
    onChange={(e) => setCaption(e.target.value)}
    placeholder="Caption"
    className="w-full mb-3 p-2 border border-gray-200 rounded-md dark:border-gray-700 dark:bg-gray-700 dark:text-white"
/>
         </div>
         <span class="text-sm font-normal text-gray-500 dark:text-gray-400">write caption about what you uploads</span>
      </div>
   </div>
</div>

           

                <input
                    type="text"
                    value={location}
                    placeholder='Location'
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full mb-3 p-2 border border-gray-200 rounded-md dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                />

                <button  className="w-full bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:opacity-90">
                    Post Media
                </button>
            </div>
            {selectedFile && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative bg-white p-4 rounded-lg max-w-3xl">
                        <button
                            onClick={closeModal}
                            className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full cursor-pointer dark:border-gray-900"
                        >
                            X
                        </button>

                        {/* Display the larger image or video */}
                        {selectedFile.type.startsWith('image/') ? (
                            <img
                                src={selectedFile.preview}
                                alt="preview"
                                className="w-80 h-80"
                            />
                        ) : (
                            <video
                                src={selectedFile.preview}
                                className="w-full h-auto" autoPlay
                                controls
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateMedia;
