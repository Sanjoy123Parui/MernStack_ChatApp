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

// decalare interface model user Remove account contextProps
export interface userRemoveAccountProps {
  userAccountAlertMessage: string;
  isUserRemoveAccount: boolean;
  showUserAccountRemoveModal: () => void;
  hideUserAccountRemoveModal: () => void;
}
