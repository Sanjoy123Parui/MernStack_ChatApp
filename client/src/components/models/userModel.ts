// here can define normal interface model which instanse passing props

// define header instance of nav interface model in props
export interface isOpenheaderProps{
    isOpen:boolean;
};

export interface isDropdownProps{
    isDropdownOpen:boolean;
};

// here define userSignupListItem content interface model
export interface userSignupListItem{
    listItem:string;
    itemPath:string;
};

// here define userNavListItem content interface model
export interface userNavListItem{
    listIcon:any;
    listItem:string;
    itemPath:string;
};

// here define themes dropdown content interface model
export interface themesListMode{
    themesIcon:any;
    themesItem:string;
};