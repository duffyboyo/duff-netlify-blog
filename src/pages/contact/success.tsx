import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";

export default function Index() {
    return (
        <Layout>
            <BasicMeta url={"/"} />
            <OpenGraphMeta url={"/"} />
            <TwitterCardMeta url={"/"} />
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-lg-12"}>
                        <div className={"contact-header-wrapper"}>
                            <h1>All Sent</h1>
                            <span className="handle">thanks</span>
                            <p className="wrapy">If applicable I will be in contact as soon as I can!</p>
                        </div>
                    </div>
                </div>
            </div>
        <style jsx>
        {`
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
    padding: 0 1.5rem;
  }

  .handle {
    margin-left: 5px;
}

  h1 {
    font-size: 2.5rem;
    margin: 0;
    font-weight: 500;
  }
        `}
        </style>
        </Layout>
    )
}