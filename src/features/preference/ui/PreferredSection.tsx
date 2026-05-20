import { StateWithSetter } from "../../../shared/types/props";
import Dropdown from "../../search/ui/Dropdown/Dropdown";

interface PreferredSectionProps {
  preferredState: StateWithSetter<{ id: number; label: string }[]>;
}

function PreferredSection({ preferredState }: PreferredSectionProps) {
  const { value: preferred, setValue: setPreferred } = preferredState;

  return (
    <div
      onMouseDown={(e) => e.preventDefault()}
      className="flex flex-wrap gap-10 my-10"
    >
      {preferred.map((item) => (
        <Dropdown
          key={item.id}
          variant="on"
          label={item.label}
          onRightIconClick={setPreferred.bind(
            null,
            preferred.filter((p) => p.id !== item.id),
          )}
        />
      ))}
    </div>
  );
}

export default PreferredSection;
