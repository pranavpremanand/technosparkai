import ourApproach from "../assets/images/ourapproach.webp";

const OurApproach = () => {
  return (
    <section>
      <div className="paddingtop paddingbottom wrapper grid lg:grid-cols-2 gap-10">
        <div>
          <h3
            data-aos="fade-right"
            className="text-[32px] text-primary font-bold"
          >
            Our Approach
          </h3>
          <p className="desc mt-4 space-y-4" data-aos="fade-right">
            At TechnosparkAI, we take a client-first approach to everything we
            do. Our process begins with understanding your business and your
            goals. We work closely with you to develop a strategy that aligns
            with your vision, ensuring that the solutions we create are
            specifically designed to meet your needs.
            <br />
            <br />
            <strong>1. Consultation and Discovery:</strong>
            <br />
            We start by listening to you. We want to understand your business,
            the challenges you face, and the outcomes you hope to achieve. This
            insight allows us to craft a tailored solution that will drive
            results.
            <br />
            <br />
            <strong>2. Custom Development:</strong>
            <br />
            With a clear understanding of your needs, we move into the
            development phase. Every solution we create is custom-built,
            ensuring that it’s a perfect fit for your business and scalable for
            future growth.
            <br />
            <br />
            <strong>3. Agile Implementation:</strong>
            <br />
            We follow an agile methodology to ensure that we can respond quickly
            to changes and challenges as they arise. This allows us to be
            flexible and adaptable while keeping the project on track.
            <br />
            <br />
            <strong>4. Quality Assurance:</strong>
            <br />
            Before delivering any solution, we rigorously test and validate it
            to ensure that it meets our high standards and performs flawlessly.
            We don’t just want to meet expectations—we want to exceed them.
            <br />
            <br />
            <strong>5. Ongoing Support:</strong>
            <br />
            Our relationship with you doesn’t end once the project is completed.
            We provide ongoing support to ensure that your solution continues to
            perform at its best and evolves with your business as it grows.
          </p>
        </div>
        <img
          data-aos="fade-left"
          className="h-full aspect-square rounded-2xl object-cover"
          src={ourApproach}
          alt="Our Approach"
        />
      </div>
    </section>
  );
};

export default OurApproach;
