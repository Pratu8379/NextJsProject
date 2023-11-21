"use client"
import React, { useEffect, useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useMyContext } from "@/app/context/Context";
import { useRouter } from "next/navigation";

const CropComp = ({ imgSrc }: any) => {
    const { data, setData } = useMyContext();
    const [cropData, setCropData] = useState("");
    const [cropper, setCropper] = useState<any>();


    const router = useRouter()

    const getCropData = () => {
        if (typeof cropper !== "undefined") {
            setCropData(cropper.getCroppedCanvas().toDataURL());
        }

    };

    const finalOffer = () => {
        setData({ ...data, profilePicture: cropData });
        router.push(`/offers`);
    }




    return (
        <>

            <div className="flex justify-between">
                <div className="w-[70%] flex justify-between">
                    <Cropper
                        className="h-[500px] w-[70%]"
                        initialAspectRatio={1}
                        src={imgSrc}
                        background={false}
                        responsive={true}
                        onInitialized={(instance: any) => {
                            setCropper(instance);
                        }}
                        zoomable={false}
                    />
                    {cropData && (
                        <img
                            src={cropData}
                            className="h-[100px] w-[30%]"
                        />
                    )}
                </div>
                <div className="flex flex-col justify-start gap-2">
                    <button onClick={getCropData} className="confirmBtn">
                        Crop Image
                    </button>
                    <button className='mt-5 confirmBtn' onClick={finalOffer}>Confirm</button>

                </div>
            </div>

        </>
    );
};

export default CropComp;