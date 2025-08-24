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
import { Input } from "../ui/input.tsx";

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
        <DialogContent className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
          <DialogHeader className="border-b pb-4 mb-4">
            <DialogTitle className="text-2xl font-semibold text-gray-800 dark:text-white">Crop Your Profile Picture</DialogTitle>
            <DialogClose onClick={onClose} />
          </DialogHeader>

          <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
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

          <div className="my-4">
            <label htmlFor="zoom" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Zoom</label>
            <Input
              id="zoom"
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e) => onZoomChange(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>

          <DialogFooter className="flex justify-end space-x-4 mt-6">
            <Button
              type="button"
              className="px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-md"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="button"
              className="px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-md"
              onClick={handleCrop}
            >
              Crop & Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

// export ImageCrop functional component
export default ImageCrop;
