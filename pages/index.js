import { useEffect, useState } from "react";
import imagesloaded from "imagesloaded";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [navbar, setNavbar] = useState(
    "uk-width-1-1 uk-navbar uk-navbar-container uk-navbar-transparent uk-light uk-position-fixed uk-visible@s"
  );
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [fade, setFade] = useState("uk-hidden");
  const [review1, setReview1] = useState(false);

  useEffect(() => {
    imagesloaded(document, () => {
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          setHidden(true);
          setFade("uk-animation-fade");
        }, 800);
      }, 4000);
    });
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setNavbar(
          "uk-width-1-1 uk-navbar uk-navbar-container uk-position-fixed uk-visible@s"
        );
      } else {
        setNavbar(
          "uk-width-1-1 uk-navbar uk-navbar-container uk-navbar-transparent uk-light uk-position-fixed uk-visible@s"
        );
      }
    });
  });
  return (
    <>
      <Helmet>
        <title>
          Loss Prevention Solutions, Inc. | Your Gold Standard Partner in
          Profitability | Trimble Enterprises, LLC.
        </title>
      </Helmet>
      <div
        className={
          "uk-section uk-section-primary uk-flex uk-flex-center uk-flex-middle uk-background-cover"
        }
        style={{ backgroundImage: 'url("/images/hero.jpg")' }}
        uk-height-viewport={""}
      >
        <div className={"uk-container"}>
          <div className={"uk-width-1-2@s"}>
            <h1 className={fade}>Loss Prevention Solutions, Inc.</h1>
            <div className={fade} style={{ animationDelay: ".8s" }}>
              <div className={"uk-margin"}>
                <a
                  href={"mailto:kevin@lp-solutions.com"}
                  className={
                    "uk-button uk-button-primary uk-button-large uk-margin-right"
                  }
                >
                  Say, hi!
                </a>
                <a
                  href={"https://www.linkedin.com/in/kevintrimblecfe"}
                  title={"LinkedIn"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className={"uk-margin-small-right"}
                  />
                </a>
                <a
                  href={"https://www.facebook.com/Cages4"}
                  title={"Facebook"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
            </div>
            <div className={fade} style={{ animationDelay: "1.6s" }}>
              <p>
                <a href={"tel:14044363322"}>+1 (404) 436-3322</a>
              </p>
              <p>
                Loss Prevention Solutions, Inc., founded in 1996 by Kevin
                Trimble, CFE, is a frontline support resource for businesses
                seeking gold standard security, asset protection, and loss
                prevention solution providers. Kevin has spent the last 30 years
                closely vetting and evaluating industry vendors to identify and
                strategically align with those that have consistently delivered
                innovative first-class products and services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={"uk-section"}>
        <div className={"uk-container uk-container-xsmall"}>
          <h2
            className={"uk-heading-small uk-text-uppercase"}
            uk-scrollspy={"uk-animation-fade"}
          >
            Your <span className={"uk-text-primary"}>Gold Standard</span>
            Partner in Profitability
          </h2>
          <p uk-scrollspy={"uk-animation-fade"}>
            The physical security and asset protection industries are flooded
            with solution providers. Some vendors are new to the market, others
            have been around for many years but have not evolved with emerging
            technology or new perspectives. Loss Prevention Solutions, Inc. has
            closely vetted and identified a limited number of security-related
            solution providers that have continued to perform and progress while
            offering competitive prices. The “LPS Gold Standard” assessment by
            Kevin is a testament to their ability to consistently deliver
            superior service and products to customers of all sizes.
          </p>
        </div>
      </div>
      <div className={"uk-section"} id={"services"}>
        <div className={"uk-container"}>
          <div
            className={"uk-child-width-1-2@s"}
            uk-grid={""}
            uk-scrollspy={"target: > div; cls: uk-animation-fade; delay: 500"}
          >
            <div>
              <img
                src={"/images/products/cages.jpg"}
                alt={
                  "Loss Prevention Solutions, Inc. | Your Gold Standard Partner in Profitability"
                }
              />
              <h3>Security Cages</h3>
              <p>
                Cages4, LLC. was founded in 2020 after realizing there was a
                significant need to better protect assets with customized
                solutions. Cages4, LLC. offers a broad selection of security
                cages, cabinets, and accessories no matter what type of asset
                you are seeking to protect. The American made security cages and
                cabinets are designed and built by industry experts that
                understand the importance of strength, quality, and
                dependability. Kevin Trimble is not just an advocate and product
                representative of Cages4, LLC., he is also a partner and founder
                in the company!
              </p>
              <div>
                <a
                  href={"https://cages4.com"}
                  title={"Cages 4 | Trimble Enterprises, LLC."}
                  className={"uk-button uk-button-primary uk-button-small"}
                >
                  Get yours!
                </a>
              </div>
            </div>
            <div>
              <img
                src={"/images/products/safes.jpg"}
                alt={
                  "Loss Prevention Solutions, Inc. | Your Gold Standard Partner in Profitability"
                }
              />
              <h3>Security Safes</h3>
              <p>
                The safe and vault industry is massive and made up of many
                companies specializing in different industries and markets. Some
                safe companies build and customize their products domestically
                while others only import standard products for mass resale and
                distribution. Some safe companies are leaders in building
                b-rated cash safes while others have mastered and perfected the
                residential gun and tactical safe. Loss Prevention Solutions,
                Inc. has identified and strategically partnered with multiple
                safe manufacturers who have met the “LPS Gold Standard” by
                offering quality safes and services at competitive prices. We
                represent a few safe companies as each offers their own unique
                specialty and focus. Loss Prevention Solutions, Inc. will
                identify and connect you with the best fitting safe manufacturer
                / distributor to best serve your company&apos;s requirements.
              </p>
              <div>
                <a
                  href={"mailto:kevin@lp-solutions.com"}
                  className={"uk-button uk-button-primary uk-button-small"}
                >
                  Get yours!
                </a>
              </div>
            </div>
            <div>
              <img
                src={"/images/products/access.jpg"}
                alt={
                  "Loss Prevention Solutions, Inc. | Your Gold Standard Partner in Profitability"
                }
              />
              <h3>Access Control</h3>
              <p>
                If your business needs complete control over who is coming and
                going, then you need a secure access control system. Access
                control authorizes and restricts entry to your spaces while
                confirming identity, letting in who you want, and keeping out
                who you do not. Loss Prevention Solutions, Inc. has partnered
                with multiple “LPS Gold Standard” access control vendors that
                will take the time to understand your exact business needs, so
                they can design a customized system to your exact
                specifications. Since security and reliability are essential to
                access control, Loss Prevention Solutions, Inc. only partners
                with the most respected manufacturers and technicians in the
                industry.
              </p>
              <div>
                <a
                  href={"mailto:kevin@lp-solutions.com"}
                  className={"uk-button uk-button-primary uk-button-small"}
                >
                  Get yours!
                </a>
              </div>
            </div>
            <div>
              <img
                src={"/images/products/alarms.jpg"}
                alt={
                  "Loss Prevention Solutions, Inc. | Your Gold Standard Partner in Profitability"
                }
              />
              <h3>Alarms & CCTV</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aliquid asperiores consequatur dicta dignissimos, dolorum, error
                eveniet ex iure modi, mollitia necessitatibus nostrum nulla
                obcaecati praesentium quaerat quia saepe sequi?
              </p>
              <div>
                <a
                  href={"mailto:kevin@lp-solutions.com"}
                  className={"uk-button uk-button-primary uk-button-small"}
                >
                  Get yours!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"uk-section"} id={"about"}>
        <div className={"uk-container"}>
          <div className={"uk-child-width-1-2@s uk-flex-middle"} uk-grid={""}>
            <div>
              <img
                src={"/images/kevin.jpg"}
                alt={
                  "Loss Prevention Solutions, Inc. | Your Gold Standard Partner in Profitability"
                }
                uk-scrollspy={"uk-animation-fade"}
              />
            </div>
            <div>
              <p
                className={"uk-margin-remove"}
                uk-scrollspy={"uk-animation-fade"}
              >
                Gold Standard Service
              </p>
              <h2
                className={"uk-margin-remove-top uk-heading-medium"}
                uk-scrollspy={"uk-animation-fade"}
              >
                Meet Kevin
              </h2>
              <p uk-scrollspy={"uk-animation-fade"}>
                Kevin has spent the last 30+ years designing and overseeing
                physical security / loss prevention programs for numerous
                Fortune 500 companies such as The Home Depot, FedEx Office,
                T-Mobile, and McDonald’s Corp.
              </p>
              <p uk-scrollspy={"uk-animation-fade"}>
                A seasoned entrepreneur with multiple U.S. Patents issued for LP
                and retail solutions utilized nationally.
              </p>
              <div className={"uk-margin"}>
                <div className={"uk-text-bold"}>Say, hi!</div>
                <div>
                  <a href={"mailto:kevin@lp-solutions.com"}>
                    kevin@lp-solutions.com
                  </a>
                  | <a href={"tel:14044363322"}>+1 (404) 436-3322</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"uk-section"} id={"reviews"}>
        <div className={"uk-container"}>
          <div
            className={"uk-child-width-1-3@s uk-grid-divider"}
            uk-grid={""}
            uk-scrollspy={"target: > div; cls: uk-animation-fade; delay: 500"}
          >
            <div>
              <div className={"uk-grid-small uk-flex-middle"} uk-grid={""}>
                <div className={"uk-width-auto"}>
                  <img
                    src={
                      "https://media-exp1.licdn.com/dms/image/C4E03AQGVL1LBhe6IJA/profile-displayphoto-shrink_100_100/0/1576459890529?e=1654128000&v=beta&t=gyFdUEY2ocuV2zaazVs7kHiBXMzynd4K2a08rSNyB6Y"
                    }
                    alt={
                      "Loss Prevention Solutions, Inc. | Your Gold Standard Partner in Profitability"
                    }
                    className={"uk-border-circle"}
                    style={{ width: "50px" }}
                  />
                </div>
                <div className={"uk-width-expand"}>
                  <div className={"uk-text-bold"}>McDonalds</div>
                  <div>William Ball &middot; Retail</div>
                </div>
              </div>
              <p>
                Kevin and I worked together in a leadership role at
                McDonald&apos;s within the U.S. Security department. Kevin came
                into McDonald&apos;s at the leadership level and brought a
                wealth of new ideas and great passion for making positive
                changes
                {review1 ? (
                  <span>
                    . Kevin&apos;s prior experience was invaluable to our long
                    term vision and he was never afraid to take that risk of
                    thinking differently. He was a great team mate, thought
                    partner, listener and stand up guy which made our work
                    easier and fun. Now for the real deal...., Unfortunately, in
                    all business today there are times when profitability takes
                    a downturn and changes need to happen. Unfortunately for me
                    I had to take a step down back into the manager role in the
                    field and you can imagine how it then might feel to have to
                    report to someone who was peer of yours. Without hesitation
                    Kevin made that transition very easy for me and without
                    getting into all the details I&apos;ll just sum it up
                    &quot;Kevin is a leader of people and understands what it
                    takes to lead others during challenging times&quot;. He
                    knows exactly what to do when someone moves his
                    &quot;cheese&quot;. I&apos;m better today having worked with
                    Kevin and I truly appreciate him for who he is.
                  </span>
                ) : (
                  <span>... </span>
                )}
              </p>
              <p>
                <a onClick={() => setReview1(true)}>Read more.</a>
              </p>
            </div>
          </div>
          <p uk-scrollspy={"uk-animation-fade"}>
            <a
              href={
                "https://www.linkedin.com/in/kevintrimblecfe/details/recommendations"
              }
              target={"_blank"}
              rel={"noreferrer"}
            >
              See all reviews.
            </a>
          </p>
        </div>
      </div>
      <div
        className={"uk-section uk-section-primary uk-flex uk-flex-middle"}
        uk-height-viewport={"offset-bottom: true"}
        id={"contact"}
      >
        <div className={"uk-container uk-container-xsmall"}>
          <h1 uk-scrollspy={"uk-animation-fade"}>Stop Losing, Start Saving</h1>
          <div className={"uk-margin"} uk-scrollspy={"uk-animation-fade"}>
            <a
              href={"mailto:kevin@lp-solutions.com"}
              className={
                "uk-button uk-button-secondary uk-button-large uk-margin-right"
              }
            >
              Say, hi!
            </a>
            <a
              href={"https://www.linkedin.com/in/kevintrimblecfe"}
              title={"LinkedIn"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={"uk-margin-small-right"}
              />
            </a>
            <a
              href={"https://www.facebook.com/Cages4"}
              title={"Facebook"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <p uk-scrollspy={"uk-animation-fade"}>
            <a href={"tel:14044363322"}>+1 (404) 436-3322</a>
          </p>
          <p uk-scrollspy={"uk-animation-fade"}>
            CFE as a frontline support resource for businesses needing gold
            standard security, asset protection, and loss prevention referrals
            and solutions. Loss Prevention Solutions, Inc. was founded in 1996
            by Kevin Trimble.
          </p>
        </div>
      </div>
      <div className={"uk-section uk-section-muted uk-section-xsmall"}>
        <div className={"uk-container uk-container-xsmall"}>
          <div className={"uk-flex-middle"} uk-grid={""}>
            <div className={"uk-width-auto"}>
              <img
                src={"/images/logo/safe-small.png"}
                alt={
                  "Loss Prevention Solutions, Inc. | Your Gold Standard Partner in Profitability | Trimble Enterprises, LLC."
                }
              />
            </div>
            <div className={"uk-width-expand"}>
              <div
                className={"uk-text-small"}
                uk-scrollspy={"uk-animation-fade"}
              >
                Copyright © 2022.
                <a
                  href={"/"}
                  title={
                    "Loss Prevention Solutions, Inc. | Your Gold Standard Partner in Profitability | Trimble Enterprises, LLC."
                  }
                >
                  Loss Prevention Solutions, Inc
                </a>
                . by
                <span className={"uk-text-bold"} style={{ color: "#156cb9" }}>
                  Trimble Enterprises, LLC
                </span>
                . All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className={navbar} style={{ top: 0, transition: "all .8s" }}>
        <div className={"uk-navbar-center"}>
          <ul className={"uk-navbar-nav"}>
            <li>
              <a href={"#services"} uk-scroll={"offset: 64"}>
                Services
              </a>
            </li>
            <li>
              <a href={"#about"} uk-scroll={"offset: 64"}>
                About
              </a>
            </li>
            <li>
              <a href={"#reviews"} uk-scroll={"offset: 64"}>
                Reviews
              </a>
            </li>
            <li>
              <a href={"#contact"} uk-scroll={"offset: 64"}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={!loading && "uk-animation-fade uk-animation-reverse"}
        style={{ width: "100%", position: "fixed", top: 0, left: 0 }}
        hidden={hidden}
      >
        <div
          className={
            "uk-section uk-section-primary uk-flex uk-flex-center uk-flex-middle"
          }
          uk-height-viewport={""}
        >
          <div className={"uk-container uk-container-xsmall uk-text-center"}>
            <div className={"uk-inline"} style={{ maxWidth: "200px" }}>
              <img
                src={"/images/lock.png"}
                alt={
                  "Loss Prevention Solutions, Inc. | Your Gold Standard Partner in Profitability | Trimble Enterprises, LLC."
                }
              />
              <img
                src={"/images/dial.png"}
                alt={
                  "Loss Prevention Solutions, Inc. | Your Gold Standard Partner in Profitability | Trimble Enterprises, LLC."
                }
                className={"uk-position-top crack"}
              />
            </div>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    </>
  );
}
