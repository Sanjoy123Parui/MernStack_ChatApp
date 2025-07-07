// here import libraries
import { useState, useCallback } from "react";

import Cropper from "react-easy-crop";

// here import all components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
} from "../ui/dialog.tsx";
import { Button } from "../ui/button.tsx";
import { imageCropProps } from "../models/profileModel.ts";

// define ImageCrop functional component
const ImageCrop: React.FC<imageCropProps> = ({
  imageSrc,
  onCropComplete,
  onClose,
}) => {
  // here declare useState hooks fro crop image in profile
  const [crop, setCrop] = useState<any>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [croppedArea, setCroppedArea] = useState<any>(null);

  // here declare change crop file
  const onCropChange = (crop: any) => {
    setCrop(crop);
  };

  // declare function zoom of picture
  const onZoomChange = (zoom: any) => {
    setZoom(zoom);
  };

  // here declare images crop pixels with useCallback hook
  const onCropCompleteHandler = useCallback((croppedAreaPixels: any) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  // here declare  handle crop function
  const handleCrop = () => {
    onCropComplete(croppedArea);
    onClose();
  };

  return (
    <>
      {/* start dialog for crop images */}
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Profile Image Crop</DialogTitle>
            <DialogClose onClick={onClose} />
          </DialogHeader>

          <div className="relative w-full h-64">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={onCropChange}
              onZoomChange={onZoomChange}
              onCropComplete={onCropCompleteHandler}
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br 
              focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm 
              px-5 py-2.5 text-center me-2 mb-2"
              onClick={handleCrop}
            >
              Crop
            </Button>
            <Button
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br 
              focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm 
              px-5 py-2.5 text-center me-2 mb-2"
              onClick={onClose}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

// export ImageCrop functional component
export default ImageCrop;
