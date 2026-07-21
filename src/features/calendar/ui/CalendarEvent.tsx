const styles = {
  TICKETING: "bg-lyricsTranslation text-grayScaleBlack100",
  CONCERT: "bg-lyricsOriginal text-grayScaleBlack100",
  MORE: "bg-grayScaleBlack80 text-grayScaleWhite",
};

export type CalendarEventType = "CONCERT" | "TICKETING" | "MORE";

type CalendarEventProps = {
  type: CalendarEventType;
  text?: string;
};

export function CalendarEvent({ type, text = "..." }: CalendarEventProps) {
  return (
    <div
      className={[
        "flex w-full items-center justify-center rounded-[2px] px-1 py-2",
        styles[type],
      ].join(" ")}
    >
      <span className="line-clamp-2 text-Caption2-sm font-semibold">
        {text}
      </span>
    </div>
  );
}
