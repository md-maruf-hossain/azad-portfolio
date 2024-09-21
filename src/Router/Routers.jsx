import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../Layout/PrimaryLayout";
import Errorpage from "../Error/Errorpage";
import Home from "../Pages/Home/Home";
import Education from "../Pages/Education/Education";
import ResearchProfileAndPublications from "../Pages/ResearchProfileAndPublications/ResearchProfileAndPublications";
import CurrentResearchProjects from "../Pages/CurrentResearchProjects/CurrentResearchProjects";
import Achievements from "../Pages/Achievements/Achievements";
import AcademicProjects from "../Pages/AcademicProjects/AcademicProjects";
import PeerReviewExperience from "../Pages/PeerReviewExperience/PeerReviewExperience";
import TrainingAndCertification from "../Pages/TrainingAndCertification/TrainingAndCertification";
import Family from "../Pages/Family/Family";
import Hobby from "../Pages/Hobby/Hobby";
import CurrentResearchInitiatives from "../Pages/CurrentResearchInitiatives/CurrentResearchInitiatives";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/education",
        element: <Education/>
      },
      {
        path: "/research-profile-and-publications",
        element: <ResearchProfileAndPublications/>
      },
      {
        path: "/current-research-projects",
        element: <CurrentResearchProjects/>
      },
      {
        path: "/current-research-initiatives",
        element: <CurrentResearchInitiatives/>
      },
      {
        path: "/achievements",
        element: <Achievements/>
      },
      {
        path: "/academic-projects",
        element: <AcademicProjects/>
      },
      {
        path: "/peer-review-experience",
        element: <PeerReviewExperience/>
      },
      {
        path: "/training-and-certificates",
        element: <TrainingAndCertification/>
      },
      {
        path: "/family",
        element: <Family/>
      },
      {
        path: "/hobbies",
        element: <Hobby/>
      }
    ],
  },
]);
