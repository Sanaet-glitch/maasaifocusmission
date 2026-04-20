import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Users, Leaf } from "lucide-react";

export default function Events() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-maasai-800 to-maasai-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-serif font-bold mb-6">Trainings & Events</h1>
          <p className="text-lg text-maasai-100 max-w-2xl mx-auto">
            Our 2026 Community Roadmap. We believe in planned, strategic outreach that respects the rhythm of our community.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Planned Outreach Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-maasai-900 mb-6 text-center">
            Planned Outreach & Sensitization
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            Our events are developed in close consultation with local elders. While dates are subject to community needs, these represent our core focus areas for the coming year.
          </p>

          {/* Events Grid */}
          <div className="space-y-8">
            {/* Event 1: Education Awareness */}
            <div className="border-l-4 border-maasai-600 pl-8 py-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Calendar className="w-6 h-6 text-maasai-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-maasai-600 uppercase tracking-wide">Q3 2026</p>
                  <h3 className="text-2xl font-serif font-bold text-maasai-900 mt-2">
                    Education Awareness Workshop
                  </h3>
                </div>
              </div>
              <p className="text-sm font-semibold text-maasai-600 uppercase tracking-wide mb-3">
                📍 Narok County
              </p>
              <p className="text-gray-700 leading-relaxed">
                A community-led dialogue focused on school enrollment, retention strategies, and the importance of girl-child education.
              </p>
            </div>

            {/* Event 2: Health & Nutrition */}
            <div className="border-l-4 border-maasai-600 pl-8 py-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Calendar className="w-6 h-6 text-maasai-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-maasai-600 uppercase tracking-wide">Q4 2026</p>
                  <h3 className="text-2xl font-serif font-bold text-maasai-900 mt-2">
                    Health & Nutrition Community Day
                  </h3>
                </div>
              </div>
              <p className="text-sm font-semibold text-maasai-600 uppercase tracking-wide mb-3">
                📍 Kajiado Region
              </p>
              <p className="text-gray-700 leading-relaxed">
                A day of sensitization focused on family wellness, preventive care, and nutritional best practices for rural households.
              </p>
            </div>

            {/* Event 3: Ongoing Leadership */}
            <div className="border-l-4 border-maasai-600 pl-8 py-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Users className="w-6 h-6 text-maasai-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-maasai-600 uppercase tracking-wide">Ongoing</p>
                  <h3 className="text-2xl font-serif font-bold text-maasai-900 mt-2">
                    Local Leadership Engagement
                  </h3>
                </div>
              </div>
              <p className="text-sm font-semibold text-maasai-600 uppercase tracking-wide mb-3">
                📍 Narok & Kajiado
              </p>
              <p className="text-gray-700 leading-relaxed">
                Regular consultative meetings with community elders and local leaders to ensure project alignment with traditional values.
              </p>
            </div>
          </div>
        </section>

        {/* Why We Train Section */}
        <section className="bg-maasai-50 rounded-lg p-8 mb-20">
          <h2 className="text-3xl font-serif font-bold text-maasai-900 mb-8 text-center">
            Why We Train
          </h2>

          <blockquote className="text-center mb-12">
            <p className="text-xl text-maasai-900 italic font-semibold mb-3">
              "Sensitization is not about changing people; it is about providing the tools for people to lead their own change."
            </p>
          </blockquote>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Principle 1 */}
            <div className="bg-white p-6 rounded-lg border border-maasai-200">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-6 h-6 text-maasai-600" />
                <h3 className="text-xl font-serif font-bold text-maasai-900">Community-Led</h3>
              </div>
              <p className="text-gray-700">
                Every training session is co-designed with community leaders to ensure relevance and respect.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="bg-white p-6 rounded-lg border border-maasai-200">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-6 h-6 text-maasai-600" />
                <h3 className="text-xl font-serif font-bold text-maasai-900">Sustainable Impact</h3>
              </div>
              <p className="text-gray-700">
                We focus on skills and knowledge that remain in the community long after the event is over.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mb-20">
          <h2 className="text-3xl font-serif font-bold text-maasai-900 mb-8">
            Get Involved in Our Roadmap
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Interested in partnering for an event or volunteering as a facilitator? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/partner">
              <Button className="bg-maasai-600 hover:bg-maasai-700 text-white px-8 py-6 text-lg">
                Partner for an Event
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button variant="outline" className="border-maasai-600 text-maasai-600 hover:bg-maasai-50 px-8 py-6 text-lg">
                Volunteer as a Facilitator
              </Button>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif font-bold text-maasai-900 mb-6">Questions? Contact Us</h3>
          <p className="text-gray-700 mb-4">
            P.O. Box XXXX, Kajiado, Kenya
          </p>
          <a href="mailto:info@maasaifocusmission.org" className="text-maasai-600 hover:text-maasai-700 font-semibold">
            info@maasaifocusmission.org
          </a>
        </section>
      </div>
    </div>
  );
}
