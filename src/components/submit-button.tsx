import React, { ReactNode } from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({children}: {children: ReactNode}) => {
  const { pending } = useFormStatus()

  return (
    <>
      <button
        disabled={pending}
        className={(pending ? 'bg-gray-400' : 'bg-blue-600') + " mt-4 text-white px-6 py-2 rounded w-full"}>
        {pending && (
          <span>Saving...</span>
        )}
        {!pending && (
          <span>
            {children}
          </span>
        )}
      </button>
    </>
  );
};

export default SubmitButton;
