import ListG from "./listgroup";
export default function MainList(props) {
  console.log(props);
  let t = props.type === "stocks";
  return (
    <>
      <div>
        {props.stocks.length !== 0 ? (
          <ListG prod={props.stocks} type={props.type} />
        ) : (
          <span>{t ? "Loading Stocks..." : "Loading Crypto..."}</span>
        )}
      </div>
    </>
  );
}
