import {foodCategoryData, iconsArray} from "./lib/icons.ts";
import FoodCategoryCard from "./components/FoodCategoryCard.tsx";

const App = () => {
    return (
        <main
            className="w-full relative h-screen  flex items-center justify-center">
            {/*Top Left Gradient*/}
            <span
                className="absolute top-0 left-0 bg-gradient-to-br from-[#ffebd8] via-slate-50 to-gray-50    w-full h-full -z-50"/>
            <div className="absolute z-20 h-full right-0">
                <img src="/src/assets/icons/bg2.svg" className="w-full h-[90%]" alt="mainBackgroundImage"/>
                {/*TODO -> Change Div To Link */}
                <div className="flex items-center space-x-8 cursor-pointer absolute  top-20 right-20 z-50  ">
                    <img className="" src="/src/assets/icons/shoppingIcon.svg" alt="ShoppingIcon"/>
                    <div className="button-wrapper ">
                        <button className="search-button ">Account</button>
                    </div>
                </div>
            </div>
            <div className="absolute right-16 bottom-32 flex items-center gap-6 z-50">
                <p className="text-xl font-light cursor-pointer">Applications</p>
                <p className="text-xl font-light cursor-pointer">Privacy</p>
                <p className="text-xl font-light cursor-pointer">Terms</p>
            </div>
            <div className="absolute  z-30  right-56 top-[260px]">
                <img src="/src/assets/icons/burger2.svg" className="z-1" alt="Burger2"/>
            </div>
            <div className="absolute z-30 right-0 top-[180px]">
                <img src="/src/assets/icons/burger1.svg" className="z-1 w-full h-[50%]" alt="Burger1"/>
            </div>
            <div className="absolute z-30  right-0 top-[210px] ">
                <img src="/src/assets/icons/jumper.svg" className="z-1 w-full h-[80%]" alt="thumbsUp"/>
            </div>
            <div
                className="min-w-[96%] min-h-[93%] rounded-3xl  bg-white flex flex-col gap-26 items-center    z-10 ">
                {/*Header Wrapper Div*/}
                <div className="flex w-[92%] gap-5 ">
                    <div className="flex w-full items-center justify-between mt-10 ">
                        {/*Left items*/}
                        <div className="flex items-center gap-20  ">
                            {/*Logo And Name*/}
                            <div className="flex gap-5 z-20 ">
                                <img src="/src/assets/icons/forkNspoon.svg" width="70px" height="60px" alt="forkNSpoon"
                                     className="cursor-pointer"/>
                                <div className="flex flex-col items-center z-30 ">
                                    <h1 className="font-semibold text-5xl">Jar Jer</h1>
                                    <p className="font-normal text-xl pl-6">Food Delivery</p>
                                </div>
                            </div>
                            {/* Logo And Name End   */}
                            {/*  Contact Us & category*/}
                            <div className="flex items-center gap-10 ">
                                <div className="flex gap-3 hover:cursor-pointer">
                                    <img src="/src/assets/icons/menuIcon.svg" alt="MenuIcon"/>
                                    <p className="text-xl">Categories</p>
                                </div>
                                <div className="flex gap-3 hover:cursor-pointer">
                                    <img src="/src/assets/icons/phoneIcon.svg" alt="PhoneIcon"/>
                                    <p className="text-xl">Contact Us</p>
                                </div>
                            </div>
                            {/*  Contact Us & category Ends*/}
                            <div className="flex items-center gap-8 z-20">
                                {
                                    iconsArray.map((icon) => {
                                        return (
                                            <div className="flex gap-3 hover:cursor-pointer">
                                                <img src={icon.iconPath} alt={icon.name} width="26px"/>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {/*Right items*/}
                    </div>
                </div>


                {/*Header wrapper div Ends*/}
                <div className="flex flex-col w-[92%] gap-5 mt-8 ">
                    <div className="flex gap-2 items-center">
                        <div className="flex gap-2 items-center">
                            <img src="/src/assets/icons/locationIcon.svg" alt="LocationIcon"/>
                            <p className="text-[19px]">My Location</p>
                        </div>
                        <span className="text-gray-200">|</span>
                        <p className="text-[19px]">New York, <span className="text-[#1bcf92]">Left Side Blue Door</span>
                        </p>
                    </div>
                    {/*Search Input */}
                    <div className="input-field z-40">
                        <input type="text" placeholder="Search..." className="focus-visible:outline-none  w-full"/>
                        <div className="button-wrapper ">
                            <button className="search-button w-[180px]">Search</button>
                        </div>
                    </div>
                    {/*Search Input Ends */}
                    {/* Food Categories*/}
                    <div className="flex flex-col mt-6 ml-3 gap-3 z-40">
                        <h2 className="text-[19px] leading-3 text-[#bdbdbd]">Product Category</h2>
                        <div className="flex gap-5 mt-5">
                            {foodCategoryData.map(item => {
                                return (
                                    <FoodCategoryCard iconPath={item.iconPath} altName={item.altName} name={item.name}
                                                      key={item.id}/>
                                )
                            })}
                        </div>
                    </div>
                    {/* Food Categories Ends*/}

                    {/*    Recently Ordered Section*/}
                    <div className="flex flex-col mt-8 ml-3 gap-3 z-40">
                        <h2 className="text-[19px] leading-3 text-[#bdbdbd]">Recently Ordered</h2>
                        <div className="flex gap-5 mt-5 ">
                            {/*Data Coming From Ap*/}
                            {[0, 1].map(() => {
                                return <div className="image-wrapper">
                                    <img src="/src/assets/icons/recentlyImage.svg" alt="Description of Image"/>
                                    <div
                                        className="z-20 absolute  px-4 py-4 left-10 items-center flex bottom-3  gap-4">
                                        <img src="/src/assets/icons/kingBurgurIcon.svg"
                                             alt="KingBurgur" className="w-40"/>
                                        <div className="flex flex-col items-start">
                                            <h2 className="text-white text-2xl whitespace-nowrap">King Burger</h2>
                                            <p className="text-white text-xl font-light">Rate 8/10</p>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {/*Bottom Left Gradient*/}
            <span
                className="absolute bottom-0  right-0 bg-gradient-to-tl h-full w-[90%]  from-[#ffebd8] via-slate-50 -z-50  "/>
        </main>
    )
}
export default App;
