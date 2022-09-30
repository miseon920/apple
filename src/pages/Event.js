import { Link } from "react-router-dom";

const Event = ({ Stit, Ev }) => {
  const num = 0;
  return (
    <section className="event inner">
      <div className="Stit">
        <h2>{Stit[num].tit}</h2>
        <p>{Stit[num].des}</p>
      </div>
      <div className="content">
        <ul>
          {Ev.map((event, idx) => {
            return (
              <li key={event.id}>
                <Link to={event.link}>
                  <div className="e_img">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/img0${event.id}.jpg`}
                      alt=""
                    />
                  </div>
                  <div className="txt">
                    <div className="tit">{event.tit}</div>
                    <div className="des ellipsis">{event.des}</div>
                    <div className="date">{event.date}</div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Event;
