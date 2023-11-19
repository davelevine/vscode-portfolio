const AboutPage = () => {
  return (
    <>
      <h2>Designing effective solutions, organizing knowledge, and conveying complexity through visual design.</h2>
      <br />
      <h3>I&apos;m an information systems pro with a knack for building relationships and technical expertise to make great things happen. I&apos;m experienced in leading diverse teams, and together, we&apos;ve tackled the finer details of business processes, enhanced the technical aspects, ensured top-notch quality, and made web-based solutions shine.</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
