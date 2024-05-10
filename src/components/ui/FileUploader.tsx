'use client';

import { useState } from 'react';
import { Button } from './button';
import axios from 'axios';

const FileUploader = () => {
	const [file, setFile]:any = useState();
	const [uploaded, setUploaded]:any = useState();

	const handleFileUpload = (e:any) => { 
		const fileToUpload = e.target.files[0];
		console.log(fileToUpload);
		setFile(fileToUpload);
	}
	
	const handleFileSubmit = async (e:any) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('file', file);
		const res = await axios.post('/api/upload', formData);
		setUploaded(res.data);
	}
	
	return (
		<form
			encType="multipart/form-data"
			onSubmit={handleFileSubmit}
		>
			<div className="my-4 flex items-center justify-center w-full">
				<label
					htmlFor="dropzone-file"
					className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-bray-800 ${uploaded? 'bg-green-800' : 'bg-[#171717]'} border-gray-600 hover:border-gray-500 hover:bg-gray-600`}
				>
					{!file? <div className="flex flex-col items-center justify-center pt-5 pb-6">
						<svg
							className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 16"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
							/>
						</svg>
						<p className="mb-2 text-sm text-gray-400">
							<span className="font-semibold">Click to upload</span> or drag and
							drop
						</p>
						<p className="text-xs text-gray-400">SVG, PNG, JPG or GIF</p>
					</div> :
					<div className='text-white text-lg'>{file && file.name}</div>
					}
				</label>
				<input id="dropzone-file" type="file" className="hidden" onChange={handleFileUpload} name="file"/>
			</div>
			<h2 className="text-white font-semibold text-base">
				Attached Lab Report
			</h2>
			<Button className="bg-[#2AA8FF] text-white" type='submit'>CONTINUE</Button>
		</form>
	);
};

export default FileUploader;

