import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Heart,
  Shield,
  Flame,
  Mail,
  Phone,
  MessageSquareMore,
} from "lucide-react";
import Link from "next/link";
import { phoneNumberWithoutFormatting } from "@/constants";

const MinistriesGroups = () => {
  const conventions = [
    {
      id: 1,
      title: "Women Convention",
      icon: Heart,
      description:
        "A powerful gathering of women in faith, focusing on spiritual growth, fellowship, and empowerment through God's word. Join us for inspiring teachings, worship, and sisterhood in Christ.",
      activities: [
        "Bible Study",
        "Prayer & Worship",
        "Fellowship",
        "Spiritual Mentorship",
      ],
      meetingTime: "Monthly - First Saturday",
    },
    {
      id: 2,
      title: "Men's Convention",
      icon: Shield,
      description:
        "A dynamic fellowship for men to grow in faith, leadership, and brotherhood. Experience powerful teachings that strengthen your walk with God and your role as a spiritual leader.",
      activities: [
        "Leadership Training",
        "Men's Bible Study",
        "Prayer Warriors",
        "Community Outreach",
      ],
      meetingTime: "Monthly - Second Saturday",
    },
  ];

  const prayerGroups = [
    {
      id: 1,
      name: "Elijah Prayer Group",
      icon: Flame,
      description:
        "Named after the mighty prophet Elijah, this group focuses on fervent prayer and spiritual warfare. Experience the power of persistent prayer and witness God's miraculous interventions.",
      focus: "Spiritual Warfare & Breakthrough",
      meetingTime: "Wednesdays 6:00 PM",
    },
    {
      id: 2,
      name: "Emmanuel Prayer Group",
      icon: Heart,
      description:
        "Emmanuel means 'God with us.' This group emphasizes intimate fellowship with God through prayer, worship, and meditation on His presence in our daily lives.",
      focus: "Intimate Worship & Fellowship",
      meetingTime: "Fridays 7:00 PM",
    },
    {
      id: 3,
      name: "Deborah Prayer Group",
      icon: Users,
      description:
        "Inspired by the prophetess and judge Deborah, this group focuses on prophetic prayer, intercession for the nation, and raising up spiritual leaders in the body of Christ.",
      focus: "Prophetic Prayer & Intercession",
      meetingTime: "Sundays 5:00 PM",
    },
    {
      id: 4,
      name: "Pentecost Prayer Group",
      icon: Flame,
      description:
        "Celebrating the power of Pentecost, this group emphasizes prayer in the Holy Spirit, spiritual gifts, and experiencing the fullness of God's power in prayer and ministry.",
      focus: "Holy Spirit Power & Gifts",
      meetingTime: "Saturdays 8:00 AM",
    },
  ];

  return (
    <div className="my-[20px]" id="ministries">
      <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ministries & Groups
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our vibrant community of believers through our various
            ministries and prayer groups. Find your place to grow, serve, and
            connect with others in faith.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Conventions Section */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            Conventions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {conventions.map((convention) => {
              const IconComponent = convention.icon;
              return (
                <Card
                  key={convention.id}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader className="bg-primary text-primary-foreground">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary-foreground/20 p-3 rounded-full">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div>
                        <CardTitle className="text-xl sm:text-2xl py-4">
                          {convention.title}
                        </CardTitle>
                        <p className="text-primary-foreground/80 text-sm">
                          {convention.meetingTime}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-foreground mb-6 leading-relaxed">
                      {convention.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        Activities Include:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {convention.activities.map((activity, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">
                              {activity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      Learn More & Join
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Prayer Groups Section */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            Prayer Groups
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {prayerGroups.map((group) => {
              const IconComponent = group.icon;
              return (
                <Card
                  key={group.id}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="bg-muted text-center p-4">
                    <div className="mx-auto bg-primary p-4 rounded-full w-fit mb-4">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {group.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {group.meetingTime}
                    </p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="bg-accent p-3 rounded-lg mb-4">
                        <p className="text-xs font-semibold text-accent-foreground mb-1">
                          Focus Area:
                        </p>
                        <p className="text-sm text-accent-foreground">
                          {group.focus}
                        </p>
                      </div>
                    </div>

                    <p className="text-foreground text-sm leading-relaxed mb-6">
                      {group.description}
                    </p>

                    <Button variant="outline" className="w-full">
                      Join Group
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-secondary rounded-lg p-6 sm:p-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-foreground mb-4">
              Ready to Join a Ministry?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our ministries and find the perfect
              group for your spiritual journey. We&apos;re here to help you connect
              and grow in faith.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-md mx-auto">
              <div className="flex flex-col items-center gap-2">
                <div className="bg-primary p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-secondary-foreground">
                  Email Us
                </h3>
                <p className="text-sm text-muted-foreground">
                  bfem_ministries@yahoo.com
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="bg-primary p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-secondary-foreground">
                  Call Us
                </h3>
                <p className="text-sm text-muted-foreground">+2348071536810</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <a href="mailto:bfem_ministries@yahoo.com?subject=Inquiry%20from%20BIBLE%20FAITH%20EVANGELICAL%20MINISTRIES%20Website&body=Hello%2C%20I%20have%20an%20inquiry%20regarding%20BIBLE%20FAITH%20EVANGELICAL%20MINISTRIES.">
                <Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                  Contact Church Office
                </Button>
              </a>
              <div className="text-center text-muted-foreground self-center">
                - or -
              </div>
              <Link
                href={`https://wa.me/${phoneNumberWithoutFormatting}?text=${encodeURIComponent(
                  `Hello, I'm interested in making an offer for a car `
                )}`}
                target="_blank"
              >
                <Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                  <MessageSquareMore />
                  Message Us on Whatsapp
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MinistriesGroups;
