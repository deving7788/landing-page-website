import { socialMedia } from "../data";

const SocialMedia = () => {
  return (
    <>
      <section className="social-container">
        {socialMedia.map((item) => {
          const { id, url, icon } = item;
          return (
            <a key={id} href={url} target="_blank" rel="noreferrer">
              {icon}
            </a>
          );
        })}
      </section>
    </>
  );
};
export default SocialMedia;
