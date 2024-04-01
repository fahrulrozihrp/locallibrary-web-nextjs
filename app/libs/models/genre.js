import mongoose from "mongoose";
// const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
});

GenreSchema.virtual("url").get(function () {
  return `/dashboard/genre/${this._id}`;
});

const Genre = mongoose.models.Genre || mongoose.model("Genre", GenreSchema);

export default Genre;
