const Chat = ({ showAudio }: { showAudio: boolean }) => {
	const classNames = [
    'w-full',
    showAudio ? 'h-screen/2-audio md:h-screen-audio' : 'h-screen/2 md:h-screen'
  ]
  return (
    <div className="w-full md:w-1/5">
      {showAudio ? (
        <audio
          controls
          autoPlay
          className="w-full"
          src="https://booth.clubindoors.com/stream"
        >
          Your browser does not support the audio tag.
        </audio>
      ) : null}
      <iframe
        className={classNames.join(' ')}
        title="Chat room"
        src="https://hack.chat/?bangersonly"
      />
    </div>
  );
}

export default Chat