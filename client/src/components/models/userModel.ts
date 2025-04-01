// here can define normal interface model which instanse passing props

// define header instance of nav interface model in props
export interface isOpenheaderProps {
  isOpen: boolean;
}

// here define userSignupListItem content interface model
export interface userSignupListItem {
  listItem: string;
  itemPath: string;
}

// here define userNavListItem content interface model
export interface userNavListItem {
  listIcon: any;
  listItem: string;
  itemPath: string;
}

// here define nav action list item interface model
export interface actionListItems {
  actionItemsName: string;
  actionIcon: any;
}
