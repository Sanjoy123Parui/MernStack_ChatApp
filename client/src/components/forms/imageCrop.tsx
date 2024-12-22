import {
    useState,
    useCallback
} from "react";

import Cropper from "react-easy-crop";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogClose
} from '../ui/dialog.tsx';
import { Button } from '../ui/button.tsx';
import { imageCropProps } from '../models/profileModel.ts';

// define ImageCrop functional component
const ImageCrop: React.FC<imageCropProps> = ({ imageSrc, onCropComplete, onClose }) => {

    // here declare useState hooks fro crop image in profile
    const [crop, setCrop] = useState<any>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState<number>(1);
    const [croppedArea, setCroppedArea] = useState<any>(null);


    // here declare change crop file
    const onCropChange = (crop: any) => {
        setCrop(crop);
    }

    // declare function zoom of picture
    const onZoomChange = (zoom: any) => {
        setZoom(zoom);
    }

    // here declare images crop pixels with useCallback hook
    const onCropCompleteHandler = useCallback((croppedAreaPixels: any) => {
        setCroppedArea(croppedAreaPixels);
    }, []);

    // here declare  handle crop function
    const handleCrop = () => {
        onCropComplete(croppedArea);
        onClose();
    }


    return (
        <>
            {/* start dialog for crop images */}
            <Dialog open >
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
                        <Button type="button" onClick={handleCrop}>Crop</Button>
                        <Button type="button" onClick={onClose}>Cancel</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default ImageCrop;