import {FaHeart} from "react-icons/fa"

type TSingleVideo = {
    images: string,
    titles: string,
    contents: string
}

const SingleVideo = ({images, titles, contents}: TSingleVideo) => {
    return (

        <li className="video_item">
            <div>
                <img src={images} alt={titles}/>
            </div>
            <div>
                <h3>{titles}</h3>
                <p>{contents}</p>
            </div>
            <div>
                <FaHeart/>
            </div>
        </li>
    )
}

export const VideoList = () => {
  return (
    <ul>
        <SingleVideo/>
    </ul>
  )
}
