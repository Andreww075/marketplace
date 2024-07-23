'use client'

//import AdForm from '@/components/ad-form'


import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faLocationCrosshairs, faPlus } from "@fortawesome/free-solid-svg-icons";
import Uploader from "@/components/uploader";
import { UploadResponse } from "imagekit/dist/libs/interfaces";
import UploadArea from "@/components/upload-area";

/*
const locationDefault = {
  lat: 59.432226005726896,
  lng: 18.057839558207103,
}
*/
const NewAdPage = () => {
  const [files, setFiles] = useState<UploadResponse[]>([])

  return (
    <form className="max-w-xl mx-auto grid grid-cols-2 gap-12">
      <div className="grow pt-8">

        <UploadArea files={files} setFiles={setFiles} />

        <div className="mt-8">
          <label>
            Where is it located?
            <button className='w-full flex items-center gap-1 py-1 justify-center border border-gray-400 text-gray-600 rounded'>
              <FontAwesomeIcon icon={faLocationCrosshairs} />
              <span>Share Current Location</span>
            </button>
            <div className="mt-2 bg-gray-100 p-4 min-h-12 rounded text-gray-400 text-center">
              Google maps here
            </div>
          </label>
        </div>
      </div>

      <div className="grow pt-2">
        <h1>List Your Product</h1>

        <label>
          Title:
          <input type="text" placeholder="Title" />
        </label>

        <label>
          Price:
          <input type="number" placeholder="Price" />
        </label>

        <label>
          Category:
          <select name="" id="">
            <option selected disabled value="">
              Select category
            </option>
            <option value="">Cars</option>
            <option value="">Electronics</option>
            <option value="">Properties</option>
          </select>
        </label>

        <label>
          Description:
          <textarea name="" id="" placeholder="description"></textarea>
        </label>

        <label>
          Contact Information:
          <textarea
            name=""
            id=""
            placeholder="mobile: +57 000 000 0000"
          ></textarea>
        </label>

        <button className="bg-blue-600 text-white rounded px-6 py-2">
          Publish
        </button>
      </div>
    </form>
  );
};

export default NewAdPage;
