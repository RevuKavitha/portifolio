/**
 * Academic Journey — edit `academicMilestones` below (years, titles, details, tags).
 * Optional `institution`: school or college name; shown under the subtitle when set.
 */
export type AcademicMilestone = {
  station: string;
  year: string;
  title: string;
  subtitle: string;
  institution?: string;
  details: string;
  tags: string[];
};

export const academicMilestones: AcademicMilestone[] = [
  {
    station: "10TH CLASS",
    year: "2018",
    title: "10th Class",
    subtitle: "Secondary School",
    institution: "Dr. K. R. Narayanan Govt High School, Yanam",
    details: "Passed in 2018 with a GPA of 9.2.",
    tags: ["SSC", "GPA 9.2", "Yanam"]
  },
  {
    station: "12TH CLASS",
    year: "2020",
    title: "12th Class",
    subtitle: "Higher Secondary",
    institution: "Sri Sai Junior College, Yanam",
    details: "Passed in 2020 with a GPA of 8.0.",
    tags: ["Intermediate", "GPA 8.0", "Yanam"]
  },
  {
    station: "B.TECH",
    year: "2024",
    title: "B.Tech",
    subtitle: "Undergraduate Degree",
    institution: "Puducherry Technological University, Puducherry",
    details: "Passed in 2024 with a CGPA of 8.13.",
    tags: ["B.Tech", "CGPA 8.13", "PTU"]
  },
  {
    station: "M.TECH",
    year: "Present",
    title: "M.Tech",
    subtitle: "Postgraduate (Ongoing)",
    institution: "Puducherry Technological University, Puducherry",
    details: "Currently pursuing M.Tech. First semester completed with a CGPA of 9.58.",
    tags: ["M.Tech", "CGPA 9.58", "Ongoing"]
  }
];
