import React from "react";
import { categories } from "@/libs/helpers";

export type AdTexts = {
  title?: string;
  price?: string | number;
  category?: string;
  description?: string;
  contact?: string;
};

type Props = {
  defaultValues: AdTexts;
};

const AdTextInputs = ({ defaultValues }: Props) => {
  return (
    <>
      <label>
        Title:
        <input
          name="title"
          type="text"
          placeholder="Title"
          defaultValue={defaultValues.title}
        />
      </label>

      <label>
        Price:
        <input
          name="price"
          type="number"
          placeholder="Price"
          defaultValue={defaultValues.price}
        />
      </label>

      <label>
        Category:
        <select name="category" defaultValue={defaultValues.category || "0"}>
          <option selected disabled value="0">
            Select category
          </option>
          {categories.map(({ key: categoryKey, label: categoryLabel }) => (
            <option key={categoryKey} value={categoryKey}>
              {categoryLabel}
            </option>
          ))}
        </select>
      </label>

      <label>
        Description:
        <textarea
          name="description"
          placeholder="description"
          defaultValue={defaultValues.description}
        ></textarea>
      </label>

      <label>
        Contact Information:
        <textarea
          name="contact"
          placeholder="mobile: +57 000 000 0000"
          defaultValue={defaultValues.contact}
        ></textarea>
      </label>
    </>
  );
};

export default AdTextInputs;
