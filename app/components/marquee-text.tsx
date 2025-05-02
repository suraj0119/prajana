export function MarqueeText() {
  return (
    <div className="relative flex overflow-hidden bg-primary py-4">
      <div className="animate-marquee whitespace-nowrap">
        <span className="font-raleway mx-4 text-lg text-white">
          Join us in making a difference! Your support can transform lives and build stronger communities.
        </span>
        <span className="font-raleway mx-4 text-lg text-white">
          Volunteer opportunities available now - Be part of the change!
        </span>
        <span className="font-raleway mx-4 text-lg text-white">
          Every donation counts - Help us reach more people in need.
        </span>
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
        <span className="font-raleway mx-4 text-lg text-white">
          Join us in making a difference! Your support can transform lives and build stronger communities.
        </span>
        <span className="font-raleway mx-4 text-lg text-white">
          Volunteer opportunities available now - Be part of the change!
        </span>
        <span className="font-raleway mx-4 text-lg text-white">
          Every donation counts - Help us reach more people in need.
        </span>
      </div>
    </div>
  )
}
