import React from 'react'

const page = () => {
    console.log('inside offers page')

    return (
        <div className=" h-auto mt-16 flex flex-col justify-evenly font-Manrope 2xl:mt-44 px-5 sm:px-0 ">
            <div className=" flex-col flex  items-center md:items-baseline md:pl-20  ">
                <p className="  text-3xl font-semibold 2xl:text-4xl ">
                    Congratulations!
                </p>
            </div>
            <div>
                <p className="flex-col flex  items-center mt-2  md:items-baseline md:pl-20">
                    <span className=" text-gray-400  text-center text-base 2xl:text-xl ">
                        Your OneCard application has been approved. We have sent
                        the mobile app link on your registered mobile number.
                    </span>
                </p>
            </div>
            <div className="  py-5 sm:px-20 ">
                <div className="flex  flex-wrap w-auto bg-gray-200 bg-opacity-5 rounded-3xl h-auto py-5 sm:py-0    ">
                    <div className="  h-auto sm:h-96 lg:w-auto order-1 px-4 md:px-12 w-full  flex items-center ">
                        <div className=" h-auto    ">
                            <div className="flex flex-col  h-full justify-center  ">
                                <section className=" sm:text-2xl text-xl flex flex-col h-72 justify-evenly  ">
                                    <div className="  ">
                                        <p className="text-base 2xl:text-2xl text-center sm:text-left">
                                            Your approved Credit Limit is
                                        </p>
                                        <h1 className="text-5xl text-confirmbtn-500 mt-3 2xl:font-bold font-medium text-center sm:text-left">
                                            <span>&#8377; 1,20,000 </span>
                                        </h1>
                                    </div>
                                    <div className="mt-8 h-32 flex flex-col justify-between font-Manrope  text-xl sm:text-2xl 2xl:text-3xl 2xl:h-40   ">
                                        <div className="flex">
                                            <div className="rounded-full bg-black flex  justify-center w-8 h-8 items-center">
                                                <img
                                                    alt="No Annual Fee"
                                                    src="https://www.getonecard.app/assets/apply/no_fees.svg"
                                                    className="h-full w-full"
                                                />
                                            </div>
                                            <p className="pl-2">No Annual & Joining Fees</p>
                                        </div>
                                        <div className="flex">
                                            <div className="rounded-full bg-black flex  justify-center w-8 h-8 items-center">
                                                <img
                                                    alt="5X Reward"
                                                    src="https://www.getonecard.app/assets/apply/rewards.svg"
                                                    className="h-full w-full"
                                                />
                                            </div>
                                            <p className="pl-2">5x Rewards</p>
                                        </div>
                                        <div className="flex">
                                            <div className="rounded-full bg-black flex  justify-center w-8 h-8 items-center">
                                                <img
                                                    alt="Flexible Emi"
                                                    src="https://www.getonecard.app/assets/apply/flexible_emi.svg"
                                                    className="h-full w-full"
                                                />
                                            </div>
                                            <p className="pl-2">Emi Options</p>
                                        </div>
                                    </div>

                                </section>
                            </div>
                        </div>
                    </div>
                    <div className=" sm:flex-grow pl-12 sm:pl-0 sm:h-96 h-auto  order-2   flex justify-center items-center my-5 sm:my-0 ">
                        <img
                            alt="OneCardMetal"
                            src="https://www.getonecard.app/assets/apply/metal_card.png"
                            className=" md:h-80  md:w-120  w-72 h-48 "
                        />
                    </div>
                    <div className=" h-auto  lg:h-96 lg:w-80 order-3  w-full flex   items-center justify-center ">
                        <div className="  w-full h-auto sm:w-40">
                            <div className="w-full text-sm font-thin  mt-5 mb-5 hidden lg:block ">
                                <p>Send link or Scan QR to Download the app</p>
                            </div>
                            <div className="hidden lg:block">
                                <div className="h-40 w-full border border-confirmbtn-500 flex justify-center items-center rounded-xl shadow-2xl bg-black ">
                                    <img
                                        alt="QR Code"
                                        src="https://www.getonecard.app/assets/apply/qr_oc.svg"
                                        className="h-32 w-32 "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
