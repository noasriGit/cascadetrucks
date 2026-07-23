import type { Review } from "@/lib/types";

// Individual reviews must be real, attributable, and used with the customer's
// permission, since they are surfaced in JSON-LD review schema. Placeholder
// review text is intentionally NOT shipped: fabricated reviews are a YMYL/E-E-A-T
// risk and can trigger a structured-data manual action.
//
// AggregateRating and Review JSON-LD are gated on a non-empty reviews array in
// insuranceAgencySchema(). Until real reviews are present, neither AggregateRating
// nor review entities are emitted (the on-page Google rating in data/site.ts may
// still be shown in UI without structured data).
export const reviews: Review[] = [
  {
    id: "review-asif-s-2016",
    author: "Asif S.",
    rating: 5,
    text: "I began using Cascades over 12 years ago for my first company. Over the course of a few years in dealing with them, it was always easy and hassle-free. I noticed they were different compared to my previous company mainly in the way they treated me - always happy to help. David, the main agent, keeps in touch and is always available to help - even when on vacation he responds to my texts. So over the years, one by one I ended up switching to him for my three companies, my home and cars. He never pressured me to leave the other companies, I did it on my own because of the customer service - not something you'd expect when dealing with insurance companies.",
    date: "2016-06-24",
    location: "Herndon, VA",
  },
  {
    id: "review-la-l-2017",
    author: "L.A. L.",
    rating: 5,
    text: "I have had a great experience with Cascade Insurance Group. They are so easy to work with and made switching auto insurance really easy. They are professional yet friendly, and really take the time to understand your needs. I can't say enough great things & highly recommend Cascade.",
    date: "2017-12-07",
    location: "Alexandria, VA",
  },
  {
    id: "review-irene-m-2017",
    author: "Irene M.",
    rating: 5,
    text: "Jon Gartrell is our agent and recommended to me by my lender. We ended up saving over $1000 on our homeowner's and auto policies and the coverage was significantly better. Communication was always responded to quickly and I have been happy with their level of service and knowledge of the industry.",
    date: "2017-10-10",
    location: "Fredericksburg, VA",
  },
  {
    id: "review-victoria-l-2018",
    author: "Victoria L.",
    rating: 5,
    text: "While I was a bit skeptical about doing business with Erie, an unknown (to me) insurance company, especially going through an independent third-party agent, my skepticism vanquished after my initial phone conversation with Jon Gartrell of a locally-run Cascade Insurance Group. He stood out among the several companies I had talked to before. He sounded friendly and sincere, he listened and explained things well. He was not pushy. On the contrary, he invited me to call him with other questions I may have later and when I did, he was not only responsive, I could tell he had done his homework in anticipating my new sets of questions. He seems like a real pro in his business: he is knowledgeable about the products, the procedures, and processes, and he is thorough in guiding me through the entire transition seamlessly from my old insurance company to Erie. Although I haven't been involved in an accident (hopefully never) to know just how good his service would be like, the way he handled my phone calls made me feel that I trust his professionalism and sincerity, without reservation, in cultivating a long-term, win-win business relationship with this customer.",
    date: "2018-01-26",
    location: "Arlington, VA",
  },
  {
    id: "review-colin-r-2019",
    author: "Colin R.",
    rating: 4,
    text: "Nice and professional people. They shop for and bundle insurance for you to get you the best rates. I like that they shop so I don't have to, and the savings definitely justify using them. They take care of all the paperwork too, and get it ready for you to sign.",
    date: "2019-01-25",
    location: "Manassas, VA",
  },
  {
    id: "review-parvane-k-2017",
    author: "Parvane K.",
    rating: 5,
    text: "I want to choose companies wisely. My money is limited, so I need to decide what is more important to me through my life, so, choosing Erie for car, home and life insurance was a very good decision. Even better when I met this great group of agents that represent Erie and the agency called Cascade Insurance Group LLC. Pamela Murphy, in particular, is the kindest person I have ever met. She is very knowledgeable, friendly, smart, and she knows how to invest money. I have my own decisions and experiences, but she really gives me more to learn! I had Allstate, Geico, Progressive…now I feel safer! way to go Mr. David, Pamela and everybody else at Cascade! You guys are doing an excellent job and I want all of you for me!!",
    date: "2017-02-19",
    location: "Manassas, VA",
  },
];
