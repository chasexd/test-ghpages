import Link from "next/link";
import { withRouter } from "next/router";
function Main({ router }) {
  console.log(router.pathname);
  return (
    <div>
      {`you need to navigate to insights.optum.com/${router.pathname}`}
      Hello World.{" "}
      <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
        <a>About</a>
      </Link>
    </div>
  );
}
export default withRouter(Main);
