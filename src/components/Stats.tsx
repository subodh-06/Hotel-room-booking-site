

interface StatsProps {
    heading?: string;
    description?: string;
    link?: {
      text: string;
      url: string;
    };
    stats?: Array<{
      id: string;
      value: string;
      label: string;
    }>;
  }
  
  const Stats = ({
    heading = "Luxury, Comfort & Unmatched Service",
    description = "Your perfect stay, just a click away",
    
  
    stats = [
        {
            id: "stat-1",
            value: "95%",
            label: "Guest Satisfaction Rate",
          },
          {
            id: "stat-2",
            value: "50,000+",
            label: "Happy Guests Served",
          },
          {
            id: "stat-3",
            value: "500+",
            label: "Premium Hotels Across the Country",
          },
          {
            id: "stat-4",
            value: "24/7",
            label: "Customer Support Available",
          },
    ],
  
  }: StatsProps) => {
    return (
      <section className="py-12 md:py-24 bg-[url(/grid.svg)] bg-[#141413]">
        <div className="container mx-auto px-6">
          {/* Heading Section */}
          <div className="container">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-2xl font-bold md:text-4xl text-gray-50">{heading}</h2>
          <p className="text-lg text-gray-200">{description}</p>
        </div>
        </div>
  
          {/* Stats Grid */}
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-5xl font-extrabold text-primary text-white">{stat.value}</div>
                <p className="mt-2 text-lg text-muted-foreground text-gray-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Stats;
  