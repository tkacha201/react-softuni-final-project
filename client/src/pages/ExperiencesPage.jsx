import { Link, useParams } from "react-router-dom";
import ExperiencesFormPage from "./ExperiencesFormPage";
import AccountNav from "../AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";

const ExperiencesPage = () => {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    axios.get("/user-experiences").then(({ data }) => {
      setExperiences(data);
    });
  }, []);
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
            <Link
              key={experience._id}
              to={"/account/experiences/" + experience._id}
              className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl"
            >
              <div className="w-32 h-32 bg-gray-300 grow shrink-0">
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
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ExperiencesPage;
