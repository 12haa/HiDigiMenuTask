import {foodCategoryData, iconsArray} from "./lib/icons.ts";
import FoodCategoryCard from "./components/FoodCategoryCard.tsx";
import foodCategoryCard from "./components/FoodCategoryCard.tsx";

const App = () => {
    return (
        <main className="w-full  h-screen border-4 border-amber-300 flex items-center justify-center bg-amber-100">
            <div className="absolute h-full  right-0">
                <img src="/src/assets/icons/bg2.svg" className="z-1 w-full h-[90%]"/>
            </div>
            <div
                className="min-w-[95%] min-h-[95%] rounded-3xl border-1 border-rose-500 bg-white flex flex-col gap-26 items-center z-1">
                {/*Header Wrapper Div*/}
                <div className="flex w-[92%] items-center justify-between mt-10 ">
                    {/*Left items*/}
                    <div className="flex items-center  gap-20 ">
                        {/*Logo And Name*/}
                        <div className="flex gap-5">
                            <img src="/src/assets/icons/forkNspoon.svg" width="70px" height="60px" alt="forkNSpoon"/>
                            <div className="flex flex-col items-center ">
                                <h1 className="font-semibold text-5xl">Jar Jer</h1>
                                <p className="font-normal text-xl pl-6">Food Delivery</p>
                            </div>
                        </div>
                        {/* Logo And Name End   */}
                        {/*  ContanctUs & category*/}
                        <div className="flex items-center gap-10">
                            <div className="flex gap-3 hover:cursor-pointer">
                                <img src="/src/assets/icons/menuIcon.svg" alt="MenuIcon"/>
                                <p className="text-xl">Categories</p>
                            </div>
                            <div className="flex gap-3 hover:cursor-pointer">
                                <img src="/src/assets/icons/phoneIcon.svg" alt="PhoneIcon"/>
                                <p className="text-xl">Contact Us</p>
                            </div>
                        </div>
                        {/*  ContanctUs & category Ends*/}
                        <div className="flex items-center gap-8">
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
                    {/*TODO -> Change Div To Link */}
                    <div className="flex items-center space-x-8 z-10 cursor-pointer    ">
                        <img className="" src="/src/assets/icons/shoppingIcon.svg" alt="ShoppingIcon"/>
                        <div className="button-wrapper">
                            <button className="search-button ">Account</button>
                        </div>
                    </div>
                </div>

                {/*Header wrapper div Ends*/}
                <div className="flex flex-col w-[92%] gap-5 mt-8">
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
                    <div className="input-field">
                        <input type="text" placeholder="Search..." className="focus-visible:outline-none  w-full"/>
                        <div className="button-wrapper ">
                            <button className="search-button w-[180px]">Search</button>
                        </div>
                    </div>
                    {/*Search Input Ends */}
                    {/* Food Categories*/}
                    <div className="flex flex-col mt-10 ml-3 gap-3">
                        <h2 className="text-[19px] leading-3 text-[#bdbdbd]">Product Category</h2>
                        <div className="flex gap-5 mt-3">
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
                    <div className="flex flex-col mt-10 ml-3 gap-3">
                        <h2 className="text-[19px] leading-3 text-[#bdbdbd]">Recently Ordered</h2>
                        <div className="flex gap-5 mt-3">
                            {/*Data Coming From Ap*/}
                            {[0, 1].map(() => {
                                return <div className="image-wrapper">
                                    <img src="/src/assets/icons/recentlyImage.svg" alt="Description of Image"/>
                                    <div
                                        className="z-20 absolute  px-4 py-4 left-10 items-center flex bottom-3  gap-4">
                                        <img src="/src/assets/icons/kingBurgurIcon.svg"
                                             alt="KingBurgur"/>
                                        <div className="flex flex-col items-start">
                                            <h2 className="text-white text-xl whitespace-nowrap">King Burger</h2>
                                            <p className="text-white">Rate 8/10</p>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default App;
