const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black text-xl P-4 px-12  rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 text-white mx-2 text-xl P-4 px-12 bg-opacity-60 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
