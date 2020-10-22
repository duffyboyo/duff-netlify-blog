import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Index() {
    return (
        <Layout>
            <BasicMeta url={"/"} />
            <OpenGraphMeta url={"/"} />
            <TwitterCardMeta url={"/"} />
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-lg-5"}>
                        <div className={"contact-header-wrapper"}>
                            <h1>Contact</h1>
                            <span className="handle">talk to me</span>
                            <p className="wrapy">If interested in working with me, or have something you want me to take a look at? Use this form!</p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <form name="contact" method="POST" className={"contact-form"} data-netlify="true">
                            <div className={"row"}>
                                <label htmlFor="name">Name</label>
                                <input className={"form-styling"} type="text" id="name" name="name" />
                            </div>
                            <div className={"row"}>
                                <label htmlFor="email">Email</label>
                                <input className={"form-styling"} type="text" id="email" name="email" />
                            </div>
                            <div className={"row"}>
                                <label htmlFor="message">Message</label>
                                <textarea className={"form-styling"} id="message" name="message"></textarea>
                            </div>
                            <div className={"row squish"}>
                                <button className={"btn-signin"} type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <style jsx>
                {
                    `
                    .container {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex: 1 1 auto;
                        padding: 0 1.5rem;
                      }

                    .contact-form {
                        padding: 10px;
                    }

                    .handle {
                        margin-left: 5px;
                    }

                      h1 {
                        font-size: 2.5rem;
                        margin: 0;
                        font-weight: 500;
                      }
                      .form-styling {
                        width: 100%;
                        height: 35px;
                        padding-left: 5px;
                        margin-left: 20px;
                        margin-right: 25px;
                        border: none;
                        border-radius: 20px;
                        margin-bottom: 20px;
                        color: #fff;
                        background: rgba(255,255,255,.2);
                      }
                      .btn-signin {
                        float: left;
                        font-weight: 700;
                        text-transform: lowercase;
                        font-size: 13px;
                        text-align: center;
                        color: #ffffff;
                        width: 100%;
                        height: 35px;
                        border: none;
                        border-radius: 10px;
                        margin-top: 23px;
                        background-color: #1059FF;
                      }
                      label {
                        font-weight: 500;
                        text-transform: lowercase;
                        font-size: 14px;
                        padding-left: 15px;
                        padding-bottom: 10px;
                        color: rgba(255,255,255,.7);
                        display: block;
                        margin-left: 20px;
                      }
                      
                      textarea {
                          height: 150px !important;
                          resize: none;
                          padding: 5px;
                          color: #fff;
                      }

                      .contact-header-wrapper {
                          padding: 20px;
                      }

                      .squish {
                        padding-left: 20px;
                        padding-right: 20px;
                      }

                      .wrapy {
                          padding: 20px;
                          margin-left: -15px;
                      }
                      `
                }
            </style>
        </Layout>
    )
}