import img_url from "../../assests/constant";

const RestroItems = ({ itemCards }) => {
  return (
    <>
      {itemCards.map((item, index) => (
        <div key={item.card.info.id} className="itemlist">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                width: "50%",
              }}
            >
              <div>
                <span style={{ fontWeight: "600", fontSize: "15px" }}>
                  {item.card.info.name} - {""}
                </span>
                {""}
                <span>{item.card.info.price / 100}/-</span>
              </div>
              <p className="itemlist_description">
                {item.card.info.description}
              </p>
            </div>
            <div
              style={{
                width: "50%",
                position: "relative",
              }}
            >
              <img
                className="itemlist_img"
                src={img_url + item.card.info.imageId}
                alt="img"
              />
              <div
                style={{
                  marginBottom: "5px",
                }}
              >
                <button
                  style={{
                    padding: "8px",
                    backgroundColor: "white",
                    margin: "15px",
                    borderRadius: "15px",
                    cursor: "pointer",
                  }}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
          {index === itemCards.length - 1 ? null : <hr />}
        </div>
      ))}
    </>
  );
};
export default RestroItems;
