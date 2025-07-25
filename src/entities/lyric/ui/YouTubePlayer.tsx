import YouTube, { YouTubeProps } from "react-youtube";

function YouTubePlayer() {
  const opts: YouTubeProps["opts"] = {
    height: "215",
    width: "100%",
    playerVars: {
      autoplay: 1, // 자동 활성화
      mute: 1, // 음소거 활성화 해야 자동 재생 가능
      loop: 0, // 반복재생 비활성화
    },
  };

  return (
    <div className="h-215 w-full">
      <YouTube videoId="fuwYoQTJo0Y" opts={opts} />
    </div>
  );
}

export default YouTubePlayer;
