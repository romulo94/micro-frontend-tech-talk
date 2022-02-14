import Parcel from "single-spa-react/parcel";
import { navigateToUrl } from "single-spa";

export default function Root(props) {
  return (
    <section>
      <h1>App1</h1>
      <button onClick={() => navigateToUrl("/app2")}>GO TO APP2</button>
      <button onClick={() => window.location.replace("/app2")}>
        GO TO Without sspa APP2
      </button>
      <Parcel
        config={() => System.import("@coders/loading")}
        style={{ background: "blue" }}
      />
    </section>
  );
}
