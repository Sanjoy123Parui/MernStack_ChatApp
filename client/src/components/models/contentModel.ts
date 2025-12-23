// here was declare instance of link interface model
export interface routeSignupNavigateList {
  desc: string;
  links: string;
  linkName: string;
}

// here declare profileImagesCrop model
export interface profileImagesCropItems {
  imageSrc: any;
  showCropDialog: boolean;
  fileName: string;
  crop: any;
  zoom: number;
  croppedArea: any;
  handleFileChange: (e: any) => unknown;
  handleCropComplete: (croppedArea: any) => unknown;
  handleClose: () => void;
  handleCropChange: (crop: any) => unknown;
  handleZoomChange: (zoom: any) => unknown;
  handleCropCompleteHandler: (croppedAreaPixels: any) => unknown;
}

// here declare heading model of chat app content
export interface contentHeading {
  headingTitle: string;
}

export interface contentMessagesHeading {
  messagesheadingOptions: any;
  hideOptionAction: () => void;
}

export interface contentMessagesShowOption {
  headingTitle: string;
  showOptionAction: () => void;
}

// here declare and exporting user chats heading options toggle content
// interface model
export interface userChatsHeadingToggle {
  isChatOptions: boolean;
  isGroupsOptions: boolean;
  showChatContentOptions: () => void;
  hideChatContentOptions: () => void;
  showGroupsContentOptions: () => void;
  hideGroupsContentOptions: () => void;
}

// here declare and also exporting user feedback & help related interface model
interface supportFormValues {
  first_name?: string;
  last_name?: string;
  phone?: string;
  messages?: string;
}

interface supportFormErrors {
  first_name?: string;
  last_name?: string;
  phone?: string;
  messages?: string;
}

export interface supportFormState {
  data: supportFormValues;
  errors?: supportFormErrors;
  success: boolean;
  message: string;
}

export interface supportFormProps {
  supportState: supportFormState;
  supportFormAction: (formData: FormData) => void;
  supportIsPending: boolean;
}
