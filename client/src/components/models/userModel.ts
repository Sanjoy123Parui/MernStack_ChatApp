// here can define normal interface model which instanse passing props

// define header instance of nav interface model in props
export interface isOpenheaderProps{
    isOpen:boolean;
};

export interface isDropdownProps{
    isDropdownOpen:boolean;
};

// here define navListItem content interface model
export interface navListItem{
    listItem:string;
    itemPath:string;
};

// here define themes dropdown content interface model
export interface themesListMode{
    themesItem:string;
};