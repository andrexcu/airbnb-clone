import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (id: string) => void;
}

const CategoryInput = ({
  onClick,
  selected,
  label,
  icon: Icon,
}: CategoryInputProps) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
              rounded-xl
              border-2
              p-4
              flex
              flex-col
              gap-3
              hover:border-black
              transition
              cursor-poiinter
              ${selected ? "border-black" : "border-neutral-200"}
            `}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;