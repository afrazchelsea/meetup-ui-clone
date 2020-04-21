import Head from "next/head";
// import Avatar from "../components/Avatar.js";

const Home = () => (
  <div>
    <Head>
      <title>Homepage | Aditya Agarwal</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <nav className="flex items-center justify-between py-4 px-8 border-b-2 border-gray-300">
      <div className="w-32">
        <a href="https://www.meetup.com/">
          <img
            src="https://secure.meetupstatic.com/s/img/5455565085016210254/logo/svg/logo--script.svg"
            alt="meetup-logo"
          />
        </a>
      </div>
      <div>
        <div bg-color-blue-700>
          <span>Group</span>
          <br />
          <span>50% off</span>
        </div>
        <div className="border-r border-gray-300 mx-4"></div>
        <div className="flex items-center">
          <ul className="flex space-x-3 ">
            <li>Explore</li>
            <li>Notifications</li>
            <li>Messages</li>
            <li>{/* <Avatar size="sm" /> */}</li>
          </ul>
        </div>
      </div>
    </nav>
    <header className="px-32">Header</header>
    <main className="text-gray-900 px-32 bg-body flex space-x-32  pt-10 pb-16">
      <div className="w-8/12">
        <section className="mb-10">
          <h4 className="font-medium text-xl mb-4">Details</h4>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            architecto explicabo iusto delectus labore natus beatae. Assumenda
            ab non doloribus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            architecto explica
          </p>
        </section>
        <section className="mb-10">
          <div className="flex justify-between">
            <h4 className="font-medium text-xl mb-4">Attendees</h4>
            <button className="text-blue-500">See all</button>
          </div>
          <ul className="grid gird-cols-4 gap-4">
            <li className="bg-white rounded-lg flex flex-col items-center py-4  ">
              {/* <Avatar /> */}
              <h6 className="font-bold text-sm">Lawerance D</h6>
              <p className="text-sm text-gray-600">Member</p>
              <p className="text-sm text-gray-600">8 shared groups</p>
            </li>
          </ul>
        </section>
      </div>
      <aside className="w-4/12"></aside>
    </main>
    <footer className="px-32"></footer>
  </div>
);

export default Home;
