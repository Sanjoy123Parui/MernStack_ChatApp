// here define userSignupListItem content interface model
export interface userSignupListItem {
  listItem: string;
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

// here define user contact content actions interface model with exporting
export interface usercontactactions {
  isContactLists: boolean;
  showUserContacts: () => void;
  hideUserContacts: () => void;
}
