import type { Load } from "@sveltejs/kit";

interface job {
  company: string;
  period: string;
  title: string;
  info: string;
}

export const load: Load = async (event) => {
  const jobs: job[] = [
    {
      company: "Trackunit",
      period: "Apr 2020 to Current",
      title: "Software Engineer (Frontend)",
      info: `In my position at Trackunit, I am working on developing and maintaining a large
      user facing application. Some contributions to highlight could be spearheading the
      addition of e2e testing and heavy involvement in improving coding practices. I have also
      been heavily involved in builing our monorepo setup, component library and 3. party
      developer SDK.`,
    },
    {
      company: "PeopleNet",
      period: "Mar 2018 to Apr 2020",
      title: "Frontend Developer & Consultant",
      info: `I started at PeopleNet as a student worker and later became full-time. During my
      employment, I owned a lot of client interaction and problem-solving. I mainly worked
      with the development of components for MS SharePoint, using Typescript and React.`,
    },
    {
      company: "VOPU IVS",
      period: "Mar 2017 to Mar 2018",
      title: "Full-time self-employed developer",
      info: `In 2017 I quit my job at Advantage Media to start a new web development company with a
      friend. In VOPU my role was Client Communication, Sales and Frontend Development.
      Focusing on custom web applications using Typescript, Angular and Rest APIs.`,
    },
    {
      company: "Advantage Media",
      period: "Aug 2015 to Mar 2017",
      title: "Development Manager",
      info: `At Advantage media, I was in charge of frontend development of a new client-facing
      platform. Working closely with a backend developer and was in charge of 2 frontend
      developers in Brazil. Working with Typescript, Angular and REST APIs.`,
    },
    {
      company: "Habberdesign",
      period: "October 2013",
      title: "Freelance Full-stack web developer",
      info: `In 2013 I started my own company to create websites. I started by creating custom coded
      websites using HTML, CSS, JQUERY, PHP, and MYSQL for small businesses.`,
    },
  ];
  return {
    jobs,
  };
};
