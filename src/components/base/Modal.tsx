import { useEffect, type ReactNode } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  label?: string;
  size?: "md" | "lg";
};

/** Accessible modal shell: closes on Escape / backdrop click and locks background scroll. */
export default function Modal({ open, onClose, children, label = "Dialog", size = "lg" }: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto p-4 py-10 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="fixed inset-0 cursor-pointer bg-primary-950/70 backdrop-blur-sm"
      />
      <div
        className={`relative z-10 w-full overflow-hidden rounded-lg border border-background-200 bg-background-50 ${
          size === "lg" ? "max-w-3xl" : "max-w-xl"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-background-300 bg-background-50/90 text-lg text-foreground-700 transition-colors hover:border-primary-400 hover:text-primary-600"
        >
          <i className="ri-close-line" />
        </button>
        {children}
      </div>
    </div>
  );
}