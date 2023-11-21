"use client"

import Webcam from "react-webcam";
import { useCallback, useContext, useRef, useState } from "react";
import { useMyContext } from "../context/Context";
import CropComp from "./Components/cropComp/CropComp";


const CustomWebcam = () => {
    const { data, setData } = useMyContext();
    const webcamRef = useRef<Webcam | null>(null);
    const [imgSrc, setImgSrc] = useState<null>(null);

    const capture = useCallback(() => {
        const imageSrc: any = webcamRef.current?.getScreenshot() || null;
        setImgSrc(imageSrc);

    }, [webcamRef]);

    const retake = () => {
        setImgSrc(null);
    };
    return (
        <div className="container">
            {imgSrc ? (
                <>
                    <CropComp imgSrc={imgSrc} />
                </>

            ) : (
                <Webcam height={600} width={600} ref={webcamRef} style={{ 'margin': 'auto' }} />
            )}
            <div className="btn-container m-auto mt-10 text-center">
                <button onClick={capture}>Capture photo</button>
            </div>
        </div>
    );
};

export default CustomWebcam;