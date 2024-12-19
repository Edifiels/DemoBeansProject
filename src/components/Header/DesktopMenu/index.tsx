import { Link } from "react-router-dom";

export const DesktopMenu = () => {
  return (
    <nav>
      <Link to="/DemoBeansProject/beans">Beans</Link>
      <Link to="/DemoBeansProject/facts">Facts</Link>
      <Link to="/DemoBeansProject/recipes">Recipes</Link>
      <Link to="/DemoBeansProject/combinations">Combinations</Link>
      <Link to="/DemoBeansProject/history">History</Link>
    </nav>
  );
};
