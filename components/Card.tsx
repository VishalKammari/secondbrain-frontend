import React from 'react'
import ShareIcon from './icons/Shareicon'

interface Cardprops{
    title:string;
    link:string;
    type:'twitter'|'youtube';
}

const getYouTubeVideoId = (url: string): string | null => {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.searchParams.get("v")) {
      return parsedUrl.searchParams.get("v");
    }

    if (parsedUrl.hostname === "youtu.be") {
      return parsedUrl.pathname.slice(1);
    }

    if (parsedUrl.pathname.includes("/embed/")) {
      return parsedUrl.pathname.split("/embed/")[1];
    }

    return null;
  } catch {
    return null;
  }
};
export { getYouTubeVideoId };





const Card = ({title,link,type}:Cardprops) => {
  return (
    <div className='break-inside-avoid bg-white shadow-md rounded-xl p-3 border'>
        <div className="p-4 bg-white rounded-md border-gray-200   border min-h-48 min-w-72">
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-2">
                        <ShareIcon />
                    </div>
                    {title}
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <a href={link} target="_blank">
                            <ShareIcon />
                        </a>
                    </div>
                    <div className="text-gray-500">
                        <ShareIcon />
                    </div>
                </div>
            </div>

            <div className="pt-4">
                {type === "youtube" && <iframe className='w-full h-40 mt-3 rounded-lg' src={`https://www.youtube.com/embed/${getYouTubeVideoId(link)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x", "twitter")}></a> 
                </blockquote>}
            </div>

        </div>
    </div>
  )
}

export default Card