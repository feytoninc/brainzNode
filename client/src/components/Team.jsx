import { teamMembers } from "../config/data";
import Skeleton from "react-loading-skeleton";

function TeamMember(member) {
  return (
    <div className="mb-10">
      <div class="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
        <button class="block relative rounded-lg transition-all cursor-default">
          <img
            alt="profil"
            src={member.img}
            class="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
          />
        </button>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24 max-w-xs">
        <div class="text-center">
          <p class="text-2xl text-gray-800 dark:text-white break-normal">
            {member.name}
          </p>
          <p class="text-xl text-gray-500 dark:text-gray-200 font-light break-normal">
            {member.role}
          </p>
          <p class="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
            {!member.quote ? <Skeleton count={1}></Skeleton> : member.quote}
          </p>
        </div>
        <div class="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
          <a href={member.twitter}>
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href={member.twitter}>
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href={member.twitter}>
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

function Team() {
  return (
    <div class="p-4">
      <p class="text-center text-3xl font-bold text-gray-800">Our Team</p>
      <p class="text-center mb-32 text-xl font-normal text-gray-500">
        Meat the behind the project
      </p>
      <div class="flex items-center space-y-24 md:space-y-0 flex-col md:flex-row justify-evenly flex-wrap">
        {teamMembers.map((member) => {
          return (
            <div class="p-4 relative my-9" key={member.id}>
              {TeamMember(member)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
