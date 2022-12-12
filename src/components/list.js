import ListG from "./listgroup";
export default function MainList(props) {
  console.log(props);
  let t = props.type === "stocks";
  return (
    <>
      <div className="mx-auto mt-5 border border-secondary rounded" style={{width: "600px"}} >
        {props.stocks.length !== 0 ? (
          <ListG prod={props.stocks} type={props.type} />
        ) : (
          <span>{t ? "Loading Stocks..." : "Loading Crypto..."}</span>
        )}
      </div>
    </>
  );
}
