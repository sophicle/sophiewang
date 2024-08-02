import React from "react";

const Honors = () => {
  const honors = [
    {
      title: "USA Biology Olympiad National Finalist",
      description:
        "Top 20 out of 11,000+ competitors invited to training camp for USA Team selections.",
      year: "2023, 2022",
    },
    {
      title: "Coca-Cola Scholar",
      description:
        "Selected 150 out of 91,000+ applicants for my service, leadership, and achievement.",
      year: "2023",
    },
    {
      title: "National Science Olympiad",
      description: "3rd place in Botany.",
      year: "2022",
    },
    {
      title: "National Science Bowl",
      description: "Top 16 team as captain.",
      year: "2022, 2021",
    },
  ];

  return (
    <div className="pt-4 text-lg text-white space-y-4">
      {honors.map((honor, index) => (
        <div key={index} className="flex justify-between items-center">
          <div>
            <div className="font-semibold">{honor.title}</div>
            <div className="text-sm">{honor.description}</div>
          </div>
          <div className="text-right text-sm ml-4">
            {honor.year.split(", ").map((year, i) => (
              <div key={i}>{year}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Honors;
