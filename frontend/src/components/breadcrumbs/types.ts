export interface BreadcrumbsProps {
  /** List of breadcrumbs items */
  items: {
    /** Label displayed to the user */
    label: string;
    /** Link associated with the item */
    url?: string;
  }[];
  /** Class name to assign to the component */
  className?: string;
}
