import { PointerEvent } from "react";

export function useSmartClickDrag({
  onClick,
  onPointerDown,
}: {
  onClick: () => void;
  onPointerDown: any;
}) {
  return (e: React.PointerEvent<HTMLElement>) => {
    // Prevent firing if clicking on a button (e.g., delete icon)
    if ((e.target as HTMLElement).closest("button")) return;

    let moved = false;

    const handlePointerMove = () => {
      moved = true;
      document.removeEventListener("pointermove", handlePointerMove);
    };

    const handlePointerUp = () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);

      if (!moved) {
        onClick();
      }
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);

    // Forward event to drag logic
    onPointerDown?.(e);
  };
}
