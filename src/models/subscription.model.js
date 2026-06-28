import mongoose, { Schema } from "mongoose";
import { User } from "./user.model";

const subscriptionModel = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, //One who is subscribing
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, //One whom is subscriber is subscribing
      ref: "User",
    },

    id: {
      // type:
    },
  },
  { timestamps: true },
);

export const Subscription = new mongoose.model(
  "Subscription",
  subscriptionModel,
);
