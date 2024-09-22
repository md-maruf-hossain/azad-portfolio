import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../Layout/PrimaryLayout";
import Errorpage from "../Error/Errorpage";
import Home from "../Pages/Home/Home";
import Education from "../Pages/Education/Education";
import ResearchProfileAndPublications from "../Pages/ResearchProfileAndPublications/ResearchProfileAndPublications";
import Achievements from "../Pages/Achievements/Achievements";
import AcademicProjects from "../Pages/AcademicProjects/AcademicProjects";
import PeerReviewExperience from "../Pages/PeerReviewExperience/PeerReviewExperience";
import CurrentResearchInitiatives from "../Pages/CurrentResearchInitiatives/CurrentResearchInitiatives";
import Others from "../Pages/Others/Others";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/research-profile-and-publications",
        element: <ResearchProfileAndPublications />,
      },
      {
        path: "/current-research-initiatives",
        element: <CurrentResearchInitiatives />,
      },
      {
        path: "/achievements",
        element: <Achievements />,
      },
      {
        path: "/academic-projects",
        element: <AcademicProjects />,
      },
      {
        path: "/peer-review-experience",
        element: <PeerReviewExperience />,
      },
      {
        path: "/others",
        element: <Others />,
      },
    ],
  },
]);
