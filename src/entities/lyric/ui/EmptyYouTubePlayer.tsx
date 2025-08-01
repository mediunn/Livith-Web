import EmptyYouTubePlayerIcon from "../../../shared/assets/EmptyYouTubePlayerIcon.svg";

function EmptyYouTubePlayer() {
  return (
    <div className="h-215 w-full">
      <img
        className="w-full h-full object-cover"
        src={EmptyYouTubePlayerIcon}
      />
    </div>
  );
}

export default EmptyYouTubePlayer;
