import React, { useEffect, useState } from "react";
import PhotosUploader from "../PhotosUploader";
import Perks from "../Perks";
import AccountNav from "../AccountNav";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

const ExperiencesFormPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [duration, setDuration] = useState("");
  const [maxGroupSize, setMaxGroupSize] = useState("");
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/experiences/" + id).then((response) => {
      const { data } = response;
      setTitle(data.title);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setDuration(data.duration);
      setMaxGroupSize(data.maxGroupSize);
    });
  }, [id]);
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

  async function saveExperience(e) {
    e.preventDefault();
    const experienceData = {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      duration,
      maxGroupSize,
    };
    if (id) {
      await axios.put("/experiences", {
        id,
        ...experienceData,
      });
      setRedirect(true);
    } else {
      await axios.post("/experiences", experienceData);
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/account/experiences"} />;
  }
  return (
    <div>
      <AccountNav />
      <form onSubmit={saveExperience}>
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
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
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
              type="text"
              value={maxGroupSize}
              onChange={(e) => setMaxGroupSize(e.target.value)}
              placeholder="15"
            />
          </div>
        </div>
        <button className="primary my-4">Post</button>
      </form>
    </div>
  );
};

export default ExperiencesFormPage;
