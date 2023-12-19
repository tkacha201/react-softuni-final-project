import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../Image.jsx";

export default function IndexPage() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios.get("/experiences").then((response) => {
      setExperiences(response.data);
    });
  }, []);

  return (
    <div className="mt-8 grid gap-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {experiences.length > 0 &&
        experiences.map((exp) => (
          <Link to={`/experience/${exp._id}`} key={exp._id}>
            <div className="bg-gray-500 mb-2 rounded-2xl flex">
              {exp.photos?.[0] && (
                <Image
                  className="rounded-2xl object-cover aspect-square"
                  src={exp.photos?.[0]}
                  alt=""
                />
              )}
            </div>
            <h2 className="font-bold">{exp.title}</h2>
            <h3 className="text-sm text-gray-500">{exp.address}</h3>

            <div className="mt-1">
              <span className="font-bold">€{exp.price}</span> per person
            </div>
          </Link>
        ))}
    </div>
  );
}
