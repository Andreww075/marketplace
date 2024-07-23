//import AdForm from '@/components/ad-form'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faLocationCrosshairs, faPlus } from "@fortawesome/free-solid-svg-icons";

/*
const locationDefault = {
  lat: 59.432226005726896,
  lng: 18.057839558207103,
}
*/
const NewAdPage = () => {
  return (
    <form action="" className="max-w-xl mx-auto flex gap-8">
      <div className="grow pt-8">
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-center text-gray-600 uppercase text-xs font-bold">
            Add photos of the thing you want sell:
          </h2>
          <div className="flex flex-col">
            <FontAwesomeIcon icon={faImage} className="h-24 text-gray-300" />
            <button className="border border-blue-600 text-blue-600 rounded px-4 py-2 inline-flex gap-1 items-center justify-center">
              <FontAwesomeIcon icon={faPlus} className="" />
              <span>Add Photos</span>
            </button>
          </div>
        </div>

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
