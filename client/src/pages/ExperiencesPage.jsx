import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AccountNav from "../AccountNav";

const ExperiencesPage = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios.get("/user-experiences").then(({ data }) => {
      setExperiences(data);
    });
  }, []);

  function deleteExperience(id) {
    axios.delete(`/experiences/${id}`).then(() => {
      setExperiences(experiences.filter((e) => e._id !== id));
    });
  }

  return (
    <div>
      <AccountNav />

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

      <div className="mt-4">
        {experiences.length > 0 &&
          experiences.map((experience) => (
            <div
              key={experience._id}
              className="flex gap-4 bg-gray-100 p-4 rounded-2xl"
            >
              <div className="w-32 h-32 bg-gray-300 grow-0 shrink-0">
                {experience.photos.length > 0 && (
                  <img
                    src={`http://localhost:4000/uploads/${experience.photos[0]}`}
                    className="object-cover h-full w-full"
                    alt=""
                  />
                )}
              </div>
              <div className="grow-0 shrink">
                <h2 className="text-xl">{experience.title}</h2>
                <p className="text-sm mt-2">{experience.description}</p>
                <div className="flex gap-2 mt-2">
                  <Link
                    to={`/account/experiences/${experience._id}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this experience?"
                        )
                      ) {
                        deleteExperience(experience._id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExperiencesPage;
