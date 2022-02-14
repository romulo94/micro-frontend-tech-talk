// @ts-ignore
import { useStore } from "@coders/utility";

export default function Root(props) {
  const state = useStore();
  return (
    <section style={props.style}>
      <h1>PARCEL</h1>
      <span>{state?.loading ? "Parcel Loading..." : "Parcel Done"}</span>
      <br />
      <button onClick={() => state.toggle()}>TOGGLE</button>
    </section>
  );
}
