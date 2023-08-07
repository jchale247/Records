import Album from './Album'


function Feed(){
    return(
        <div className='py-6 bg-zinc-900'>
        <h1 className='text-blue-100 xl:px-11 lg:px-7 md:px-5 px-2 lg:text-[50px] text-3xl'>Your Albums</h1>
        <div className="grid md:grid-cols-5 grid-cols-4 row-start-auto gap-x-2 xl:gap-y-5 gap-y-4 py-6 px-1 place-items-center justify-center bg-zinc-900 h-full">
            <Album Img="https://i.scdn.co/image/ab67616d0000b273d970cd18ef2f579691cf56bc" Name="Live at Radio City Music Hall" Artist="Rex Orange County" />
            <Album Img="https://i.scdn.co/image/ab67616d0000b2731bd6d088d3d81972af4cb81d" Name="Apricot Princess" Artist="Rex Orange County" />
            <Album Img="https://i.scdn.co/image/ab67616d0000b273cb8d0f5d33abaf6a2ae44be2" Name="You've Got a Friend in Me" Artist="Rex Orange County" />
            <Album Img="https://i.scdn.co/image/ab67616d0000b2730c8ac83035e9588e8ad34b90" Name="Favourite Worst Nightmare (Standard Version)" Artist="Arctic Monkeys" />
            <Album Img="https://i.scdn.co/image/ab67616d0000b273753ff61c73b2861911ce590d" Name="Live at the Royal Albert Hall" Artist="Arctic Monkeys" />
            <Album Img="https://i.scdn.co/image/ab67616d0000b273753ff61c73b2861911ce590d" Name="Live at the Royal Albert Hall" Artist="Arctic Monkeys" />
        </div>
        </div>
    );
}

export default Feed;