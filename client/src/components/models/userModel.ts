// here can define normal interface model which instanse passing props

// define header instance of nav interface model in props
export interface isOpenheaderProps{
    isOpen:boolean;
};

export interface isDropdownProps{
    isDropdownOpen:boolean;
};

// here define heders content interface model
export interface signupListItem{
    listItem:string;
    itemPath:string;
};