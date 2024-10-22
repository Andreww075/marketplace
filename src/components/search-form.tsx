import React, { useEffect, useRef, useState } from "react";
import DistancePicker from "./distance-picker";
import LabelRadioButton from "./label-radio-button";
import { Location } from "./location-picker";
import SubmitButton from "./submit-button";
import { categories, defaultRadius } from "@/libs/helpers";
import { faStore } from "@fortawesome/free-solid-svg-icons";

type Props = {
  action: (data: FormData) => void;
};

export default function SearchForm({ action }: Props) {
  const [radius, setRadius] = useState(defaultRadius);
  const [center, setCenter] = useState<Location | null>(null);
  const [prevCenter, setPrevCenter] = useState<Location | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  useEffect(() => {
    if (center && !prevCenter) {
      formRef.current?.requestSubmit();
      setPrevCenter(center);
    }
  }, [center]);
  return (
    <form
      ref={formRef}
      action={action}
      className="sm:bg-white sm:grow sm:w-1/4 p-4 sm:border-r sm:flex sm:flex-col sm:gap-4 sm:sticky sm:top-0"
    >
      <input name="phrase" type="text" placeholder="Search Marketplace" />
      <div className="flex flex-col gap-0">
        <LabelRadioButton
          name={"category"}
          value={""}
          icon={faStore}
          onClick={() => formRef.current?.requestSubmit()}
          label={"All categories"}
          defaultChecked={true}
        />
        {categories.map(({ key: categoryKey, label, icon }) => (
          <LabelRadioButton
            key={categoryKey}
            name={"category"}
            value={categoryKey}
            icon={icon}
            onClick={() => formRef.current?.requestSubmit()}
            label={label}
          />
        ))}
      </div>
      <div className="">
        <label>Filter by price</label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input name="min" type="number" placeholder="min" />
          </div>
          <div>
            <input name="max" type="number" placeholder="max" />
          </div>
        </div>
      </div>
      <div>
        <input type="hidden" name="radius" value={radius} />
        <input
          type="hidden"
          name="center"
          value={center?.lat + "-" + center?.lng}
        />
        <DistancePicker
          defaultRadius={defaultRadius}
          onChange={({ radius, center }) => {
            setRadius(radius);
            setCenter(center);
          }}
        />
      </div>
      <SubmitButton>Search</SubmitButton>
    </form>
  );
}
