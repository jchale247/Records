import Image from 'next/image'


function Album({Img, Name, Artist}){
    return(
        
        <div className="row-span-1 col-span-1 group relative justify-center content-center flex rounded-lg xl:h-72 xl:w-52 lg:w-44 lg:h-52 md:h-52 md:w-36 w-24 h-44 bg-zinc-800
                            hover:rounded-2xl transition-all duration-300 ease-in-out shadow-md">
            <Image
            src={Img}
            width={500}
            height={500}
            alt="Album Cover"
            className='absolute xl:top-4 md:top-3 top-5 xl:h-48 xl:w-48 lg:w-36 lg:h-36 md:w-32 md:h-32 w-20 h-20 rounded-lg group-hover:rounded-xl transition-all duration-500 '/>
                <h1 className="absolute truncate xl:w-48 md:w-32 w-20 xl:bottom-9 lg:bottom-8 left-3 bottom-12 xl:text-[14px] md:text-[10px] text-[8px] hover:cursor-default text-sky-100">{Name}</h1>
                <h1 className="absolute truncate xl:w-48 w-20 overflow-ellipsis overflow-hidden xl:bottom-5 lg:bottom-6 bottom-9 left-3 xl:text-xs text-[8px] hover:cursor-default text-sky-100">{Artist}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute bottom-2 xl:right-2 md:right-3 right-9.5 text-sky-500 xl:w-7 xl:h-7 md:w-6 md:h-6 w-5 h-5 hover:text-sky-700 hover:cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
    );
}

export default Album;