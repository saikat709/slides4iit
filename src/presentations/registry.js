import PresentationLayout from '../components/PresentationLayout.jsx';

export const ownerInfo = {
  name: 'Md. Saikat Islam',
  institution: 'IIT, DU',
  fullNameInstitution: 'Institute of Information Technology, University of Dhaka',
  degree: 'Bachelor of Science in Software Engineering (BSSE)',
  semester: '5th Semester',
  role: 'Software Engineering Undergrad & Developer',
  github: 'https://github.com/saikat-islam',
};

export const presentations = [
  {
    id: 'flamebase1',
    slug: 'flamebase1',
    aliases: ['flamebase', 'flamebase-project-proposal'],
    title: 'Flamebase Project Proposal',
    subtitle: 'SPL-2 Project Proposal',
    tagline: 'Open-source, faster Firebase alternative in Rust',
    description: 'An open-source, self-hosted, faster, and optimized Firebase alternative built in Rust with redb and Axum.',
    course: 'Software Project Lab 2 (SPL-2)',
    semester: '5th Semester',
    badge: 'SPL-2 Proposal',
    featured: true,
    slideCount: 10,
    presenters: [
      { name: 'Md. Saikat Islam', role: 'Developer', lead: true },
      { name: 'Md. Afif Hasan', role: 'Developer' }
    ],
    supervisor: {
      name: 'Mridha Md. Nafis Fuad',
      role: 'Project Supervisor / Faculty Advisor',
      institution: 'IIT, DU'
    },
    tags: ['Rust', 'Axum', 'redb', 'Firebase BaaS', 'SPL-2'],
    githubUrl: 'https://github.com/flamebase-org/flamebase',
    component: PresentationLayout,
  }
];

export function getAllPresentations() {
  return presentations;
}

export function getPresentationBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return presentations.find(
    (p) => p.slug.toLowerCase() === normalized || (p.aliases && p.aliases.map(a => a.toLowerCase()).includes(normalized))
  ) || null;
}
