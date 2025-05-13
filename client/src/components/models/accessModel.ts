// here declare user assets props interface model
export interface userAccessbilityItems {
  itemIcon: any;
  itemName: String;
  itemDesc: String;
}

// here declare interface model of user settings contextProps
export interface userSettingContextProps {
  isAccounts: boolean;
  showUserAccessories: () => void;
  hideUserAccessories: () => void;
}
