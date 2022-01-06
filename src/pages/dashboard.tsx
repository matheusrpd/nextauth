import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return <h1>Dashboard: {user?.email}</h1>
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const api = setupAPIClient(ctx);

  const response = await api.get('/me');

  console.log(response.data);

  return {
    props: {}
  }
});