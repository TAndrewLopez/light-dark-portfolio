import { useTheme } from "next-themes";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <img
        src="/images/aiGenerated02.jpeg"
        alt="Dev Image"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green-default">Andrew </span>Dobson
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Fullstack Engineer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full dark:bg-dark-200"
        href=""
        download="name">
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>

      {/* ICONS */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-default md:w-full">
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>United States</span>
        </div>
        <p className="my-2">tandrewlopez@gmail.com</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-default to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:tandrewlopez@gmail.com")}>
        Email Me
      </button>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-default to-blue-400 focus:outline-none"
        onClick={changeTheme}>
        {theme === "dark" ? "Light UI" : "Dark UI"}
      </button>
    </div>
  );
};

export default Sidebar;
