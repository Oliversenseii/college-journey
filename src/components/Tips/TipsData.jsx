
const ExternalLink = ({ children, href, ...props }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

export const tipYears = [
  // ==================== 1. CAREER PATH ====================
  {
    id: 1,
    name: "Career Path",
    content: (
      <>
        <h2 className="year-title">How to Choose a Career Path</h2>

        <h3>1. Know Yourself</h3>
        <p>
          Think about what you <strong>love doing every day</strong> and what makes you feel happy. Ask yourself which <strong>school subjects are easy</strong> and which ones you enjoy the most. This helps you find a job that feels natural and fun.
        </p>
        <p>
          Write down your <strong>hobbies and talents</strong> even outside school. Talk to your family to see what they notice about your <strong>strengths</strong>. Knowing yourself is the first step to a good career.
        </p>
        <blockquote className="experience"><strong>“The best career is one that fits who you are.”</strong> — Oliver</blockquote>

        <h3>2. Look at Job Options</h3>
        <p>
          Search online for different kinds of jobs and read what people do every day. Find out how much <strong>salary in pesos</strong> they earn and if many people are needed in that field. This way you can see many choices without getting confused.
        </p>
        <p>
          Watch short videos of people working in jobs you like. Visit job websites or school <strong>career days</strong>. Exploring jobs helps you imagine your future clearly.
        </p>
        <blockquote className="experience"><strong>“Explore many paths to find the right one.”</strong> — Oliver</blockquote>

        <h3>3. Ask for Help</h3>
        <p>
          Talk to your <strong>teachers or school counselor</strong> about your ideas. They know a lot and can tell you what jobs match your skills. Asking questions makes your plan stronger.
        </p>
        <p>
          Speak with family members who have jobs and ask about their work. Join online groups where students share <strong>career tips</strong>. Getting advice from others saves time and worry.
        </p>
        <blockquote className="experience"><strong>“A wise person learns from others.”</strong> — Oliver</blockquote>

        <h3>4. Try Small Jobs</h3>
        <p>
          Do small work like helping at a store or <strong>volunteering</strong> to test a job. This shows you if you really like the work in real life. You can stop anytime if it does not feel right.
        </p>
        <p>
          Join school clubs or projects that match your dream job. Keep notes on what you like and what you do not. <strong>Trying things</strong> makes your choice smarter.
        </p>
        <blockquote className="experience"><strong>“Experience is the best teacher.”</strong> — Oliver</blockquote>

        <h3>5. Make a Plan</h3>
        <p>
          Pick one job idea and write down <strong>steps to reach it</strong>. Start with small goals like learning a skill or taking a class. Planning gives you direction and hope.
        </p>
        <p>
          Share your plan with someone you trust for feedback. Change it if needed as you grow. A <strong>good plan</strong> turns dreams into real steps.
        </p>
        <blockquote className="experience"><strong>“A goal without a plan is just a wish.”</strong> — Oliver</blockquote>

        <div className="table-wrapper">
          <table className="desktop-table">
            <thead>
              <tr>
                <th>Field</th>
                <th>Key Skills</th>
                <th>Average Salary</th>
                <th>Job Growth</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Technology</td><td>Problem solving</td><td>₱60,000+</td><td>Fast</td></tr>
              <tr><td>Healthcare</td><td>Helping people</td><td>₱40,000</td><td>Very Fast</td></tr>
              <tr><td>Business</td><td>Talking well</td><td>₱35,000</td><td>Steady</td></tr>
              <tr><td>Arts</td><td>Creativity</td><td>₱28,000</td><td>Slow</td></tr>
            </tbody>
          </table>

          <div className="mobile-table">
            {[
              ["Technology", "Problem solving", "₱60,000+", "Fast"],
              ["Healthcare", "Helping people", "₱40,000", "Very Fast"],
              ["Business", "Talking well", "₱35,000", "Steady"],
              ["Arts", "Creativity", "₱28,000", "Slow"]
            ].map((row, i) => (
              <div key={i} className="mobile-subject-card">
                <div className="mobile-row">
                  <span className="mobile-label">Field</span>
                  <span className="mobile-value">{row[0]}</span>
                </div>
                <div className="mobile-row">
                  <span className="mobile-label">Skills</span>
                  <span className="mobile-value">{row[1]}</span>
                </div>
                <div className="mobile-row">
                  <span className="mobile-label">Salary</span>
                  <span className="mobile-value">{row[2]}</span>
                </div>
                <div className="mobile-row">
                  <span className="mobile-label">Growth</span>
                  <span className="mobile-value">{row[3]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  },

  // ==================== 2. SURVIVE COLLEGE ====================
  {
    id: 2,
    name: "Survive College",
    content: (
      <>
        <h2 className="year-title">How to Survive College</h2>

        <h3>1. Be Yourself</h3>
        <p>
          Stay true to who you are and do not change for others. College is a time to grow but not to lose yourself. <strong>Being real</strong> helps you find friends who like you for you.
        </p>
        <p>
          Smile and speak up even if you feel shy at first. Everyone is learning how to fit in. <strong>Confidence</strong> grows when you accept yourself.
        </p>
        <blockquote className="experience"><strong>“Be yourself. Everyone else is taken.”</strong> — Oliver</blockquote>

        <h3>2. Learn More</h3>
        <p>
          Study <strong>extra things</strong> outside class to get better skills. Use free videos or websites to learn what you like. This makes you ready for jobs and exams.
        </p>
        <p>
          Spend 15 minutes a day on a new topic. Keep going even if it is hard at first. <strong>Extra learning</strong> opens more doors.
        </p>
        <blockquote className="experience"><strong>“Learning never ends.”</strong> — Oliver</blockquote>

        <h3>3. Manage Time</h3>
        <p>
          Plan your day with a <strong>notebook or phone app</strong>. Write down classes, study time, and rest. Good planning stops stress and helps you sleep.
        </p>
        <p>
          Do hard tasks first when you have energy. Say no to extra fun if you have work. <strong>Time control</strong> makes college easier.
        </p>
        <blockquote className="experience"><strong>“Time is your friend if you use it well.”</strong> — Oliver</blockquote>

        <h3>4. Stay Positive</h3>
        <p>
          Think good thoughts even when things go wrong. Look for lessons in every mistake. A <strong>happy mind</strong> helps you keep going.
        </p>
        <p>
          Write three good things that happened each day. Share smiles with friends. <strong>Positivity</strong> makes hard days lighter.
        </p>
        <blockquote className="experience"><strong>“A positive mind finds a way.”</strong> — Oliver</blockquote>

        <h3>5. Pick Good Friends</h3>
        <p>
          Choose friends who make you feel happy and safe. Look for people who help you grow. <strong>True friends</strong> support you in good and bad times.
        </p>
        <p>
          Spend time with those who share your goals. Avoid people who bring you down. <strong>Good friends</strong> make college fun.
        </p>
        <blockquote className="experience"><strong>“Friends are the family you choose.”</strong> — Oliver</blockquote>
      </>
    )
  },

  // ==================== 3. LEARN PROGRAMMING ====================
  {
  id: 3,
  name: "Learn Programming",
  content: (
    <>
      <h2 className="year-title">How to Learn Programming</h2>
      <p>
        Programming means telling a computer what to do in simple steps. You do not need to learn everything at once. <strong>Start with one language</strong> and grow slowly.
      </p>

      <h3>1. Basic Level</h3>
      <div className="level-container">
        <p><ExternalLink href="https://www.w3schools.com/html/default.asp">Hypertext Markup Language (HTML)</ExternalLink> is the standard language used to create the structure of web pages, like walls and doors in a house.</p>
        <p><ExternalLink href="https://www.w3schools.com/css/default.asp">Cascading Style Sheets (CSS)</ExternalLink> is the language used to add colors, fonts, and layouts to web pages, like paint and decoration.</p>
        <p><ExternalLink href="https://www.w3schools.com/js/default.asp">JavaScript</ExternalLink> is the programming language that makes web pages interactive with buttons, forms, and animations.</p>
      </div>
      
      <h3>2. Middle Level</h3>
       <div className="level-container">
          <p><ExternalLink href="https://www.w3schools.com/react/">React JavaScript</ExternalLink> is a front-end library used to build fast and reusable user interfaces, like assembling house parts using ready-made components.</p>
          <p><ExternalLink href="https://www.w3schools.com/bootstrap5/index.php">Bootstrap</ExternalLink> is a popular CSS framework that provides pre-built design templates and responsive layouts, like using a house design kit that works on all devices.</p>
          <p><ExternalLink href="https://tailwindcss.com/docs/installation/using-vite">Tailwind CSS</ExternalLink> is a utility-first CSS framework that lets you style elements quickly using predefined classes, like decorating a house with ready color and design options.</p>
          <p><ExternalLink href="https://www.w3schools.com/mysql/default.asp">MySQL</ExternalLink> is a relational database system used to store and manage data for websites, like a filing cabinet that keeps all your house records organized.</p>
       </div>

      <h3>3. Advanced Level</h3>
      <div className="level-container">
          <p><ExternalLink href="https://www.w3schools.com/php/default.asp">PHP (Hypertext Preprocessor)</ExternalLink> is a server-side scripting language used to handle backend processes, like the plumbing that connects your house to the water supply behind the walls.</p>
          <p><ExternalLink href="https://www.w3schools.com/python/default.asp">Python</ExternalLink> is a high-level programming language known for its simplicity and versatility, like a universal tool that can handle almost any household task.</p>
          <p><ExternalLink href="https://www.w3schools.com/java/default.asp">Java</ExternalLink> is an object-oriented programming language used to build secure and portable applications, like a strong foundation that supports buildings of any size.</p>
          <p><ExternalLink href="https://www.w3schools.com/cpp/default.asp">C++</ExternalLink> is a powerful, fast, and efficient programming language often used for system software and performance-heavy applications, like the engine that powers a machine.</p>
      </div>

      <div className="table-wrapper">
        <table className="desktop-table">
          <thead>
            <tr>
              <th>Language</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HTML</td>
              <td>is the <strong>skeleton</strong> (structure) of a webpage</td>
            </tr>
            <tr>
              <td>CSS</td>
              <td>is for the <strong>design or layout</strong></td>
            </tr>
            <tr>
              <td>JS</td>
              <td>adds <strong>interactivity and functionality</strong></td>
            </tr>
            <tr>
              <td>React JS</td>
              <td>builds <strong>dynamic user interfaces</strong></td>
            </tr>
            <tr>
              <td>Tailwind CSS & Bootstrap</td>
              <td>help with <strong>fast and responsive styling</strong></td>
            </tr>
            <tr>
              <td>MySQL</td>
              <td>stores the <strong>data behind the scenes</strong></td>
            </tr>
            <tr>
              <td>PHP</td>
              <td>works on the <strong>server-side</strong></td>
            </tr>
            <tr>
              <td>Python</td>
              <td>focuses on <strong>simplicity and flexibility</strong></td>
            </tr>
            <tr>
              <td>Java</td>
              <td>builds <strong>secure and scalable systems</strong></td>
            </tr>
            <tr>
              <td>C++</td>
              <td>drives <strong>high-performance applications</strong></td>
            </tr>
          </tbody>
        </table>

        <div className="mobile-table">
          {[
            ["HTML", "is the <strong>skeleton</strong> (structure) of a webpage"],
            ["CSS", "is for the <strong>design or layout</strong>"],
            ["JS", "adds <strong>interactivity and functionality</strong>"],
            ["React JS", "builds <strong>dynamic user interfaces</strong>"],
            ["Tailwind CSS & Bootstrap", "help with <strong>fast and responsive styling</strong>"],
            ["MySQL", "stores the <strong>data behind the scenes</strong>"],
            ["PHP", "works on the <strong>server-side</strong>"],
            ["Python", "focuses on <strong>simplicity and flexibility</strong>"],
            ["Java", "builds <strong>secure and scalable systems</strong>"],
            ["C++", "drives <strong>high-performance applications</strong>"]
          ].map((row, i) => (
            <div key={i} className="mobile-subject-card">
              <div className="mobile-row">
                <span className="mobile-label">Language</span>
                <span className="mobile-value">{row[0]}</span>
              </div>
              <div className="mobile-row">
                <span className="mobile-label">Summary</span>
                <span 
                  className="mobile-value" 
                  dangerouslySetInnerHTML={{ __html: row[1] }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

     <blockquote className="experience"><strong>“Pick one project and build it step by step. Practice makes you a pro!”</strong> — Oliver</blockquote>
    </>
  )
},

  // ==================== 4. BE AN ACHIEVER ====================
  {
    id: 4,
    name: "Be an Achiever",
    content: (
      <>
        <h2 className="year-title">How to Be an Achiever</h2>

        <h3>1. Set Clear Goals</h3>
        <p>
          Write down what you want to achieve this year like <strong>good grades</strong> or new skills. Make your goals simple and possible to reach in small steps. Clear goals give you a map to follow every day.
        </p>
        <p>
          Tell someone your goal so they can cheer you on. Check your progress every week. <strong>Goals</strong> keep you moving forward with purpose.
        </p>
        <blockquote className="experience"><strong>“Goals are dreams with deadlines.”</strong> — Oliver</blockquote>

        <h3>2. Work Every Day</h3>
        <p>
          Do a little work toward your goal each day even if only for <strong>ten minutes</strong>. Small daily actions add up to big results over time. Consistency is the secret of all successful people.
        </p>
        <p>
          Make a routine and stick to it like studying at the same time. Avoid waiting for perfect moments. <strong>Daily effort</strong> builds strong habits.
        </p>
        <blockquote className="experience"><strong>“Success is the sum of small efforts.”</strong> — Oliver</blockquote>

        <h3>3. Learn from Failure</h3>
        <p>
          When you fail at something see it as a <strong>lesson not the end</strong>. Ask what went wrong and how to do better next time. Failure is part of the path to success.
        </p>
        <p>
          Keep trying after falling down like learning to ride a bike. Share your story to help others. <strong>Failure</strong> makes you stronger and wiser.
        </p>
        <blockquote className="experience"><strong>“I failed my way to success.”</strong> — Oliver</blockquote>

        <h3>4. Stay Focused</h3>
        <p>
          Turn off your phone when you <strong>study or work</strong> on your goal. Keep your mind on one thing at a time. Focus helps you finish faster and better.
        </p>
        <p>
          Remove things that distract you from your space. Take short breaks to rest your brain. <strong>Staying focused</strong> brings real results.
        </p>
        <blockquote className="experience"><strong>“Focus is the key to success.”</strong> — Oliver</blockquote>

        <h3>5. Celebrate Wins</h3>
        <p>
          Give yourself a small reward when you reach a goal like eating your <strong>favorite food</strong>. Tell friends about your success to feel proud. Celebrating keeps you excited to do more.
        </p>
        <p>
          Look back at how far you have come every month. Thank yourself for the hard work. <strong>Wins big and small</strong> matter.
        </p>
        <blockquote className="experience"><strong>“Celebrate every step forward.”</strong> - Oliver</blockquote>
      </>
    )
  },

  // ==================== 5. MAINTAIN GOOD GRADES ====================
  {
    id: 5,
    name: "Maintain Grades",
    content: (
      <>
        <h2 className="year-title">How to Maintain Good Grades</h2>

        <h3>1. Study Every Day</h3>
        <p>
          Spend time reviewing your lessons a little bit each day after class. This helps you <strong>remember better</strong> than studying only before exams. Daily study makes learning easy and fun.
        </p>
        <p>
          Make short notes in your own words to understand faster. Read them again before sleep. <strong>Regular study</strong> builds strong knowledge.
        </p>
        <blockquote className="experience"><strong>“Little by little, a little becomes a lot.”</strong> — Oliver</blockquote>

        <h3>2. Ask Questions</h3>
        <p>
          Raise your hand in class if you do not understand something. Talk to your <strong>teacher after class</strong> for extra help. Asking shows you care about learning.
        </p>
        <p>
          Join study groups with classmates to share ideas. Write down answers to your questions. <strong>Clear doubts</strong> lead to better grades.
        </p>
        <blockquote className="experience"><strong>“The only dumb question is the one not asked.”</strong> — Oliver</blockquote>

        <h3>3. Stay Healthy</h3>
        <p>
          Sleep at least <strong>seven hours</strong> every night to keep your brain sharp. Eat good food like fruits and vegetables for energy. A healthy body helps you think clearly.
        </p>
        <p>
          Drink water and move around during breaks. Avoid too much junk food. <strong>Health</strong> is the base of good study.
        </p>
        <blockquote className="experience"><strong>“A healthy mind lives in a healthy body.”</strong> — Oliver</blockquote>

        <h3>4. Organize Notes</h3>
        <p>
          Keep your books and papers in order so you can find things fast. Use folders or colors to separate subjects. <strong>Organized notes</strong> save time and stress.
        </p>
        <p>
          Review old notes before new lessons to connect ideas. Throw away papers you do not need. <strong>Clean space</strong> means clear mind.
        </p>
        <blockquote className="experience"><strong>“Order brings peace.”</strong> — Oliver</blockquote>

        <h3>5. Practice Tests</h3>
        <p>
          Make your own test questions and answer them like in real exams. Time yourself to get used to pressure. <strong>Practice</strong> makes exams feel normal.
        </p>
        <p>
          Check your answers and fix mistakes before the real test. Do this every week. <strong>Practice</strong> turns fear into confidence.
        </p>
        <blockquote className="experience"><strong>“Practice makes perfect.”</strong> — Oliver</blockquote>
      </>
    )
  }
];
