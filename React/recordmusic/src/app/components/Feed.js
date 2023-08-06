import Album from './Album'

function Feed(){
    return(
        <div className="flex space-x-4 justify-center items-center bg-zinc-900 h-screen">
            <Album Img="https://i.scdn.co/image/ab67616d0000b2731bd6d088d3d81972af4cb81d" Name="Apricot Princess" Artist="Rex Orange County" />
            <Album Img="https://i.scdn.co/image/ab67616d0000b2731bd6d088d3d81972af4cb81d" Name="Apricot Princess" Artist="Rex Orange County" />
            <Album Img="https://i.scdn.co/image/ab67616d0000b2731bd6d088d3d81972af4cb81d" Name="Apricot Princess" Artist="Rex Orange County" />
            <Album Img="https://i.scdn.co/image/ab67616d0000b2731bd6d088d3d81972af4cb81d" Name="Apricot Princess" Artist="Rex Orange County" />
            <Album Img="https://i.scdn.co/image/ab67616d0000b2731bd6d088d3d81972af4cb81d" Name="Apricot Princess" Artist="Rex Orange County" />
            <Album Img="https://i.scdn.co/image/ab67616d0000b2731bd6d088d3d81972af4cb81d" Name="Apricot Princess" Artist="Rex Orange County" />
        </div>
    );
}

export default Feed;