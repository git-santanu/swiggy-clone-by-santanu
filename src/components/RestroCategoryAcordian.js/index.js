import RestroItems from "./RestroItems";

const RestroCategoryAcordian = ({
  data,
  isHeaderClicked,
  setShowIndex,
  toggleCard,
}) => {
  const handleAccordianView = () => {
    setShowIndex();
    toggleCard();
  };

  return (
    <>
      <div
        className="accordian"
        style={{ cursor: "pointer" }}
        onClick={handleAccordianView}
      >
        <div className="accordian-child">
          <span className="accordian-title">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {isHeaderClicked && <RestroItems itemCards={data.itemCards} />}
      </div>
    </>
  );
};
export default RestroCategoryAcordian;
