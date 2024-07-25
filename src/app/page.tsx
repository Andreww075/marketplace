"use client";

import AdItem from "@/components/ad-item";
import SearchForm from "@/components/search-form";
import { defaultRadius } from "@/libs/helpers";
import { Ad } from "@/models/Ad";
import { useState } from "react";

export default function Home() {
  const [ads, setAds] = useState<Ad[] | null>(null);
  const [adsParams, setAdsParams] = useState<URLSearchParams>(
    new URLSearchParams()
  );

  function fetchAds(params?: URLSearchParams) {
    if (!params) {
      params = new URLSearchParams();
    }
    if (!params.get("center")) {
      return;
    }
    if (!params.has("radius")) {
      params.set("radius", defaultRadius.toString());
    }
    const url = `/api/ads?${params?.toString() || ''}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((adsDocs) => {
        console.log(adsDocs)
        setAds(adsDocs);
        setAdsParams(params);
      })
      .catch((error) => {
        console.error("Error fetching ads:", error);
      });
  }

  function handleSearch(formData: FormData) {
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === "string") {
        params.set(key, value);
      }
    });
    fetchAds(params);
  }

  const formDirty =
    adsParams.get("phrase") ||
    adsParams.get("category") ||
    adsParams.get("min") ||
    adsParams.get("max");

  return (
    <div className="sm:flex sm:w-full sm:justify-center">
      <SearchForm action={handleSearch} />
      <div className="w-full grow sm:p-4 sm:bg-gray-100 sm:w-3/4">
        <h2 className="font-bold mt-2 mb-4 text-center text-2xl sm:text-3xl">
          {formDirty ? "Search results" : "Latest ads"}
        </h2>
        <div className="w-full flex items-center flex-col gap-y-10 sm:grid md:grid-cols-4 sm:gap-x-4 sm:gap-y-6">
          {ads && ads.map((ad) => <AdItem key={ad._id} ad={ad} />)}
        </div>
        {ads && ads?.length === 0 && (
          <div className="text-gray-400">No products found</div>
        )}
        {ads === null && <div className="text-gray-400">Loading...</div>}
      </div>
    </div>
  );
}
