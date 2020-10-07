import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <Link href="/profile">
        <a>go to profile</a>
      </Link>
    </Layout>
  );
};

export default Index;
