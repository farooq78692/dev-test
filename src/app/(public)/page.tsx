import ServerComponent from "./admin/page";
import ClientComponent from "./client/page";

const LandingPage = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
    <ServerComponent />
    <ClientComponent />
  </div>
);

export default LandingPage;
