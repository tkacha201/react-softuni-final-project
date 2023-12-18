import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../Perks";
import axios from "axios";

const ExperiencesPage = () => {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [duration, setDuration] = useState("");
  const [maxGroup, setMaxGroup] = useState(1);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function addPhotoByLink(e) {
    e.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    setAddedPhotos((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  }

  function uploadPhoto(e) {
    const files = e.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    axios
      .post("/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filenames } = response;
        setAddedPhotos((prev) => {
          return [...prev, ...filenames];
        });
      });
  }

  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
            to={"/account/experiences/new"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new experience
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            {preInput("Title", " Captivate your guests with a fun title")}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title, for example: My Awesome Experience"
            />
            {preInput("Address", "Where can people find you?")}
            <input
              type="text"
              placeholder="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {preInput("Photos", "Add some photos of your experience")}
            <div className="flex gap-2">
              <input
                value={photoLink}
                onChange={(e) => setPhotoLink(e.target.value)}
                type="text"
                placeholder={"Add via link..."}
              />
              <button
                onClick={addPhotoByLink}
                className="bg-gray-200 px-4 rounded-2xl"
              >
                Add&nbsp;photo
              </button>
            </div>
            <div className=" mt-2 grid gap-2 grid-cols-3 | md:grid-columns-4 lg:grid-cols-6">
              {addedPhotos.length > 0 &&
                addedPhotos.map((link) => (
                  <div className="h-32 flex">
                    <img
                      className="rounded-2xl w-full object-cover"
                      src={"http://localhost:4000/uploads/" + link}
                    />
                  </div>
                ))}
              <label className="h-32 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={uploadPhoto}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                  />
                </svg>{" "}
                Upload
              </label>
            </div>
            {preInput("Description", "Tell us about your experience")}
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {preInput("Perks", "What's included?")}
            <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <Perks selected={perks} onChange={setPerks} />
            </div>
            {preInput(
              "Extra info",
              "Provide any additional details or special instructions"
            )}
            <textarea
              value={extraInfo}
              onChange={(e) => setExtraInfo(e.target.value)}
            />
            {preInput(
              "Duration & Max Group Size",
              "Specify the duration of the experience and the maximum size of the participant group."
            )}
            <div className="grid gap-2 sm:grid-cols-2">
              <div>
                <h3 className="mt-2 -mb-1">Duration</h3>
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="About 2 hours"
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Max group size</h3>
                <input
                  type="number"
                  value={maxGroup}
                  onChange={(e) => setMaxGroup(e.target.value)}
                  placeholder="15 per group"
                />
              </div>
            </div>
            <button className="primary my-4">Post</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ExperiencesPage;
