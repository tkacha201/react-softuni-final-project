import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../BookingWidget";

const ExperiencePage = () => {
  const { id } = useParams();
  const [experience, setExperience] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/experiences/${id}`).then((response) => {
      setExperience(response.data);
    });
  }, [id]);

  if (!experience) {
    return null;
  }

  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-black text-white min-h-screen">
        <div className="bg-black p-8 grid gap-4">
          <div>
            <h2 className="text-3xl">Photos of {experience.title}</h2>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="fixed right-10 top-10 flex gap-1 py-2 px-4 rounded-2xl bg-white text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                dataslot="icon"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
              Close
            </button>
          </div>
          {experience?.photos?.length > 0 &&
            experience.photos.map((photo) => (
              <div>
                <img
                  src={"http://localhost:4000/uploads/" + photo}
                  className={"w-full"}
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
      <h1 className="text-3xl">{experience.title}</h1>
      <p className=" gap-1 my-3 block font-semibold underline">
        {experience.address}
      </p>
      <div className="relative">
        <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
          <div>
            {experience.photos?.[0] && (
              <div>
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="aspect-square cursor-pointer object-cover inset-0 w-full h-full"
                  src={`http://localhost:4000/uploads/${experience.photos?.[0]}`}
                  alt=""
                />
              </div>
            )}
          </div>
          <div className="grid">
            {experience.photos?.[1] && (
              <img
                onClick={() => setShowAllPhotos(true)}
                className="aspect-square cursor-pointer object-cover"
                src={`http://localhost:4000/uploads/${experience.photos?.[1]}`}
                alt=""
              />
            )}

            <div className="overflow-hidden">
              {experience.photos?.[2] && (
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="aspect-square cursor-pointer object-cover relative top-2"
                  src={`http://localhost:4000/uploads/${experience.photos?.[2]}`}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowAllPhotos(true)}
          className="absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-500"
        >
          More Photos
        </button>
      </div>

      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="text-2xl font-semibold">Description</h2>
            {experience.description}
          </div>
          Duration: {experience.duration} <br />
          Max group size: {experience.maxGroupSize} <br />
        </div>
        <div>
          <BookingWidget experience={experience} />
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="text-2xl font-semibold">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">
          {experience.extraInfo}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
