const FoodCategoryCard = ({iconPath, name, altName}: { iconPath: string, name: string, altName: string }) => {
    return (
        <div className="flex  flex-col items-center justify-around gap-4 bg-[#f0f0f0] p-7 rounded-[45%]">
            <img src={iconPath} alt={altName} className="max-w-16 h-16"/>
            <p className="text-[18px] font-black">{name}</p>
        </div>
    )
}
export default FoodCategoryCard;
