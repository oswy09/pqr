import { ChevronLeft, ChevronRight } from "lucide-react";

export function PresenterControls({
  index, total, label, onPrev, onNext, onJump,
}: {
  index: number;
  total: number;
  label: string;
  onPrev: () => void;
  onNext: () => void;
  onJump: (i: number) => void;
}) {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t-2 border-black/70 px-6 py-3"
      style={{ pointerEvents: "auto" }}
    >
      <div className="grid grid-cols-3 items-center gap-4 max-w-5xl mx-auto">
        <span className="text-sm font-semibold text-black truncate">{label}</span>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={onPrev}
            disabled={index === 0}
            aria-label="Pantalla anterior"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-black/30 text-black transition-colors hover:bg-black/5 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronLeft size={17} />
          </button>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onJump(i)}
                aria-label={`Ir a pantalla ${i + 1} de ${total}`}
                aria-current={i === index}
                className="rounded-full cursor-pointer transition-all"
                style={{
                  width: i === index ? 20 : 8,
                  height: 8,
                  backgroundColor: i === index ? "#1A1A1A" : "#C7C7C7",
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={onNext}
            disabled={index === total - 1}
            aria-label="Pantalla siguiente"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-black/30 text-black transition-colors hover:bg-black/5 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronRight size={17} />
          </button>
        </div>

        <span className="text-xs text-black/50 text-right shrink-0">{index + 1} / {total}</span>
      </div>
    </div>
  );
}
