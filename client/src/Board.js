import BoardHeader from "./BoardHeader";
import PostForm from "./PostForm";
import PostsListing from "./PostsListing";

function Board() {
  console.log("The flag format is keyword{random_code} LOOK FOR THE KEYWORD AT THE PLACE WHERE YOU CAN USE THE KEY TO ACCESS THIS WORLD.")
  return (<div>
    <BoardHeader />
    <PostForm />
    <PostsListing />
  </div>);
}

export default Board;