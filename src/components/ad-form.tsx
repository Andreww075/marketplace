"use client";

import React, { useState } from "react";
import { createAd, updateAd } from "@/app/actions/adActions";
import AdTextInputs, { AdTexts } from "./ad-text-inputs";
import LocationPicker, { Location } from "./location-picker";
import SubmitButton from "./submit-button";
import UploadArea from "./upload-area";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UploadResponse } from "imagekit/dist/libs/interfaces";
import { redirect } from "next/navigation";

type Props = {
  id?: string | null;
  defaultFiles?: UploadResponse[];
  defaultLocation: Location;
  defaultTexts?: AdTexts;
};

const AdForm = ({
  id = null,
  defaultFiles = [],
  defaultLocation,
  defaultTexts = {},
}: Props) => {
  const [files, setFiles] = useState<UploadResponse[]>(defaultFiles);
  const [location, setLocation] = useState<Location>(defaultLocation);
  const [gpsCoords, setGpsCoords] = useState<Location | null>(null);

  function handleFindMyPositionClick() {
    navigator.geolocation.getCurrentPosition((ev) => {
      const location = { lat: ev.coords.latitude, lng: ev.coords.longitude };
      setLocation(location);
      setGpsCoords(location);
    }, console.error);
  }

  async function handleSubmit(formData: FormData) {
    formData.set("location", JSON.stringify(location));
    formData.set("files", JSON.stringify(files));
    if (id) {
      formData.set("_id", id);
    }
    const result = id ? await updateAd(formData) : await createAd(formData);
    redirect("/ad/" + result._id);
  }

  return (
    <form
      action={handleSubmit}
      className="max-w-xl mx-auto grid grid-cols-2 gap-12"
    >
      <div className="grow pt-8">
        <UploadArea files={files} setFiles={setFiles} />

        <div className="mt-8">
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="" className="mt-0 mb-0">
              Where
            </label>
            <div>
              <button
                type="button"
                onClick={handleFindMyPositionClick}
                className="border flex p-1 items-center gap-1 justify-center text-gray-600 rounded"
              >
                <FontAwesomeIcon icon={faLocationCrosshairs} />
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded overflow-hidden text-gray-400 text-center">
            <LocationPicker
              defaultLocation={defaultLocation}
              gpsCoords={gpsCoords}
              onChange={(location) => setLocation(location)}
            />
          </div>
        </div>
      </div>

      <div className="grow pt-2">
        <AdTextInputs defaultValues={defaultTexts} />
        <SubmitButton>{id ? "Save" : "Publish"}</SubmitButton>
      </div>
    </form>
  );
};

export default AdForm;
