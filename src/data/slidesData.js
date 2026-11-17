import presentationData from '../../presentationData.json';

export const presentationMeta = presentationData.meta;

export const slides = [
  {
    id: 1,
    slug: "cover",
    title: presentationData.meta.title.toUpperCase(),
    category: "PROJECT OVERVIEW",
    theme: "maroon",
  },
  {
    id: 2,
    slug: "what-is-firebase",
    title: presentationData.slide2Firebase.title,
    category: presentationData.slide2Firebase.category,
    theme: "maroon",
  },
  {
    id: 3,
    slug: "problem",
    title: presentationData.slide3Problems.title,
    category: presentationData.slide3Problems.category,
    theme: "maroon",
  },
  {
    id: 4,
    slug: "solution",
    title: presentationData.slide4Solution.title,
    category: presentationData.slide4Solution.category,
    theme: "maroon",
  },
  {
    id: 5,
    slug: "features",
    title: presentationData.slide5Features.title,
    category: presentationData.slide5Features.category,
    theme: "pink",
  },
  {
    id: 6,
    slug: "stakeholders",
    title: presentationData.slide6Stakeholders.title,
    category: presentationData.slide6Stakeholders.category,
    theme: "pink",
  },
  {
    id: 7,
    slug: "technologies",
    title: presentationData.slide7TechStack.title,
    category: presentationData.slide7TechStack.category,
    theme: "pink",
  },
  {
    id: 8,
    slug: "methodology",
    title: presentationData.slide8Methodology.title,
    category: presentationData.slide8Methodology.category,
    theme: "maroon",
  },
  {
    id: 9,
    slug: "codebase",
    title: presentationData.slide9Codebase.title,
    category: presentationData.slide9Codebase.category,
    theme: "maroon",
  },
  {
    id: 10,
    slug: "team-and-thanks",
    title: presentationData.slide10Conclusion.title,
    category: "PROJECT CONCLUSION",
    theme: "maroon",
  }
];

export default presentationData;
