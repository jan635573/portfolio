import { forwardRef, useState } from "react";
import DesignPopup from "./DesignPopup";
import designData from ".././data/designData";

const Design = forwardRef((props, ref) => {
  const [selected,setSelected] = useState(null);
  const [isModalOpen,setIsModalOpen] = useState(false);

  const handleClick = (info) => {
    setSelected(info);
    setIsModalOpen(true);
  }
  const handleClose = () => {
    setSelected(null);
    setIsModalOpen(false);
  }
  return (
    <section className="design" ref={designRef => (ref.current[3] = designRef)}>
      <div className="design-wrap">
        <h2>WORK</h2>
        <div className="gallery">
          {
            designData.map((list)=>{
              return <div key={list.id} onClick={()=>{handleClick(list)}} className="gallery-contents">
                  <div className="design-cover">{list.title}</div>
                  <img src={`${process.env.PUBLIC_URL}${list.mainImg}`} alt={list.title}/>
                </div>
            })
          }
        </div>
        {
          isModalOpen && <DesignPopup info={selected} onClose={handleClose}/>
        }
      </div>
    </section>
  );
});

export default Design;