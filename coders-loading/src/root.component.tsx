// @ts-ignore
import { useStore } from "@coders/utility";

export default function Root(props) {
  const state = useStore();
  return (
    <section style={{ border: "5px dashed black", margin: 20 }}>
      <h1>PARCEL usado pelo mfe: {props.parent}</h1>
      <span>{state?.loading ? "Parcel Loading..." : "Parcel Done"}</span>
      <br />
      <button onClick={() => state.toggle()}>TOGGLE</button>
    </section>
  );
}
