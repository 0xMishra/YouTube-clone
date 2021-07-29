import "./recommended.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useGlobalContext } from "./context";

var views = Math.floor(Math.random() * 200);
const Recommended = () => {
  const { hideSidebar, items } = useGlobalContext();

  return (
    <>
      <h3 className="recommended__heading">
        " type something in the search box and press the search icon"{" "}
      </h3>
      <a href="">
        <h3 className="author">--Kundan Mishra</h3>
      </a>
      <div className="recommendations" onClick={hideSidebar}>
        {items.map((item) => {
          const { id } = item;
          return <Recommendations key={id} {...item} views={views} />;
        })}
      </div>
    </>
  );
};

const Recommendations = ({ title, image, views, channel }) => {
  return (
    <main className="recommended">
      <section className="recommended__image">
        <img src={image} alt="" className="thumbnail" />
      </section>

      <article className="recommended__info">
        <div className="recommended__channel_img">
          <img src={image} alt="" className="profilePic" />
        </div>
        <h3 className="video__title">{title}</h3>
        <div className="moreIcon2">
          <MoreVertIcon />
        </div>
      </article>

      <div className="recommended__footer">
        <h4 className="channel__name">
          {channel}
          <span>
            <CheckCircleIcon className="verifiedIcon" />
          </span>
        </h4>
        <p className="video__views">{views} K views</p>
      </div>
    </main>
  );
};
export default Recommended;
