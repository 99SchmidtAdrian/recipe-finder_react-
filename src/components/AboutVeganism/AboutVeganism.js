import React from "react";
import Article from "../Article/Article";
import Navbar from "../Navbar/Navbar";
import Card from "../ui/Card";
import pigs from "../../images/pigs.jpg";
import vegetables from "../../images/vegetables.jpg";
import milk from "../../images/milk.jpg";
import earth from "../../images/earth.jpg";
import pigFriend from "../../images/pig-friend.jpg";

const AboutVeganism = () => {
  return (
    <Card className="mx-auto pb-10 border-2 border-gray-600 xl:border-none lg:w-10/12 2xl:mb-[100px] 2xl:w-8/12">
      <Navbar />
      <h1 className="text-3xl text-center text-gray-800 my-5 xl:text-5xl space font-extrabold tracking-wider">
        Why vegan?
      </h1>
      <div className="container text-black mx-auto overflow-hidden">
        <Article
          title="For the animals"
          imgIsLeft={false}
          imgSrc={pigs}
        >
          Preventing the exploitation of animals is not the only reason for
          becoming vegan, but for many it remains the key factor in their
          decision to go vegan and stay vegan. Having emotional attachments with
          animals may form part of that reason, while many believe that all
          sentient creatures have a right to life and freedom. Specifics aside,
          avoiding animal products is one of the most obvious ways you can take
          a stand against animal cruelty and animal exploitation everywhere.
        </Article>

        <Article
          title="For your health"
          imgIsLeft={true}
          imgSrc={vegetables}
        >
          Well-planned vegan diets follow healthy eating guidelines, and contain
          all the nutrients that our bodies need. Both the{" "}
          <a
            href="https://www.bda.uk.com/"
            target="_blank"
            rel="noreferrer"
            className="text-green-600 font-semibold hover:underline"
          >
            British Dietetic Association{" "}
          </a>
          and the{" "}
          <a
            href="http://www.eatrightpro.org/~/media/eatrightpro%20files/practice/position%20and%20practice%20papers/position%20papers/vegetarian-diet.ashx"
            target="_blank"
            rel="noreferrer"
            className="text-green-600 font-semibold hover:underline"
          >
            American Academy of Nutrition and Dietetics{" "}
          </a>
          recognise that they are suitable for every age and stage of life. Some
          research has linked vegan diets with lower blood pressure and
          cholesterol, and lower rates of heart disease, type 2 diabetes and
          some types of cancer. Going vegan is a great opportunity to learn more
          about nutrition and cooking, and improve your diet. Getting your
          nutrients from plant foods allows more room in your diet for
          health-promoting options like whole grains, fruit, nuts, seeds and
          vegetables, which are packed full of beneficial fibre, vitamins and
          minerals.
        </Article>
        <Article
          title="For the environment"
          imgIsLeft={false}
          imgSrc={earth}
        >
          From recycling our household rubbish to cycling to work, we're all
          aware of ways to live a greener life. One of the most effective things
          an individual can do to lower their carbon footprint is to avoid all
          animal products. This goes way beyond the problem of cow flatulence!
        </Article>

        <Article
          title="Why is meat and diary so bad for the environment?"
          imgIsLeft={true}
          imgSrc={milk}
        >
          The production of meat and other animal products places a heavy burden
          on the environment - from crops and water required to feed the
          animals, to the transport and other processes involved from farm to
          fork. The vast amount of grain feed required for meat production is a
          significant contributor to deforestation, habitat loss and species
          extinction. In Brazil alone, the equivalent of 5.6 million acres of
          land is used to grow soya beans for animals in Europe. This land
          contributes to developing world malnutrition by driving impoverished
          populations to grow cash crops for animal feed, rather than food for
          themselves. On the other hand, considerably lower quantities of crops
          and water are required to sustain a vegan diet, making the switch to
          veganism one of the easiest, most enjoyable and most effective ways to
          reduce our impact on the environment.
        </Article>

        <Article
          title="For people"
          imgIsLeft={false}
          imgSrc={pigFriend}
        >
          Just like veganism is the sustainable option when it comes to looking
          after our planet, plant-based living is also a more sustainable way of
          feeding the human family. A plant-based diet requires only one third
          of the land needed to support a meat and dairy diet. With rising
          global food and water insecurity due to a myriad of environmental and
          socio-economic problems, there's never been a better time to adopt a
          more sustainable way of living. Avoiding animal products is not just
          one of the simplest ways an individual can reduce the strain on food
          as well as other resources, it's the simplest way to take a stand
          against inefficient food systems which disproportionately affect the
          poorest people all over the world.
        </Article>
      </div>
      <div className="container mx-auto w-full">
        <div className="flex flex-col px-5 2xl:my-auto 2xl:mx-auto 2xl:mr-8 md:p-5 md:m-5 overflow-hidden">
          <div>
            <div className="lg:w-3/4 xl:w-1/2 xl:ml=0 2xl:ml-32">
              <h5 className="text-md xl:text-xl font-bold mt-3 md:mt-10 text-gray-700 text-center">
                Why vegetarian isn't enough
              </h5>
              <p className="text-base mt-5 text-gray-800 text-justify">
                The suffering caused by the dairy and egg industry is possibly
                less well publicised than the plight of factory farmed animals.
                The production of dairy products necessitates the death of
                countless male calves that are of no use to the dairy farmer, as
                well as the premature death of cows slaughtered when their milk
                production decreases. Similarly, in the egg industry, even
                'ethical' or 'free range' eggs involve the killing of the
                'unnecessary' male chicks when just a day old.
              </p>
            </div>
            <div className="lg:w-3/4 xl:w-1/2 float-right xl:mr-10 2xl:mr-32">
              <h5 className="text-md xl:text-xl font-bold mt-3 md:mt-10 text-gray-700 text-center">
                Ethical meat?
              </h5>
              <p className="text-base mt-5 text-gray-800 text-justify">
                It's tempting to want to believe that the meat we eat is
                ethical, that our 'food animals' have lived full, happy lives
                and that they have experienced no pain or fear at the
                slaughterhouse. Yet the sad truth is that all living creatures
                (even those labelled 'free range' or 'organic') fear death, just
                as we do. No matter how they are treated when alive, they all
                experience the same fear when it comes to slaughter.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:w-2/3 xl:w-1/2 mx-auto">
          <div className="text-gray-800 text-justify mt-5 bg-green-300 rounded-2xl font-bold mb-10 mx-3 py-4 px-6">
            <p>
              It's time to ask ourselves: if it is now possible to live a life
              that involves delicious food and drink, delivers better health,
              leaves a smaller carbon footprint and avoids killing other
              creatures -
            </p>
            <p className="font-extrabold text-center">then why don't we?</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AboutVeganism;
