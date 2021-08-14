const Video = ({ src }: { src: string }) => {
  return (
    <div className="w-full md:w-4/5 bg-black relative h-screen/2 md:h-auto">
      <iframe
        className="w-full h-screen/2 md:h-screen"
        src={src}
        title="Video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default Video;