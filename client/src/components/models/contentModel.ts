// here was declare instance of link interface model
export interface routeSignupNavigateList {
  desc: string;
  links: string;
  linkName: string;
}

// here declare togglePasswordprops with export
export interface togglePasswordprops {
  isTogglePassword: boolean;
  togglePasswordVisiblity: () => void;
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
