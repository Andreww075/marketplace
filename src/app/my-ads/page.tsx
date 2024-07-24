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
    <div className="container my-8 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your ads</h1>
      <div className="grid grid-cols-4 gap-x-2 gap-y-4">
        {adsDocs?.map((ad) => (
          <AdItem key={ad._id} ad={ad} />
        ))}
      </div>
    </div>
  );
};

export default MyAdsPage;
