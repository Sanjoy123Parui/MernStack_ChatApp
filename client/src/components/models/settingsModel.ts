// here declare and export user accessories interface model
export interface userAccessoriesItems {
  itemIcon: any;
  itemName: String;
  itemDesc: String;
  itemEventOptions: any;
}

// here declare and exporting user navItems which was use responsive device
export interface userNavbarMenuActions {
  isNavMenu: boolean;
  handleNavMenuOpen: () => void;
  handleNavMenuClose: () => void;
}

// here declare and export interface model of user Setting accessoris props
export interface userSettingAccessories {
  isAccounts: boolean;
  showUserAccessories: () => void;
  hideUserAccessories: () => void;
}

// here declare and export interface model of user Setting Toggling props
export interface userSettingToggles {
  isThemes: boolean;
  handleThemes: () => void;
}
