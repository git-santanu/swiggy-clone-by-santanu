const withPromotedCard = (BodyCards) => {
return (props) => {
    return (
        <>
            <label className="promoted-class">Promoted</label>
            <BodyCards {...props}/>
        </>
    );
}
}
export default withPromotedCard; // Higher Order Function (HOC)

// Higher Order Function (HOC) - It is a function that takes a component 
// and modify the component then return this componet as a new component.