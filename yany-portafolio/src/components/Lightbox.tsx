import { useRef, useState, type MouseEvent } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/portfolio";

/** How much bigger than its file size a zoomed screenshot is drawn. */
const ZOOM = 1.75;

type LightboxProps = {
  project: Project | null;
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  /** The control that opened the viewer; focus returns to it on close. */
  returnFocus?: HTMLElement | null;
};

export function Lightbox({ project, index, onIndexChange, onClose, returnFocus }: LightboxProps) {
  const [zoomed, setZoomed] = useState(false);
  const viewport = useRef<HTMLDivElement>(null);

  const image = project?.images[index];
  const count = project?.images.length ?? 0;

  const go = (step: number) => {
    if (count < 2) return;
    setZoomed(false);
    onIndexChange((index + step + count) % count);
  };

  // Zoom toward the point that was clicked, so the detail stays under the cursor.
  const toggleZoom = (event?: MouseEvent<HTMLImageElement>) => {
    const box = viewport.current;
    if (zoomed || !box || !event) {
      setZoomed(!zoomed);
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    const fx = (event.clientX - rect.left) / rect.width;
    const fy = (event.clientY - rect.top) / rect.height;
    setZoomed(true);
    requestAnimationFrame(() => {
      box.scrollLeft = fx * box.scrollWidth - box.clientWidth / 2;
      box.scrollTop = fy * box.scrollHeight - box.clientHeight / 2;
    });
  };

  return (
    <Dialog
      open={project !== null}
      onOpenChange={(open) => {
        if (!open) {
          setZoomed(false);
          onClose();
        }
      }}
    >
      <DialogContent
        showCloseButton={false}
        onCloseAutoFocus={(event) => {
          if (!returnFocus) return;
          event.preventDefault();
          returnFocus.focus();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") go(1);
          if (event.key === "ArrowLeft") go(-1);
        }}
        className="flex h-[100svh] max-w-none flex-col gap-0 overflow-hidden rounded-none bg-background p-0 ring-0 sm:h-[94svh] sm:w-[min(96vw,90rem)] sm:max-w-none sm:rounded-md"
      >
        {project && image && (
          <>
            <div className="flex items-center justify-between gap-4 px-4 py-2 sm:px-6">
              <div className="min-w-0">
                <DialogTitle className="truncate text-base font-medium">
                  {project.title}
                  {image.label && <span className="text-muted-foreground"> · {image.label}</span>}
                </DialogTitle>
                <DialogDescription className="sr-only">{image.alt}</DialogDescription>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <Button
                  variant="ghost"
                  onClick={() => toggleZoom()}
                  aria-pressed={zoomed}
                  className="h-11 gap-2 px-3 text-sm"
                >
                  {zoomed ? <ZoomOut aria-hidden /> : <ZoomIn aria-hidden />}
                  {zoomed ? "Fit to screen" : "Zoom in"}
                </Button>
                <DialogClose asChild>
                  <Button variant="ghost" aria-label="Close" className="size-11">
                    <X aria-hidden className="size-5" />
                  </Button>
                </DialogClose>
              </div>
            </div>

            <div
              ref={viewport}
              className={cn(
                "relative flex-1 overflow-auto overscroll-contain",
                !zoomed && "flex items-center justify-center p-4 sm:p-8",
              )}
              style={{ backgroundColor: project.field }}
            >
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                onClick={toggleZoom}
                className={cn(
                  "rounded-sm select-none",
                  zoomed
                    ? "max-w-none cursor-zoom-out"
                    : "max-h-full max-w-full cursor-zoom-in object-contain",
                )}
                style={zoomed ? { width: image.width * ZOOM, height: "auto" } : undefined}
              />
            </div>

            {count > 1 && (
              <div className="flex items-center justify-between gap-4 px-4 py-2 sm:px-6">
                <Button variant="ghost" onClick={() => go(-1)} className="h-11 gap-1 px-3 text-sm">
                  <ChevronLeft aria-hidden />
                  Previous
                </Button>
                <p className="text-sm text-muted-foreground" aria-live="polite">
                  {index + 1} of {count}
                </p>
                <Button variant="ghost" onClick={() => go(1)} className="h-11 gap-1 px-3 text-sm">
                  Next
                  <ChevronRight aria-hidden />
                </Button>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
