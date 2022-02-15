// @ts-ignore
import { useStore } from "@coders/utility";

import Parcel from "single-spa-react/parcel";
import { navigateToUrl } from "single-spa";

export default function Root(props) {
  const state = useStore();
  return (
    <section style={{ border: "5px solid purple" }}>
      <h1>APP2</h1>
      <h1>Eu peguei o state sem o Parcel: {JSON.stringify(state.loading)}</h1>
      <button onClick={() => navigateToUrl("/app1")}>GO TO APP1</button>
      <button onClick={() => window.location.replace("/app1")}>
        GO TO Without sspa APP1
      </button>

      <Parcel config={() => System.import("@coders/loading")} parent="App2" />
    </section>
  );
}
