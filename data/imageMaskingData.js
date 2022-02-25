import LeftTextRightImgWithTitle from "./../components/Common/ServiceFaq/LeftTextRightImgWithTitle";

export const imageMaskingData1 = {
  imgSrc: "/service/service-red.png",
  startPrice: "$0.99",
  serviceName: "Best Image Masking Service Provider – Photoeditzone",
  title:
    "Are you looking for an image masking service provider to help you get the perfection out of  soft-edges images? ",
  text: "Don’t worry, We at photoeditzone know how to bring out the best for our clients. Whether it’s human hair, animal fur, or complex image parts, our editors are always there to the rescue!",
};

export const imageMaskingData2 = {
  title: "Our Photo Masking Service for Different Fields ",
  imgSrc: "/service/masking-about-ugg-boot_large.png",
  alterTag: "Test",
  text: (
    <p className="mb-0">
      Our photo masking and editing services aren’t only confined to
      advertisements or social media platforms. The majority of our tasks are
      carried out in Adobe photoshop by our experienced editors to bring out
      perfection.
      <br />
      <br />
      Here are a few sectors where we provide our <b>image masking services</b>-
      <br />
      <span>- Professional Photographers</span>
      <br />
      <span>- E-Commerce Business</span>
      <br />
      <span>- Jewellery Business</span>
      <br />
      <span>- Fashion Houses</span>
      <br />
      <span>- Advertisement Sectors</span>
      <br />
    </p>
  ),
};

export const imageMaskingData3 = {
  defaultText: "Pass on it to specialists",
  text1: (
    <p className="mb-0">
      Reevaluate even your most multifaceted section way ventures to Path&apos;s
      group of specialists, beginning at a normal 2,56 for each picture. You can
      get enormous groups of pictures altered quicker and less expensive, in
      just 6 hours.
    </p>
  ),
  text2: (
    <p className="mb-0">
      For more perplexing shots (like anything including hair or fur), picture
      veiling provides you with that additional degree of accuracy, for patterns
      that look totally normal.
      <br />
      <br />
      The cleaner the photographs, the more changes you&apos;ll get.
    </p>
  ),
};

// FAQ CONTENT START HERE
const list = [
  "E-Commerce Business",
  "Product Photography",
  "Posters/Advertisement Industry",
  "Fashion Houses",
  "Other Sectors ",
];

export const imageMaskingServiceFaqData = [
  {
    question: "Why Choose Our Image Masking Services?",
    open: true,
    answer: (
      <>
        <p>
          Image masking service is tricky and requires a lot of expertise. And
          we, Photoeditzone, have all these in our arsenal. No matter which
          industry you’re from or what masking service you want, we’re the best
          in meeting your requirements and demands by assuring top-notch
          quality.Here’s what makes Photoeditzone stand out from the others-
        </p>
        <LeftTextRightImgWithTitle
          title="We different from others for:"
          list={list}
        />
        <div>
          <h4 className="mb-2 ser_ti-09">E-Commerce Business</h4>
          <p className="pb-0 mb-2">
            Nowadays, eCommerce business is about creating the first impression
            to compel customers to buy their products. So to help you with your
            business, Photoeitzone uses the best clipping path services to
            remove background and add a custom, eye-catchy, and visually
            attractive one.
          </p>
          <p>
            Our methods and techniques have helped many eCommerce businessmen
            present their products differently and get sales.
          </p>
        </div>
        <div>
          <h4 className="mb-2 ser_ti-09">Product Photography</h4>
          <p>
            With our clipping path service, you can select your product from the
            original background and use a custom background or any picture as a
            background instead. This will help your product to get more
            exposure. Alongside the clipping path service, the{" "}
            <b>photoshop clipping path service company</b> will take the
            necessary steps to make the product more engaging, appealing, and
            charming.
          </p>
        </div>
        <div>
          <h4 className="mb-2 ser_ti-09">Posters/Advertisement Industry</h4>
          <p className="pb-0 mb-2">
            The main goal of poster making or advertisements is to create
            excellent and compelling content to attract customers. However, it's
            tricky but not impossible. Photoeditzone is the best Clipping Path
            Service Provider in the market, and it's not a big deal for us!
          </p>
          <p>
            We provide custom backgrounds to different advertising industries.
            Due to this, the images or products look appealing and desirable.
            Our professional editors have all the latest photo editing tools in
            their arsenal!
          </p>
        </div>
        <div>
          <h4 className="mb-2 ser_ti-09">Fashion Houses</h4>
          <p>
            Have you ever seen a dull or blunt magazine image? I bet not. The
            sole reason is that dull photos look boring and cannot grab the
            attraction. So that's why we use the image clipping path technique
            to remove the dull or original background from the image. Our
            service has proven to be effective in the majority of cases.
          </p>
        </div>
        <div>
          <h4 className="mb-2 ser_ti-09">Other Sectors</h4>

          <p>
            Almost all digital and non-digital agencies use our image-clipping
            path service. As we provide high-quality, precise images with
            appealing backgrounds, these can come in handy for marketing
            purposes.
          </p>
        </div>
        <p>
          Aside from the sectors mentioned above, you can use our affordable and
          low-cost clipping path service for your furniture, shoes, clothing,
          real estate, and digital marketing agency.{" "}
        </p>
      </>
    ),
  },
];
