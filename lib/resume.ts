/** Hint for visitors who use Print → Save as PDF in the browser. */
export const RESUME_FILENAME = "Revu_Kavitha_Resume.pdf";

/** Opens the browser print dialog (choose “Save as PDF” to get a PDF of this page). */
export function openResumePrintDialog() {
  if (typeof window !== "undefined") {
    window.print();
  }
}
