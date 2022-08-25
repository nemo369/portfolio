// /stories/pages/home.stories.jsx
import Home from "../../pages/index";
// .storybook/preview.js
import "../styles/globals.css";
export default {
  title: "Pages/Home",
  component: Home,
};

export const HomePage = () => <Home />