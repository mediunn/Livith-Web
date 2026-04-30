import { useEffect, useRef, useState } from "react";
import { SelectedConcert } from "../../../pages/SetInterestConcertPage";
import { StateWithSetter } from "../../../shared/types/props";
import Dropdown from "../../search/ui/Dropdown/Dropdown";
import styles from "../../../shared/styles/scrollbar.module.css";
import ConcertSlideNextArrow from "../../../shared/assets/ConcertSlideNextArrow.svg";
import ConcertSlidePrevArrow from "../../../shared/assets/ConcertSlidePrevArrow.svg";

interface SelectedSectionProps {
  selectedState: StateWithSetter<SelectedConcert[]>;
}

function SelectedSection({ selectedState }: SelectedSectionProps) {
  const { value: selected, setValue: setSelected } = selectedState;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const updateArrows = () => {
    const el = containerRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollWidth > el.clientWidth + el.scrollLeft + 1);
  };

  useEffect(() => {
    updateArrows();
    const el = containerRef.current;
    if (!el) return;
    const onResize = () => updateArrows();
    window.addEventListener("resize", onResize);
    el.addEventListener("scroll", updateArrows);
    return () => {
      window.removeEventListener("resize", onResize);
      el.removeEventListener("scroll", updateArrows);
    };
  }, [selected]);

  const scrollBy = (delta: number) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  const formatLabel = (label: string) =>
    label.length > 20 ? `${label.slice(0, 20)}...` : label;

  return (
    <div
      className="relative my-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {showLeft && isHovered && (
        <button
          aria-label="scroll-left"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          onClick={() => scrollBy(-200)}
        >
          <img src={ConcertSlidePrevArrow} className="w-full h-full" />
        </button>
      )}

      <div
        ref={containerRef}
        onMouseDown={(e) => e.preventDefault()}
        className={`flex flex-nowrap gap-8 overflow-x-auto overflow-y-hidden px-12 ${styles.hiddenScrollbar}`}
      >
        {selected.map((item) => (
          <Dropdown
            key={item.id}
            variant="on"
            label={formatLabel(item.title)}
            onRightIconClick={setSelected.bind(
              null,
              selected.filter((p) => p.id !== item.id),
            )}
          />
        ))}
      </div>

      {showRight && isHovered && (
        <button
          aria-label="scroll-right"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
          onClick={() => scrollBy(200)}
        >
          <img src={ConcertSlideNextArrow} />
        </button>
      )}
    </div>
  );
}

export default SelectedSection;
