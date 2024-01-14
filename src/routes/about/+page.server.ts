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
      title: "Senior Software Engineer (Frontend)",
      info: `In my position at Trackunit, I am working on developing and maintaining a large user-facing application. Some contributions to highlight could be spearheading the addition of end-to-end testing and heavy involvement in improving coding practices. I have also been heavily involved in building our monorepo setup, component library, and third-party developer SDK.`,
    },
    {
      company: "PeopleNet",
      period: "Mar 2018 to Apr 2020",
      title: "Frontend Developer & Consultant",
      info: `I began at PeopleNet as a student worker and later transitioned to full-time employment. Throughout my tenure, I had extensive client interaction and focused on problem-solving. My primary responsibilities involved developing components for MS SharePoint using Typescript and React.`,
    },
    {
      company: "VOPU IVS",
      period: "Mar 2017 to Mar 2018",
      title: "Full-time self-employed developer",
      info: `In 2017, I quit my job at Advantage Media to start a new web development company with a friend. In my role at VOPU, I handled client communication, sales, and frontend development. I focused on creating custom web applications using TypeScript, Angular, and REST APIs.`,
    },
    {
      company: "Advantage Media",
      period: "Aug 2015 to Mar 2017",
      title: "Development Manager",
      info: `At Advantage Media, I was in charge of frontend development for a new client-facing platform. I worked closely with a backend developer and was responsible for overseeing two frontend developers in Brazil. I worked with TypeScript, Angular, and REST APIs.`,
    },
    {
      company: "Habberdesign",
      period: "October 2013",
      title: "Freelance Full-stack web developer",
      info: `In 2013, I started my own company to create websites. I began by developing custom-coded websites using HTML, CSS, jQuery, PHP, and MySQL for small businesses.`,
    },
  ];
  return {
    jobs,
  };
};
