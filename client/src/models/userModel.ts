// here define userSignupListItem content interface model
export interface userSignupListItem {
  itemName: string;
  itemPath: string;
  itemActions: any;
}

// here define userNavListItem content interface model
export interface userNavListItem {
  listIcon: any;
  listItem: string;
  itemPath: string;
  itemActions: any;
}

// here define nav action list item interface model and exporting
export interface actionListItems {
  actionItemsName: string;
  actionIcon: any;
  handleAction: () => void;
}

// here declare userContactHeadingItems interface model with exporting
export interface userContactHeadingItems {
  userContactHeading: string;
}

// here declare and exporting userContactActionProps interface model
export interface userContactActionProps {
  isContactsAction: boolean;
  showContacts: () => void;
  hideContacts: () => void;
}
