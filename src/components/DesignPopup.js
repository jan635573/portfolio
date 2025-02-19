
const DesignPopup = ({info, onClose}) => {

  return (
    <div className="design-popup" key={info.id}>
      <div className="popup-wrap">
        <button onClick={onClose}>&times;</button>
        <h5>{info.title}</h5>
        <p>{info.detail}</p>
        <div className="popup-image">
          <img src={info.detailImg} alt={info.title}/>
        </div>
      </div>
    </div>
  );
};

export default DesignPopup;