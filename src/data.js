export const open_source_topics = [
  { title: "C", className: "c" },
  { title: "Javascript", className: "javascript" },
  { title: "Go", className: "go" },
  { title: "Ruby", className: "ruby" },
  { title: "Python", className: "python" },
];

export const topics = [
  { title: "Development", className: "development" },
  { title: "System", className: "system" },
  { title: "Tools", className: "tools" },
  { title: "Data Science", className: "data-science" },
  { title: "Blockchain", className: "blockchain" },
  { title: "Mobile", className: "mobile" },
  { title: "Awesome Lists", className: "list" },
  { title: "Social", className: "social" },
  { title: "Visual", className: "visual" },
  {
    title: "Open source",
    className: "open-source",
    children: open_source_topics,
  },
  { title: "All topics", className: "all" },
];
