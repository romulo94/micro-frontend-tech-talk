import { navigateToUrl } from "single-spa";
export default function Root(props) {
  return (
    <section>
      <h1>HEADER</h1>
      <button onClick={() => navigateToUrl("/")}>GO TO ROOT</button>
      <button onClick={() => navigateToUrl("/app1")}>GO TO APP1</button>
      <button onClick={() => navigateToUrl("/app2")}>GO TO APP2</button>
    </section>
  );
}
