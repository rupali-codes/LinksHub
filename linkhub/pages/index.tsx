import type { NextPage } from "next";
import styles from "./index.module.css";
const DarkModeWeb: NextPage = () => {
  return (
    <div className={styles.darkModeWeb}>
      <img className={styles.darkModeWebChild} alt="" src="/star-3.svg" />
      <input
        className={styles.darkModeWebItem}
        type="text"
        defaultValue="Search all Resources..."
        placeholder="All assets"
      />
      <img
        className={styles.heroShapeStars}
        alt=""
        src="/hero-shape-stars.svg"
      />
      <div className={styles.component1Parent}>
        <div className={styles.component1}>
          <div className={styles.component1Child} />
          <div className={styles.linkshub}>
            <span>Links</span>
            <span className={styles.hub}>Hub</span>
          </div>
        </div>
        <div className={styles.landingPageTitleTextParent}>
          <a className={styles.landingPageTitleText}>
            <div className={styles.home}>HOME</div>
            <div className={styles.landingPageTitleTextChild} />
          </a>
          <a className={styles.landingPageTitleText1}>
            <div className={styles.home}>ABOUT US</div>
            <div className={styles.landingPageTitleTextItem} />
          </a>
          <div className={styles.landingPageTitleText2}>
            <div className={styles.home}>RESOURCES</div>
            <div className={styles.landingPageTitleTextInner} />
          </div>
          <div className={styles.landingPageTitleText2}>
            <div className={styles.home}>CONTACT</div>
            <div className={styles.frameDiv} />
          </div>
        </div>
        <img className={styles.wbSunnyIcon} alt="" src="/wb-sunny.svg" />
      </div>
      <div className={styles.footer}>
        <div className={styles.logoFooterParent}>
          <div className={styles.logoFooter}>
            <img
              className={styles.logoFooterChild}
              alt=""
              src="/frame-2607537.svg"
            />
            <div className={styles.socialIcons}>
              <button className={styles.facebook} />
              <button className={styles.twitter} />
              <button className={styles.instagram} />
            </div>
          </div>
          <div className={styles.quicklinks}>
            <div className={styles.home}>Quick Links</div>
            <div className={styles.homeParent}>
              <div className={styles.support}>Home</div>
              <div className={styles.support}>About us</div>
              <div className={styles.support}>Resources</div>
            </div>
          </div>
          <div className={styles.quicklinks}>
            <div className={styles.home}>Contact</div>
            <div className={styles.homeParent}>
              <div className={styles.support}>Support</div>
              <div className={styles.support}>Privacy policy</div>
              <div className={styles.support}>Contact Us</div>
            </div>
          </div>
          <div className={styles.quicklinks}>
            <div className={styles.subscribeToOurEmailParent}>
              <div className={styles.subscribeToOur}>
                Subscribe to our Email
              </div>
              <div className={styles.forLatestNews}>
                For Latest News and Updates
              </div>
            </div>
            <div className={styles.frameParent}>
              <input
                className={styles.frameChild}
                type="text"
                placeholder="Enter your email"
              />
              <button className={styles.subscribeWrapper}>
                <div className={styles.subscribe1}>{`Subscribe `}</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.trendingSec1}>
        <div className={styles.trendingResources}>
          <span>Trending</span>
          <span className={styles.forA}> Resources</span>
        </div>
        <div className={styles.trendingSection}>
          <div className={styles.trendingCards}>
            <div className={styles.frontend}>
              <img
                className={styles.component3Icon}
                alt=""
                src="/component-3.svg"
              />
              <div className={styles.frontend1}>
                <div className={styles.frontend2}>Frontend</div>
              </div>
            </div>
            <div className={styles.frontend}>
              <img
                className={styles.component5Icon}
                alt=""
                src="/component-5.svg"
              />
              <div className={styles.frontend1}>
                <div className={styles.frontend2}>Videos</div>
              </div>
            </div>
            <div className={styles.backend}>
              <img
                className={styles.component7Icon}
                alt=""
                src="/component-7.svg"
              />
              <div className={styles.frontend1}>
                <div className={styles.frontend2}>Backend</div>
              </div>
            </div>
          </div>
          <div className={styles.viewAllResources}>
            <div
              className={styles.viewAllResources1}
            >{`View all resources >>`}</div>
          </div>
        </div>
      </div>
      <div className={styles.objectsWrapper}>
        <img className={styles.objectsIcon} alt="" src="/objects.svg" />
      </div>
      <button className={styles.button}>
        <div className={styles.button1}>
          <div className={styles.buttonText}>Get Started</div>
        </div>
      </button>
      <div className={styles.component2Parent}>
        <div className={styles.component2}>
          <div className={styles.component2Child} />
          <div className={styles.linkshub}>
            <span>Links</span>
            <span className={styles.hub}>Hub</span>
          </div>
        </div>
        <div className={styles.aCollectionOfContainer}>
          <p className={styles.aCollectionOfInspiration}>
            <span>
              <span>{`A collection of inspiration, `}</span>
            </span>
          </p>
          <p className={styles.aCollectionOfInspiration}>
            <span>
              <span>tools and resources</span>
              <span className={styles.span}>{` `}</span>
              <span className={styles.forA}>for a</span>
            </span>
          </p>
          <p className={styles.stunningWebsite}>stunning website</p>
        </div>
      </div>
      <img className={styles.component9Icon} alt="" src="/component-9.svg" />
      <div className={styles.aboutUsParent}>
        <div className={styles.trendingResources}>
          <span>{`About  `}</span>
          <span className={styles.us}>Us</span>
        </div>
        <div className={styles.aboutSec}>
          <div className={styles.aboutText}>
            <div className={styles.about}>
              <div className={styles.trendingResources}>{`About `}</div>
              <div className={styles.component21}>
                <div className={styles.trendingResources}>
                  <span>Links</span>
                  <span className={styles.hub}>Hub</span>
                </div>
                <div className={styles.component2Item} />
              </div>
            </div>
            <div className={styles.linkshubIsTheContainer}>
              <p className={styles.aCollectionOfInspiration}>
                LinksHub is the ultimate resource hub for web designers and
                developers.
              </p>
              <p className={styles.aCollectionOfInspiration}>&nbsp;</p>
              <p className={styles.aCollectionOfInspiration}>
                Our goal is to provide you with the best possible collection of
                resources, links, and tools to help you build amazing websites
                and applications.
              </p>
              <p className={styles.aCollectionOfInspiration}>&nbsp;</p>
              <p className={styles.aCollectionOfInspiration}>
                Our team of experts web designers and developers have secured
                the web to bring you the most valuable and up-to-date
                information available.
              </p>
              <p className={styles.readMore}>&nbsp;</p>
              <p className={styles.readMore}>{`Read more>>`}</p>
            </div>
          </div>
          <img
            className={styles.illustrationIcon}
            alt=""
            src="/illustration.svg"
          />
        </div>
      </div>
      <div className={styles.howFixitWorks}>
        <div className={styles.title}>
          <div className={styles.support}>GETTING STARTED</div>
          <div className={styles.howLinkshubWorksContainer}>
            <span>
              {`How `}
              <span className={styles.links}>Links</span>
            </span>
            <span className={styles.hub3}>Hub</span>
            <span className={styles.forA}> works</span>
          </div>
        </div>
        <div className={styles.stepsWithButton}>
          <div className={styles.steps}>
            <div className={styles.howFixitWorks1}>
              <div className={styles.stepInfo}>
                <div className={styles.title1}>
                  <div className={styles.home}>#1</div>
                  <div className={styles.home}>Browse</div>
                </div>
                <div className={styles.browseTheWebsites}>
                  Browse the website's extensive library of useful links and
                  resources.
                </div>
              </div>
              <div className={styles.icon}>
                <img
                  className={styles.icsharpScreenSearchDesktopIcon}
                  alt=""
                  src="/icsharpscreensearchdesktop.svg"
                />
              </div>
            </div>
            <div className={styles.howFixitWorks2}>
              <div className={styles.stepInfo}>
                <div className={styles.title1}>
                  <div className={styles.home}>#3</div>
                  <div className={styles.home}>Save</div>
                </div>
                <div className={styles.browseTheWebsites}>
                  Save links and resources that you find helpful to your account
                  for easy access later
                </div>
              </div>
              <div className={styles.icon1}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
            </div>
            <div className={styles.howFixitWorks3}>
              <div className={styles.stepInfo}>
                <div className={styles.title1}>
                  <div className={styles.home}>#2</div>
                  <div className={styles.home}>Search</div>
                </div>
                <div className={styles.browseTheWebsites}>
                  Use the search function to find specific topics or resources
                  that interest you.
                </div>
              </div>
              <div className={styles.icon2}>
                <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
              </div>
            </div>
            <div className={styles.howFixitWorks4}>
              <div className={styles.stepInfo}>
                <div className={styles.title4}>
                  <div className={styles.home}>#4</div>
                  <div className={styles.home}>Contribute</div>
                </div>
                <div
                  className={styles.browseTheWebsites}
                >{`Contribute your own links and resources to the website to help build the community and share your knowledge with others. `}</div>
              </div>
              <div className={styles.icon2}>
                <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
              </div>
            </div>
            <img className={styles.connectorIcon} alt="" src="/connector.svg" />
            <img
              className={styles.connectorIcon1}
              alt=""
              src="/connector1.svg"
            />
            <img
              className={styles.connectorIcon2}
              alt=""
              src="/connector2.svg"
            />
          </div>
          <button className={styles.button2}>
            <div className={styles.button1}>
              <div className={styles.buttonText}>Get Started</div>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.openSourceContainer}>
        {`Open source | `}
        <span className={styles.links}>MIT License</span> 2023 LinksHub
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.logoFooter}>
          <div className={styles.trendingResources}>
            <span>Join Links</span>
            <span className={styles.us}>Hub</span>
            <span> Community</span>
          </div>
          <div className={styles.discoverWhatsPopular}>
            Discover whats popular on linkshub and make your project look
            stunning and professional
          </div>
          <button className={styles.button2}>
            <div className={styles.button1}>
              <div className={styles.buttonText}>Join Us Now</div>
            </div>
          </button>
        </div>
        <img className={styles.imagesIcon} alt="" src="/images.svg" />
      </div>
      <div className={styles.theBestChoiceForCreativesParent}>
        <div className={styles.trendingResources}>
          <span>{`The Best Choice For `}</span>
          <span className={styles.us}>Creatives Like You</span>
        </div>
        <div className={styles.creativesSec2}>
          <div className={styles.trendingFrame}>
            <div className={styles.illustration1Parent}>
              <img
                className={styles.illustration1Icon}
                alt=""
                src="/illustration-1.svg"
              />
              <div className={styles.trendingResourcesForCreativParent}>
                <div className={styles.trendingResources}>
                  Trending resources for creatives
                </div>
                <div className={styles.accessQualityTrending}>
                  Access quality trending resources and make your project look
                  professional
                </div>
              </div>
            </div>
            <div className={styles.trendingFrameChild} />
          </div>
          <div className={styles.exploreFrame}>
            <div className={styles.illustration1Parent}>
              <div className={styles.exploreUpdatedResourcesParent}>
                <div className={styles.trendingResources}>
                  Explore updated resources
                </div>
                <div className={styles.accessQualityTrending}>
                  Access quality trending resources and make your project look
                  professional
                </div>
              </div>
              <img className={styles.groupIcon} alt="" src="/group.svg" />
            </div>
            <div className={styles.exploreFrameChild} />
          </div>
          <div className={styles.bestsitesFrame}>
            <div className={styles.bestsitesFrameChild} />
            <img className={styles.groupIcon1} alt="" src="/group1.svg" />
            <div className={styles.bestSiteForCreativesParent}>
              <div className={styles.trendingResources}>
                Best site for creatives
              </div>
              <div className={styles.accessQualityTrending}>
                Access quality trending resources and make your project look
                professional
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkModeWeb;
