import { faImage, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, SetStateAction, useState } from "react";
import Uploader from "./uploader";
import { UploadResponse } from "imagekit/dist/libs/interfaces";
import UploadThumbnail from "./upload-thumbnail";

type Props = {
  files: UploadResponse[];
  setFiles: Dispatch<SetStateAction<UploadResponse[]>>;
};

const UploadArea = ({ files, setFiles }: Props) => {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="text-center text-gray-600 uppercase text-xs font-bold">
        Add photos of the thing you want sell:
      </h2>
      <div className="flex flex-col">
        <FontAwesomeIcon icon={faImage} className="h-24 text-gray-300" />

        <label
          onClick={() => console.log()}
          className={
            "upload-btn mt-2 border px-4 py-2 rounded inline-flex gap-1 items-center justify-center" +
            (isUploading
              ? "text-gray-400 cursor-not-allowed"
              : "border-blue-600 text-blue-600 cursor-pointer")
          }
        >
          <Uploader
            onUploadStart={() => setIsUploading(true)}
            onSuccess={(file) => {
              setFiles((prev) => [...prev, file]);
              setIsUploading(false);
            }}
          />

          {isUploading ? (
            <span>Uploading...</span>
          ) : (
            <>
              <FontAwesomeIcon icon={faPlus} className="" />
              <span>Add Photos</span>
            </>
          )}
        </label>

        <div className="flex gap-2 mt-2 flex-wrap">
          {files.map((file) => (
            <div key={file.fileId} className="size-16 rounded overflow-hidden">
              <UploadThumbnail key={file.fileId} file={file} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadArea;
