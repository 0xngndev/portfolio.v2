import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";

const Tales = () => {
  return (
    <div className="div-project-wrapper">
      <div className="div-projects-sh">
        <h1 className="project-title">
          {`() => 500`}
          <span>Tales</span>
        </h1>
        <h2>Social Media App</h2>
        <div className="div-fake">
          <h3>
            500Tales is a social media app dedicated to the art of short
            fiction. Users can share tales up to 500 words long, follow other
            authors, comment on the stories of others and much more.
          </h3>
        </div>
        <p>
          {`<`}
          <span>tech stack</span>
          {`>`}
        </p>
        <div className="div-tech-stack">
          <button>GRAPHQL</button>
          <button>NEXTJS</button>
          <button>MONGODB</button>
          <button>NODE</button>
        </div>
      </div>
      <div className="div-projects-fh">
        <div className="div-img">
          <Image src="/assets/sloth.jpg" alt="sloth" layout="fill" />
        </div>
        <div className="div-svg">
          <Link href="https://github.com/nasgui">
            <FaGithub />
          </Link>
          <Link href="/">
            <BiLinkExternal />
          </Link>
          <Link href="/">
            <FiArrowRightCircle />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tales;
