import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ticTacToe from "../../assets/tic-tac-toe.png";
import taskManager from "../../assets/task-manager.png";
import motionMate from "../../assets/motion-mate.png";
import tastyRecipeTalk from "../../assets/tasty-recipe-talk.png";
import giphyHunters from "../../assets/giphy-hunters.png";
import myPortfolio from "../../assets/portfolio.png";
import placePicker from "../../assets/placePicker.png";
import investmentCalc from "../../assets/investmentCalculator.png";
import traffic from "../../assets/traffic.png";

export default function Projects() {
  return (
    <div className="flex flex-col items-center my-8 px-4">
      <h1 className="text-2xl font-bold underline mb-6 text-center">
        My Recent Projects:
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl">
        <ProjectCard
          title="Task Manager"
          description="Task Manager allows users to manage their tasks efficiently with a user-friendly interface. Users can view tasks assigned to them, add new tasks, and mark tasks as complete. The application is structured to support enterprise needs, providing seamless management of user tasks without any friction."
          techStack="JavaScript, Angular, TypeScript, HTML, CSS"
          linkForRepo="https://github.com/TihomirDenev/Task-Manager"
          image={taskManager}
        />
        <ProjectCard
          title="Tic Tac Toe Game"
          description="Developed Tic Tac Toe game that allows two players to play, track scores, and reset the board dynamically. Built using HTML, CSS, and JavaScript, this game includes a clean and interactive interface with real-time score tracking."
          techStack="JavaScript, HTML, CSS, Object-Oriented Programming"
          linkForRepo="https://github.com/TihomirDenev/Tic-Tac-Toe"
          linkForSite="https://tic-tac-toe-mauve-nine-55.vercel.app/"
          image={ticTacToe}
        />
        <ProjectCard
          title="My Portfolio"
          description="The site is designed with a modern, responsive layout featuring a header, main content sections, and a footer. CSS styles are applied to ensure a cohesive design, with adjustments for different screen sizes using media queries."
          techStack="JavaScript, HTML, CSS"
          linkForRepo="https://github.com/TihomirDenev/Portfolio"
          image={myPortfolio}
        />
        <ProjectCard
          title="Fitness tracking application: Motion Mate"
          description="Developed fitness tracking app offers both public and private features, including an administrative section, allowing users to send friend requests, add friends, create goals and exercises, and calculate their body mass index. Utilized React Router for navigation."
          techStack="JavaScript, React, Firebase, Tailwind CSS, Daisy UI, React Router, GitHub, ESLint, JSON"
          linkForRepo="https://github.com/A58-Agents-Team1/Motion.Mate"
          linkForSite="https://a58-agents-team1.github.io/Motion.Mate//"
          image={motionMate}
        />
        <ProjectCard
          title="Forum: Tasty Recipe Talk"
          description="Developed a culinary forum featuring both public and private sections where users can register, create, edit, and comment on recipes, as well as manage their profiles and profile pictures. Included an admin panel for user management and content moderation, ensuring a secure environment. Utilized React Router for navigation."
          techStack="JavaScript, React, Firebase, Chakra UI, React Router, GitHub, ESLint, JSON"
          linkForRepo="https://github.com/A58-Agents-Team1/Tasty-Recipe-Talk"
          image={tastyRecipeTalk}
        />
        <ProjectCard
          title="Giphy Hunters"
          description="Developed a dynamic Single Page Application using the Giphy API to display trending GIFs with infinite scroll, upload and manage favorite GIFs, and showcase random GIFs for a fun user experience. Employed CSS for responsive design and optimized state management for seamless performance."
          techStack="JavaScript, HTML, CSS, API, Postman, GitHub, ESLint, JSON"
          linkForRepo="https://github.com/A58-Agents-Team1/Web-Project"
          image={giphyHunters}
        />
        <ProjectCard
          title="Place Picker"
          description="Place Picker is a dynamic web application that lets users manage and interact with a list of favorite places, offering real-time updates and robust error handling for an enhanced user experience."
          techStack="JavaScript, Angular, TypeScript, HTML, CSS, API, Server, Postman, Node.js"
          linkForRepo="https://github.com/TihomirDenev/PlacePicker"
          image={placePicker}
        />
        <ProjectCard
          title="Investment Calculator"
          description="The Investment Calculator is an intuitive web-based application that computes future investment values, providing users with year-by-year financial projections based on their inputs of initial and annual investments, expected returns, and investment duration."
          techStack="JavaScript, Angular, TypeScript, HTML, CSS"
          linkForRepo="https://github.com/TihomirDenev/InvestmentCalculator"
          image={investmentCalc}
        />
        <ProjectCard
          title="Traffic Watch"
          description="Traffic Watch is a web application for monitoring server status, visualizing traffic data, managing support tickets, including the ability to create new ones, and planning to add login features."
          techStack="JavaScript, Angular, TypeScript, HTML, CSS, Modules, Reactive Forms"
          linkForRepo="https://github.com/TihomirDenev/TrafficWatch"
          image={traffic}
        />
      </div>
    </div>
  );
}
