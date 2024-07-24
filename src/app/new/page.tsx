"use client";

//import AdForm from '@/components/ad-form'

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { UploadResponse } from "imagekit/dist/libs/interfaces";
import UploadArea from "@/components/upload-area";
import AdTextInputs from "@/components/ad-text-inputs";

const locationDefault = {
  lat: 59.432226005726896,
  lng: 18.057839558207103,
}

const NewAdPage = () => {
  const [files, setFiles] = useState<UploadResponse[]>([]);

  return (
    <form className="max-w-xl mx-auto grid grid-cols-2 gap-12">
      <div className="grow pt-8">
        <UploadArea files={files} setFiles={setFiles} />

        <div className="mt-8">
          <label>
            Where is it located?
            <button className="w-full flex items-center gap-1 py-1 justify-center border border-gray-400 text-gray-600 rounded">
              <FontAwesomeIcon icon={faLocationCrosshairs} />
              <span>Share Current Location</span>
            </button>
            <div className="mt-2 bg-gray-100 p-4 min-h-12 rounded text-gray-400 text-center">
              Current Lo
            </div>
          </label>
        </div>
      </div>

      <div className="grow pt-2">
        <AdTextInputs />
        <button className="bg-blue-600 text-white rounded px-6 py-2">
          Publish
        </button>
      </div>
    </form>
  );
};

export default NewAdPage;
