import React from "react";

const AdTextInputs = () => {
  return (
    <>
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
    </>
  );
};

export default AdTextInputs;
