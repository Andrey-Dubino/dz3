import "../Cards/Card.scss";

export default function Cards(props) {
  console.log(props);
  return (
    <div className={props.card.bg}>
      <div className="card_header">
        <h2 className="card_title">{props.card.title}</h2>
      </div>
      <div className="card_main">
        <p className="p">руб</p>
        <div className="card_item">
          <h3>{props.card.content}</h3>
          <p>/мес</p>
        </div>
      </div>
      <div className="card_main_block1">
        <p className="card_content">{props.card.subContent}</p>
      </div>
      <div className="card_footer">
        <p className="card_footer_content">Объем включонного</p>
        <p className="card_footer_content2">трафика не ограничен</p>
      </div>
    </div>
  );
}