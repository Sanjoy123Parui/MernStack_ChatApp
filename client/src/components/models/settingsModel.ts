// here declare and export user accessories interface model
export interface userAccessoriesItems {
  itemIcon: any;
  itemName: String;
  itemDesc: String;
}

// here declare and export interface model of user Setting accessoris props
export interface userSettingAccessories {
  isAccounts: boolean;
  showUserAccessories: () => void;
  hideUserAccessories: () => void;
}
