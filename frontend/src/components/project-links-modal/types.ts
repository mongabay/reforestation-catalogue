export interface ProjectLinksModalProps {
  /** Whether the modal is open or not */
  open: boolean;
  /** Callback executed when the user wants to close the modal */
  onDismiss: () => void;
}
