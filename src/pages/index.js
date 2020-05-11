import Head from "next/head";
import Avatar from "../components/Avatar";
import Comment from "../components/Comment";

const comments = [
  {
    id: "vnegbe",
    name: "Aditya Agarwal",
    comment: `Since this is online meetup, can we shift the time early in the day? Then it's easier for me to attend from
    the other side of the globe. If this time works for everyone then it's ok`,
    replies: [
      {
        id: "fkguehge",
        name: "Shad Mirza",
        comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quos non debitis cupiditate, voluptate, est, perspiciatis laboriosam corrupti autem quibusdam dolores. Magnam, ab eos numquam eum cum possimus labore impedit?`,
        replies: [
          {
            id: "bnrugrge",
            name: "Aditya Agarwal",
            comment: `works for me`,
          },
        ],
      },
    ],
  },
  {
    id: "egihuiee",
    name: "Michael Scott",
    comment: "I'm the best boss.",
  },
];

const Home = () => (
  <div>
    <Head>
      <title>Meetup UI Clone | Afraz Momin</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <nav className="flex items-center justify-between py-4 px-8 border-b-2 border-gray-300">
      <div className="w-32">
        <a href="https://www.meetup.com/" target="_blank">
          <img
            src="https://www.meetup.com/mu_static/en-US/logo--script.004ada05.svg"
            alt="meetup-logo"
          />
        </a>
      </div>
      <div className="flex">
        <div className="text-blue-600 font-bold text-center">
          <span>Start a new group</span>
          <br />
          <span>50% off</span>
        </div>
        <div className="border-r border-gray-300 mx-4"></div>
        <div className="flex items-center">
          <ul className="flex space-x-3 text-center text-gray-700 text-sm">
            <li>Explore</li>
            <li>Notifications</li>
            <li>Messages</li>
            <li>
              <Avatar size="sm" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <header className="px-32 py-4 flex justify-between items-end">
      <div>
        <span className="text-gray-600">Saturday, May 16, 2020</span>
        <h1 className="text-3xl font-black mb-4">react online meetup #02</h1>
        <div>
          <Avatar />
          <div>
            <p className="mt-2">Hosted by</p>
            <h6 className="font-medium">Afraz Momin</h6>
          </div>
        </div>
      </div>
      <div>
        <button className="text-gray-600 border border-gray-500 px-6 py-2 rounded-lg">
          Share
        </button>
      </div>
    </header>

    <main className="text-gray-900 px-32 bg-body pt-10 pb-16">
      <div className="flex space-x-32">
        <div className="w-8/12">
          <section className="mb-10">
            <h4 className="font-medium text-xl mb-5">Details</h4>
            <p className="mb-3">
              This is online meetup which you can join with Zoom/Youtube Live.
            </p>
            <br />
            <p>
              If you like to present in this meetup propose a talk{" "}
              <a
                className="text-blue-500"
                href="https://forms.gle/k5er77BpC5EDR4sE9"
              >
                https://forms.gle/k5er77BpC5EDR4sE9
              </a>
            </p>
          </section>
          <section className="mb-10">
            <div className="flex justify-between">
              <h4 className="font-medium text-xl mb-5">Attendees (69)</h4>
              <button className="text-blue-500">See all</button>
            </div>
            <ul className="grid grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <li
                  key={index}
                  className="bg-white rounded-lg flex flex-col items-center py-4 hover:shadow-md"
                >
                  <Avatar size="lg" alt="User" className="mb-4" />
                  <h6 className="font-bold text-sm">Lawerance D</h6>
                  <p className="text-sm text-gray-600">Member</p>
                  <p className="text-sm text-gray-600">8 shared groups</p>
                </li>
              ))}
            </ul>
          </section>
          <section className="">
            <h4 className="font-medium text-xl mb-5">Comments</h4>
            <div>
              {comments.map((comment) => (
                <Comment key={comment.id} data={comment} />
              ))}
            </div>
          </section>
        </div>
        <aside className="">
          <div>
            <img
              src="https://secure.meetupstatic.com/photos/event/b/6/c/8/highres_488566792.jpeg"
              alt=""
            />
            <div>
              <h6>ReactJS Bangalore</h6>
              <p>Public Group</p>
            </div>
          </div>
          <div>
            <div>
              <span>o</span>
              <div>something</div>
            </div>
            <div>
              <span>o</span>
              <div>soemthing</div>
            </div>
          </div>
        </aside>
      </div>
    </main>
    <footer className="px-32"></footer>
  </div>
);

export default Home;
