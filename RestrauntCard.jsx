

export const Restrauntcard = (props) => {
    // console.log(props);
    return (
        <div className="card">
            <img src={props?.restraunt?.image} alt={props?.restraunt?.name} />
            <div className="text">
                    <h2>{props?.restraunt?.name}</h2>
                     <p className="cuisines">{props?.restraunt?.cuisine}</p>
                    <p>{props?.restraunt?.rating} Stars</p> 
                </div>
        </div>
    );
};

export default Restrauntcard;