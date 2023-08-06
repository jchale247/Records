// import{
//     SearchIcon,
// }from "@heroicons/react/outline"
function Header(){
    return(
        <div className="sticky top-0 z-50 bg-neutral-900 flex items-center p-2
            lg:px-5 shadow-md">
            <div className="flex flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <h1 className="cursor-default select-none text-sky-500 text-3xl">Record Music</h1>
                </div>
            </div>
        </div>
    );
}

export default Header;