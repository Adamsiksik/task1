import ListG from "./listgroup";
export default function MainList(props) {
  return (
    <>
      <div>
        {props.stocks ? (
          <ListG prod={props.stocks} />
        ) : (
          <span>Loading Stocks...</span>
        )}
      </div>
    </>
  );
}
