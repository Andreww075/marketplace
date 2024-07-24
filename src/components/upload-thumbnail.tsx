import { UploadResponse } from "imagekit/dist/libs/interfaces";
import React from "react";
import MyImage from "./my-image";

type Props = {
  file: UploadResponse;
  onClick?: () => void;
};

const UploadThumbnail = ({ file, onClick }: Props) => {
  function handleClick(ev: React.MouseEvent) {
    if (onClick) {
      ev.preventDefault();
      return onClick();
    }
    location.href = file.url;
  }

  if (file.fileType === "image") {
    return (
      <a onClick={handleClick} target="_blank">
        <MyImage
          width={300}
          height={300}
          alt={"product thumbnail"}
          aiCrop={true}
          src={file.filePath}
        />
      </a>
    );
  }

  return <div>{file.url} &raquo;</div>;
};

export default UploadThumbnail;
