import {Link} from "react-router-dom";
import PostContent from "./PostContent";

function Post(props) {

  let postClasses = "block border rounded-md " + (props.open ? "" : "hover:border-reddit_text cursor-pointer");
  if (props.isListing) {
    postClasses += " bg-verite_light-brighter dark:bg-verite_dark-brighter p-3 mx-6 border-2 border-verite_light-brighter dark:border-verite_border";
  } else {
    postClasses += " border-none";
  }
  return (
    <div className="text-gray-500 dark:text-gray-300 pb-4">
      {props.open && (
        <div className={postClasses}>
          <PostContent {...props} />
        </div>
      )}
      {!props.open && (
        <Link to={{pathname:'/comments/'+(props.rootId || props._id),state:{commentId:(props.rootId || props._id)}}} className={postClasses}>
          <PostContent {...props} />
        </Link>
      )}


    </div>
  );
}

export default Post;