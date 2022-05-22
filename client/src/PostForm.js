import Avatar from "./avatar.png";
import {useContext} from "react";
import PostFormModalContext from "./PostFormModalContext";

function PostForm() {
  const modalContext = useContext(PostFormModalContext);
  return (
    <div className="bg-verite_light  dark:bg-verite_dark px-6 py-4 text-gray-400">

      <div className="border border-verite_light-brighter dark:border-verite_border p-2 rounded-md flex bg-verite_light-brighter dark:bg-verite_dark-brighter">
        <div className=" rounded-full bg-verite_dark-brighter overflow-hidden w-10 h-10">
          <img src={Avatar} alt="" style={{filter:'invert(100%)'}} />
        </div>
        <form action="" className="flex-grow bg-verite_light dark:bg-verite_dark-brightest border border-verite_light-brighter dark:border-verite_border ml-4 mr-2 rounded-md">
          <input type="text"
                 onFocus={e => {
                   e.preventDefault();
                   modalContext.setShow(true);
                 }}
                 className="bg-verite_light-brightest dark:bg-verite_dark-brightest p-2 px-3 text-sm block w-full rounded-md" placeholder="New post" />
        </form>
      </div>

    </div>
  );
}

export default PostForm;