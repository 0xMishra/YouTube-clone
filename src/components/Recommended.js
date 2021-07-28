import "./recommended.css";
import { useEffect } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useGlobalContext } from "./context";
const YouTube = require("simple-youtube-api");

var views = Math.floor(Math.random() * 200);
const Recommended = () => {
  const { hideSidebar, items, setItems } = useGlobalContext();
  var itemList = [
    "python programming",
    "javaScript tutorials",
    "java programming",
    "c++ tutorials",
    "c# tutorials",
    "web development",
    "android development",
    "machine Learning",
    "data science",
    "API",
  ];
  const topic = itemList[Math.floor(Math.random() * 4)];
  useEffect(() => {
    const youTube = new YouTube("YOUR API KEY");
    youTube.searchVideos(topic, 15).then((resp) => {
      setItems(resp);
      console.log(items);
    });
  }, []);

  return (
    <>
      <h1 className="recommended__heading">TYPE SOMETHING IN THE SEARCH BOX</h1>
      <div className="recommendations" onClick={hideSidebar}>
        {items.map((item) => {
          const { id } = item;
          return <Recommendations key={id} {...item} views={views} />;
        })}
      </div>
    </>
  );
};

const Recommendations = ({ title, thumbnails, channel, views }) => {
  return (
    <main className="recommended">
      <section className="recommended__image">
        <img src={thumbnails.high.url} alt="" className="thumbnail" />
      </section>

      <article className="recommended__info">
        <div className="recommended__channel_img">
          <img src={thumbnails.high.url} alt="" className="profilePic" />
        </div>
        <h3 className="video__title">{title}</h3>
        <div className="moreIcon">
          <MoreVertIcon />
        </div>
      </article>

      <div className="recommended__footer">
        <h4 className="channel__name">
          {channel.title}
          <span>
            <CheckCircleIcon className="verifiedIcon" />
          </span>
        </h4>
        <p className="video__views">
          {views}
          {views <= 2 ? "M" : "K"} views
          <span className="video_verify">
            {channel.raw.snippet.publishedAt}
          </span>
        </p>
      </div>
    </main>
  );
};
export default Recommended;
