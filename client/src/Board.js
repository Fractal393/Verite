import BoardHeader from "./BoardHeader";
import PostForm from "./PostForm";
import PostsListing from "./PostsListing";

function Board() {
  console.log("The flag format is keyword{random_code} KEYWORD = dmVyaXRl (seems easy does it not?) \nWant the random_code look for it at the place where you can voice your thoughts.");
  return (<div>
    <BoardHeader />
    <PostForm />
    <PostsListing />
  </div>);
}

export default Board;