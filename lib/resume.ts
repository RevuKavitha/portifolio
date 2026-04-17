export const RESUME_FILENAME = "Revu_Kavitha_Resume.pdf";
export const RESUME_PUBLIC_PATH = `/${RESUME_FILENAME}`;

/** Triggers direct resume download from the public folder. */
export function downloadResume() {
  if (typeof document === "undefined") return;

  const anchor = document.createElement("a");
  anchor.href = RESUME_PUBLIC_PATH;
  anchor.download = RESUME_FILENAME;
  anchor.rel = "noopener";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}
