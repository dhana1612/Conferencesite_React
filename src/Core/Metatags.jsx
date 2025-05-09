import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const MetaTags = () => {
  const location = useLocation();
  const baseUrl = "https://icngcis.org/images/Photo2.jpg";

  const metaInfo = {
    "/": {
      title: "Next-Gen Computing & AI Systems | Home",
      description: "Explore the future of AI and Computing at ICNGCIS 2025. Join global experts in AI, ML, IoT, Cloud Computing, and more.",
      keywords: "AI conference 2025, computing systems, ICNGCIS, machine learning, artificial intelligence, intelligent systems, global tech event",
    },
    "/about": {
      title: "Next-Gen Computing & AI Systems | About the Conference",
      description: "Learn more about ICNGCIS 2025 – the vision, mission, and the team behind the international tech conference.",
      keywords: "ICNGCIS 2025, conference mission, vision, about AI conference, tech conference details",
    },
    "/about/scope": {
      title: "Next-Gen Computing & AI Systems | Scope of the Conference",
      description: "Discover the diverse topics covered at ICNGCIS 2025, including AI, ML, Big Data, and more.",
      keywords: "conference scope, AI topics, ML conference, computing scope, ICNGCIS tracks",
    },
    "/about/organizing_Committee": {
      title: "Next-Gen Computing & AI Systems | Organizing Committee",
      description: "Meet the expert organizing committee behind the ICNGCIS 2025 conference.",
      keywords: "ICNGCIS committee, conference organizers, tech conference team",
    },
    "/about/editorial_Board": {
      title: "Next-Gen Computing & AI Systems | Editorial Board",
      description: "Explore the academic and industry professionals in the ICNGCIS 2025 editorial board.",
      keywords: "editorial board, conference reviewers, ICNGCIS publications",
    },
    "/authors/journal-publication": {
      title: "Next-Gen Computing & AI Systems | Journal Publication",
      description: "Get your research published through ICNGCIS 2025. Learn about supported journals and submission guidelines.",
      keywords: "journal publication, research papers, ICNGCIS journals, academic publishing",
    },
    "/authors/key-dates": {
      title: "Next-Gen Computing & AI Systems | Key Dates",
      description: "Important ICNGCIS 2025 deadlines for paper submissions, notifications, and registrations.",
      keywords: "conference deadlines, ICNGCIS dates, paper submission deadline, registration",
    },
    "/authors/registration-details": {
      title: "Next-Gen Computing & AI Systems | Registration Details",
      description: "Check registration fees and plans for authors, students, and participants.",
      keywords: "ICNGCIS registration, conference fees, author registration, participant registration",
    },
    "/Speaker": {
      title: "Next-Gen Computing & AI Systems | Speakers",
      description: "Learn about the keynote speakers and experts presenting at ICNGCIS 2025.",
      keywords: "keynote speakers, guest speakers, ICNGCIS 2025, AI experts",
    },
    "/contact": {
      title: "Next-Gen Computing & AI Systems | Contact Us",
      description: "Contact the ICNGCIS 2025 organizing team for inquiries and support.",
      keywords: "contact ICNGCIS, conference support, tech conference help",
    },
    "/NewPaperSubmission": {
      title: "Next-Gen Computing & AI Systems | Paper Submission",
      description: "Submit your original research papers to ICNGCIS 2025 for review and publication.",
      keywords: "paper submission, research paper, ICNGCIS 2025, submit paper, AI research",
    },
    "/authors/new-paper-submissions": {
      title: "Next-Gen Computing & AI Systems | Paper Submission",
      description: "Submit your original research papers to ICNGCIS 2025 for review and publication.",
      keywords: "paper submission, research paper, ICNGCIS 2025, submit paper, AI research",
    },
  };

  const normalizePath = (path) => path.toLowerCase().replace(/\/+$/, "");
  const normalizedPath = normalizePath(location.pathname);

  const matchedPath = Object.keys(metaInfo).find(
    (key) => normalizePath(key) === normalizedPath
  );

  const { title, description, keywords } = matchedPath
    ? metaInfo[matchedPath]
    : metaInfo["/"];

  const image = baseUrl;
  const url = `https://icngcis.org${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default MetaTags;
