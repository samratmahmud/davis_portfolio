import Title from "@/components/common/Title";
import React from "react";

const skillsPersent = [
  {
    title: "Photoshop",
    result: "95%",
  },
  {
    title: "Motion Graphic",
    result: "75%",
  },
  {
    title: "Adobe XD",
    result: "90%",
  },
  {
    title: "UX Design",
    result: "85%",
  },
  {
    title: "HTML",
    result: "80%",
  },
  {
    title: "Digital Marketing",
    result: "90%",
  },
];

function Skills() {
  return (
    <section className="bg-gray-950 py-[100px]">
      <div className="container mb-6">
        <div>
          <Title title="SKILLS" section="SKILLS" />
        </div>
        <div className="grid grid-cols-2">
          <div className="mr-6">
            <h2 className="text-5xl mb-6 text-gray-100">
              All the skills that I have in that field of work are mentioned.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
            </p>
          </div>
          <div className="flex flex-col gap-[25px]">
            {skillsPersent.map(({title, result}, index) => (
              <div key={index}>
                <div className="mb-0.5 flex justify-between gap-5">
                  <h2 className="text-[16px] text-gray-100 leading-[1.2em] font-bold">
                    {title}
                  </h2>
                  <p className="text-primary">{result}</p>
                </div>
                <div className="border-[1.5px] border-primary" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
