import {useEffect, useState} from "react";
import axios from "axios";
import Post from "./Post";

function Competitions() {

  return (
    <div className="h-screen bg-verite_light dark:bg-verite_dark text-gray-500 dark:text-gray-300 px-6 py-4 ">
 <div className="bg-verite_light-brighter  dark:bg-verite_dark-brighter text-gray-600 dark:text-gray-300   rounded-md my-2 px-6 py-4">
        <h1 className=" underline  hover:no-underline font-bold  text-xl"><a href="https://www.nationalccdc.org/">NCCDC: National Collegiate Cyber Defense Competition</a></h1>
            <p className="font-semibold text-gray-500 dark:text-gray-400">Started in 2004, the National Collegiate Cyber Defense Competition was established
               with the aim of providing a template for cyber security organizations at the collegiate
               level as well as provide infrastructure for competitions between schools with cyber security organizations.
               Schools sign up for the annual competitions by first joining competition in the geographic region in which 
               they are located. Competition then proceeds from qualifiers, to regional competition, to national competition.
            </p>

        <p><span class="date font-bold">Approximate Annual Date: Jan-April</span></p>
        </div>
        <div className="bg-verite_light-brighter  dark:bg-verite_dark-brighter text-gray-600 dark:text-gray-300    rounded-md my-3 px-6 py-4">
        <h1 className=" underline hover:no-underline font-bold  text-xl" ><a href="https://cansecwest.com">Pwn2Own</a></h1>
            <p className="font-semibold text-gray-500 dark:text-gray-400 ">Pwn2Own is a hacking contest presented annually at the CanSecWest Conference. The contests challenge cyber security professionals to find flaws and exploit consumer software and devices. $100,000’s in prizes are available annually for contest winners.
            </p>
        <p><span class="date font-bold">Approximate Annual Date: March</span></p>
    </div>
    </div>

  );
}

export default Competitions;