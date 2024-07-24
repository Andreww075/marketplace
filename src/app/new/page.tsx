"use client";

import AdForm from '@/components/ad-form'

const locationDefault = {
  lat: 59.432226005726896,
  lng: 18.057839558207103,
}

const NewAdPage = () => {
  return (
    <AdForm defaultLocation={locationDefault} />
  );
};

export default NewAdPage;
