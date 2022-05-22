import {useEffect, useState} from "react";
import axios from "axios";
import Post from "./Post";

function Competitions() {

  return (
    <div className="bg-verite_light">
        <h1><a href="https://www.nationalccdc.org/">NCCDC: National Collegiate Cyber Defense Competition</a></h1>
            <p>Started in 2004, the National Collegiate Cyber Defense Competition was established
               with the aim of providing a template for cyber security organizations at the collegiate
               level as well as provide infrastructure for competitions between schools with cyber security organizations.
               Schools sign up for the annual competitions by first joining competition in the geographic region in which 
               they are located. Competition then proceeds from qualifiers, to regional competition, to national competition.
            </p>
        <p><span class="date">Approximate Annual Date: Jan-April</span></p>
        <br></br>
        <h1><a href="https://cansecwest.com">Pwn2Own</a></h1>
            <p>Pwn2Own is a hacking contest presented annually at the CanSecWest Conference. The contests challenge cyber security professionals to find flaws and exploit consumer software and devices. $100,000’s in prizes are available annually for contest winners.
            </p>
        <p><span class="date">Approximate Annual Date: March</span></p>
    </div>
  );
}

export default Competitions;