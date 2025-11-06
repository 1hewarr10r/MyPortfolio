export default function Hobbies() {
  const hobbies = [
    {
      title: "Music",
      desc: "Rock & vibe music — The Neighbourhood, Chase Atlantic, Green Day, Linkin Park.",
      img: "./public/projects/hobbies/music.jpg",
    },
    {
      title: "Martial Arts",
      desc: "Used to do kickboxing, boxing, wrestling, judo, MMA — discipline and focus.",
      img: "./public/projects/hobbies/martial.jpg",
    },
    {
      title: "Cycling",
      desc: "Prefer biking over buses — freedom and clarity on the road.",
      img: "./public/projects/hobbies/cycling.jpg",
    },
    {
      title: "Soccer",
      desc: "Used to play a lot — love the teamwork and energy, almost went professional. Was playiing as a Striker for soccer club in Kyrgyzstan.",
      img: "./public/projects/hobbies/soccer.jpg",
    },
    {
      title: "Movies",
      desc: "Psychological thrillers like *Fight Club* and *Shutter Island*.",
      img: "./public/projects/hobbies/movies.jpg",
    },
    {
      title: "Cars",
      desc: "Love muscle and supercars — favorite and goal cars are *Mclaren P1* and *Lexus LC500*",
      img: "./public/projects/hobbies/cars.jpg",
    },
    {
      title: "Tech Exploration",
      desc: "Exploring AI, wearables, and new tech tools like Whoop.",
      img: "./public/projects/hobbies/tech.jpg",
    },
    {
      title: "Video Games",
      desc: "Soulslike and open-world games — *Elden Ring* and *Skyrim*.",
      img: "./public/projects/hobbies/gaming.jpg",
    },
  ];

  return (
    <section className="container section">
      <h2 className="title">Hobbies</h2>
      <div className="grid cols-3">
        {hobbies.map((h, i) => (
          <div key={i} className="card hobby-card">
            <div
              className="hobby-photo"
              style={{ backgroundImage: `url(${h.img})` }}
            ></div>
            <div className="hobby-info">
              <h3>{h.title}</h3>
              <p className="muted">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}