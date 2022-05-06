function BoardHeader() {
  return (
    <>
      <div className="h-20 bg-cover" style={{backgroundImage:'url("https://drive.google.com/thumbnail?id=1DqagJ4r1y0n91gztVF9Dm83wQ-_JZjpe")'}}>
      </div>
      <div className="bg-reddit_dark-brighter">
        <div className="mx-6 relative flex">
          <div className="h-20 w-20 rounded-full overflow-hidden relative -top-3 border-4 border-white bg-white">
            <img src="https://cdn-icons-png.flaticon.com/512/2716/2716646.png" alt=""/>
          </div>
          <div className="pt-2 pl-4">
            <h1 className="text-gray-300 text-3xl">Verite: symposium for Cybersecurity</h1>
            <h5 className="text-gray-500">v/Cybersecurity</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export  default BoardHeader;