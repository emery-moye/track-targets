const colleges = [
  { name: "Arkansas", logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/8.png" },
  { name: "LSU", logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/99.png" },
  { name: "UCLA", logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/26.png" },
  { name: "Stanford", logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/24.png" },
  { name: "Florida", logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/57.png" },
  { name: "Harvard", logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/108.png" },
  { name: "USC", logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/30.png" },
  { name: "Penn State", logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/213.png" },
  { name: "Boston University", logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/104.png" },
  { name: "Texas", logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/251.png" },
  { name: "Oregon", logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2483.png" },
  { name: "Army", logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/349.png" },
];

export function CollegeLogoMarquee() {
  return (
    <div className="w-full overflow-hidden py-6">
      <div className="flex animate-marquee">
        {/* First set of logos */}
        {colleges.map((college, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 mx-6 md:mx-10"
          >
            <img
              src={college.logo}
              alt={college.name}
              className="h-12 md:h-16 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {colleges.map((college, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 mx-6 md:mx-10"
          >
            <img
              src={college.logo}
              alt={college.name}
              className="h-12 md:h-16 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
