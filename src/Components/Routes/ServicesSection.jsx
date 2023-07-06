import React from 'react'
import item1 from '../images/search.gif'

const ServicesSection = (props) => {
  return (
    <>
     <div
        className={`service-main text-center text-white`}
        style={{ marginTop: "4rem", fontFamily:'sans-serif' }}
      >
        <div>
          <h1 className={`text-${props.mode==="Dark"?"light":"dark"}`}>Services</h1>
          <div
            className={`text-${
              props.mode === "Light" ? "dark" : "light"
            } services`}
          >
            {/* item number 1 */}
            <div
              className={`my-2 service-item ${
                props.mode === "Light" ? "itemLight" : "itemDark"
              } rounded`}
            >
              <span>
                <img className={`item-img`} src={item1} alt="" />
              </span>
              <div className="my-2 d-flex flex-column align-items-start mx-3">
                <h4
                  className={`mx-auto w-100 text-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  News-Monkey
                </h4>
                <h6
                  className={`text-start text-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  NewsMonkey is a webapp application build using newsAPI and
                  react framework for providing the daily updates.
                </h6>
                <div>
                  <button
                    className={`my-2 me-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Github
                  </button>
                  <button
                    className={`my-2 me-2 ms-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Source Code
                  </button>
                  <button
                    className={`my-2 ms-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Live 🖤
                  </button>
                </div>
              </div>
            </div>
            {/* item number 1 */}
            <div
              className={`my-2 service-item ${
                props.mode === "Light" ? "itemLight" : "itemDark"
              } rounded`}
            >
              <span>
                <img className={`item-img`} src={item1} alt="" />
              </span>
              <div className="my-2 d-flex flex-column align-items-start mx-3">
                <h4
                  className={`mx-auto w-100 text-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  News-Monkey
                </h4>
                <h6
                  className={`text-start text-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  NewsMonkey is a webapp application build using newsAPI and
                  react framework for providing the daily updates.
                </h6>
                <div>
                  <button
                    className={`my-2 me-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Github
                  </button>
                  <button
                    className={`my-2 me-2 ms-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Source Code
                  </button>
                  <button
                    className={`my-2 ms-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Live 🖤
                  </button>
                </div>
              </div>
            </div>
            {/* item number 1 */}
            <div
              className={`my-2 service-item ${
                props.mode === "Light" ? "itemLight" : "itemDark"
              } rounded`}
            >
              <span>
                <img className={`item-img`} src={item1} alt="" />
              </span>
              <div className="my-2 d-flex flex-column align-items-start mx-3">
                <h4
                  className={`mx-auto w-100 text-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  News-Monkey
                </h4>
                <h6
                  className={`text-start text-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  NewsMonkey is a webapp application build using newsAPI and
                  react framework for providing the daily updates.
                </h6>
                <div>
                  <button
                    className={`my-2 me-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Github
                  </button>
                  <button
                    className={`my-2 me-2 ms-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Source Code
                  </button>
                  <button
                    className={`my-2 ms-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Live 🖤
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className=" d-flex flex-row justify-items-center mt-5 fs-3  text-white">
            <span>
              Explore more projects ? &nbsp;
              <button
                className={`fs-5 btn btn-outline-${
                  props.mode === "Light" ? "dark" : "light"
                } my-4`}
              >
                More Projects
              </button>
            </span>
          </div> */}
        </div>
      </div> 
    </>
  )
}

export default ServicesSection
