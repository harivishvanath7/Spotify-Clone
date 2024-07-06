import { albumsData, songsData } from "../assets/frontend-assets/assets"
import AlbumItem from "./AlbumItem"
import Navbar from "./Navbar"
import SongItem from "./SongItem"

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <div className="my-5 font-bold text-2xl">
            <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
            <div className="flex overflow-auto">
                {albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
            </div>
        </div>
       </div>
       <div className="mb-4">
        <div className="my-5 font-bold text-2xl">
            <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
            <div className="flex overflow-auto">
            {songsData.map((item, index) => (<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
            </div>
        </div>
       </div>
    </>
  )
}
export default DisplayHome
