"use server";

import React from "react";
import AdItem from "@/components/ad-item";
import { authOptions } from "@/libs/authOptions";
import { connect } from "@/libs/helpers";
import { AdModel } from "@/models/Ad";
import { getServerSession } from "next-auth";

const MyAdsPage = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  if (!email) {
    return "no email found";
  }

  await connect();

  const adsDocs = await AdModel.find({ userEmail: email });

  return (
    <div className="sm:container sm:my-8 sm:mx-auto sm:bg-white">
      <h1 className="text-2xl font-bold mb-4 sm:text-3xl text-center">Your ads</h1>
      <div className="w-full gap-y-10 flex flex-col items-center sm:grid sm:grid-cols-4 sm:gap-x-2 sm:gap-y-4">
        {adsDocs?.map((ad) => (
          <AdItem key={ad._id} ad={ad} />
        ))}
      </div>
    </div>
  );
};

export default MyAdsPage;
