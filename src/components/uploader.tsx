"use client";

import React from "react";
import { IKContext, IKUpload } from "imagekitio-react";
import { IKUploadProps } from "imagekitio-react/dist/types/components/IKUpload/props";

const Uploader = (props: IKUploadProps) => {
  return (
    <>
      <IKContext 
        urlEndpoint={process.env.NEXT_PUBLIC_IK_ENDPOINT}
        publicKey={process.env.NEXT_PUBLIC_IK_PUBLIC_KEY as string}
        authenticator={async () => {
          const response = await fetch('/api/imagekit/auth');
          return await response.json();
        }}
      >
        <IKUpload {...props} />
      </IKContext>
    </>
  );
};

export default Uploader;
