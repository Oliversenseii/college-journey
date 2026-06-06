const articles = [
  {
    title: "Dean;s Lister A.Y 2025 - 2026",
    byline: "Date • May 31, 2026",
    img: "./home/h-3.jpg",
    quote: "“I didn't come this far to only come this far.”",
    span: 1,
  },
  {
    title: "Behind the Scenes: Creative Shots",
    byline: "Date • Apr 27, 2026",
    images: [
      { src: "./home/h-1.jpg", alt: "Creative Shots" },
      { src: "./home/h-2.jpg", alt: "Creative Shots" },
    ],
    content: "3 out of 4 barkada members captured inside the production studio, striking confident poses before the shoot begins. Taken at Kolehiyo ng Lungsod ng Dasmariñas.",
    quote: "“Great content starts with a great team.”",
    span: 2,
    collage: true,
    extra: { 
      tags: ["Creative", "3 out of 4", "4th Year"], 
      readTime: "1 min" 
    }
  },
  {
    title: "Before the Battle of the Bands: IS Week Highlights",
    byline: "Date • Apr 26, 2025",
    img: "./Home2.jpg",
    content: "This photo captures the moments before the Battle of the Bands event during IS Week. They are also holding medals and awards for the champions of other events. Taken at Kolehiyo ng Lungsod ng Dasmariñas.",
    quote: "“A moment of pride before the music begins.”",
    span: 2,
  },
  {
    title: "After Our E-Commerce Presentation",
    byline: "Date • Oct 10, 2024",
    img: "./Home3.jpg",
    content: (
      <>
        This photo was taken right after our <strong>E-Commerce</strong> presentation.
        <br /><br />
        We spent days preparing our products and building our website, from brainstorming ideas,
        designing layouts, and fixing bugs to practicing our pitch until everything felt just right.
        <br /><br />
        When the presentation ended, the mix of exhaustion, laughter, and pride made it all worth it.
        It was a moment that showed how much we have grown since our first year, now more confident,
        experienced, and ready for any challenge.
        <br /><br />
        In this photo, we honestly look like candidates running for office,
        smiling, posing, and celebrating the hard work we put in together.
      </>
    ),
    quote: "“Third year students with confidence, laughter, and memories worth keeping.”"
  },
  {
    title: "MassKara Festival Performance at KLD",
    byline: "Date • Jun 27, 2023",
    content: (
      <>
        This photo was taken during our dance performance for the <strong>MasKara Festival</strong> presentation.
        <br /><br />
        We practiced for days to perfect every move, matching our choreography with colorful smiles and lively energy that captured the spirit of the festival.
        <br /><br />
        The performance took place at the <strong>KLD Building 1 Gymnasium</strong>, filled with cheers, lights, and excitement.
        <br /><br />
        It was one of those moments that reminded us how teamwork, passion, and rhythm can bring everyone together.
      </>
    ),
  },
  {
    img: "./Home4.jpg",
    quote: "“Colors, music, and movement — our own MasKara story at KLD.”"
  },
  {
    title: "Why Did We Perform the MassKara Festival?",
    byline: "Date • Jun 27, 2023",
    content: (
      <>
        The <strong>MassKara Festival</strong> is an annual festival in Bacolod City, held every fourth Sunday of October.
        <br /><br />
        It celebrates the city’s charter with colorful street parades, smiling masks, and festive costumes—honoring Bacolod as the <em>City of Smiles</em>.
        <br /><br />
        We performed the dance in <strong>Physical Education</strong> to show creativity, teamwork, and love for Filipino culture.
        <br /><br />
        It was a fun, memorable experience that brought joy to everyone.
      </>
    )
  },
  {
    title: "Late Night Swim at Coco Valley",
    byline: "Date • Jun 15, 2023",
    images: [
      { src: "./Home8.jpg", alt: "Group in pool at night" },
      { src: "./Home8.1.jpg", alt: "Section laughing by water" }
    ],
    content: (
      <>
        Finally enjoyed a late-night swim with my <strong>2nd-year section</strong> at Coco Valley after a long time.
        <br /><br />
        We <strong>eat, drink, laugh</strong>, and swim — pure vibes with the squad all night long. It was a fun, memorable experience that brought joy to everyone.
      </>
    ),
    quote: "“Long wait, worth it.”",
    span: 2,
    collage: true,
    extra: { 
      tags: ["Coco Valley", "Late Night", "2nd Year", "Swimming"], 
      readTime: "1 min" 
    }
  },
  {
    title: "Foundation Week at KLD",
    byline: "Date • Sep 16, 2024",
    img: "./Home7.jpg",
    content: "Foundation Week at KLD. Captured by the photographer. Me on the left, Aquino in the center, Salasbar on the right.",
    quote: "“Foundation Week moments.”",
  },
  {
    title: "Late Nights After Night Class, 2nd Year",
    byline: "Date • Oct 28, 2024",
    img: "./Home9.jpg",
    content: "Back in 2nd year — night class every week. Class ends, campus is dark, and we're still walking home. Full of stories and laughter. I miss those nights.",
    quote: "“Late nights, best memories.”"
  },
  {
    title: "College Days: Chaos, Breaks & Survival",
    byline: "Date • Oct 31, 2025",
    content: (
      <>
        In college, sometimes you come in <strong>early</strong> — 7 AM sharp — just to beat the crowd, and leave at <strong>night</strong>, eyes heavy, stomach growling.
        <br /><br />
        Some days: 1-3 hour breaks — we'd rest at the <strong>grandstand</strong> or hang out near <strong>Encantadia</strong>, just chilling before the next class.
        <br /><br />
        Other times? <strong>No break at all</strong> — 6 or 7 straight hours of classes, back-to-back, no mercy. Professor after professor, room to room, brain fried by 7 PM.
        <br /><br />
        Exhausting. Annoying. But yeah — those were the days. Real sacrifice for the dream.
      </>
    ),
    quote: "“Tired, broke, but alive.”"
  },
  { 
    img: "./Home10.jpg", 
    content: "There was a time around 7:00 PM when only a few of us remained in class since it was already dark. Before that, there were more of us.", 
    quote: "“Fewer people, deeper memories.”",
  },
  {
    title: "My Birthday Surprise",
    byline: "Date • Dec 12, 2024",
    img: "./Home11.jpg",
    content: "It was my birthday, and we had a regular class that day. After class, my classmates surprised me with a little celebration. I felt so thankful for the way they treated me—it really made my day special.",
    quote: "“The best gifts come from the heart.”",
    span: 2,
    extra: { tags: ["birthday", "classmates", "gratitude"], readTime: "1 min" }
  },
  {
    title: "Post-P.E Basketball Moments",
    byline: "Date • Nov 12, 2023",
    img: "./Home12.jpg",
    content: "After P.E. class, where we played basketball, we gathered for a group photo. This was taken at the KLD Gymnasium, Building 1—sweaty, tired, but full of smiles and good vibes.",
    quote: "“Teamwork makes the dream work.”",
  },
  {
    title: "Encantadia Teasing Session",
    byline: "Date • Mar 12, 2024",
    img: "./Home15.jpg",
    content: (
      <>
        This was taken at <strong>Encantadia</strong>, our favorite hangout spot. <br /><br />
        
        On my <strong>left</strong> is my classmate. She looks just like <strong>April Boy Regino</strong>! We teased her all day because the resemblance was so funny. <br /><br />
        
        On the <strong>right side</strong> is the place where we bought food. There was still a <strong>canteen</strong> back then. <br />
        So many good laughs and memories!
      </>
    ),
    quote: "“Laughter is the best tambayan.”",
  },
  {
    title: "Long Vacant Vibes at Encantadia",
    byline: "Date • Feb 26, 2024",
    images: [
      { src: "./Home14.2.jpg", alt: "Group chilling at Encantadia" },
      { src: "./Home14.3.jpg", alt: "Memories from our favorite spot" }
    ],
    content: (
      <>
        This was during one of our <strong>long vacant periods</strong>, hanging out at what we called <strong>Encantadia</strong>—our ultimate tambayan. <br /><br />
        
        These photos capture those <strong>carefree moments</strong> with friends, laughing, talking, and just being present. <br /><br />
        
        Looking back, it's <strong>bittersweet</strong>—Encantadia, the spot we loved so much, is gone now. <br />
        All that's left are these <strong>memories</strong>.
      </>
    ),
    quote: "“Some places live only in memories.”",
    span: 2,
    collage: true,
    extra: { 
      tags: ["tambayan", "friends", "2nd Year", "nostalgia"], 
      readTime: "2 min" 
    }
  },
  {
    title: "First P.E. Day Together",
    byline: "Date • Sep 12, 2022",
    img: "./Home17.jpg",
    content: (
      <>
        This was the <strong>first day</strong> we all came together for <strong>Physical Education</strong>. <br /><br />
        
        Before this, everything was <strong>online</strong>. This moment was so special because <strong>everything started here</strong>. <br />
        Little by little, we got to know each other. <br /><br />
        
        <strong>1st Year, 1st Semester</strong>—the beginning of it all.
      </>
    ),
    quote: "“From online to real life—where friendships begin.”",
  },
  {
    title: "House Hopping and Full Bellies",
    byline: "Date • Oct 12, 2022",
    img: "./Home16.jpg",
    content: (
      <>
        This was the day we went to our classmate’s house and ate together. <br /><br />
        
        We were so <strong>full</strong> and it was totally <strong>worth it</strong>! <br />
        Great bonding with <strong>Ercelle, Roger, Lance, Angelo,</strong> and <strong>Kenneth</strong> (it was his house). <br /><br />
        
        Simple moments, big memories.
      </>
    ),
    quote: "“Good food, better friends.”",
    span: 2,
  }
];

export default articles;
