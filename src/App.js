import React, { useState } from "react";
import {
  Star,
  Sparkles,
  Heart,
  Users,
  Leaf,
  ArrowRight,
  CheckCircle,
  Instagram,
  Youtube,
  Play,
} from "lucide-react";

const ConsciousGlowLanding = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = () => {
    if (email.length > 0 && email.includes("@")) {
      // Hier würdest du später deine Email-Marketing Integration einbauen
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: "#1a1625",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Navigation */}
      <nav
        className="fixed top-0 w-full z-50 backdrop-blur-lg"
        style={{
          background: "rgba(26, 22, 37, 0.9)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
              }}
            >
              CG
            </div>
            <span className="text-white font-semibold text-xl">
              Conscious Glow
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#community"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Community
            </a>
            <a
              href="#about"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Über uns
            </a>
            <a
              href="#contact"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "#f093fb" }} />
            <span className="text-slate-300 text-sm">
              Schönheit mit Bewusstsein
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.025em",
            }}
          >
            Strahlend schön.
            <br />
            Bewusst leben.
          </h1>

          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Entdecke Clean Beauty, vegane Ernährung und nachhaltigen Lifestyle.
            Werde Teil einer Community, die die Welt durch bewusste
            Entscheidungen verändert.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() =>
                document
                  .getElementById("newsletter")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:transform hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
                boxShadow: "0 6px 20px rgba(102,126,234,0.3)",
              }}
              onMouseEnter={(e) =>
                (e.target.style.boxShadow = "0 10px 30px rgba(102,126,234,0.4)")
              }
              onMouseLeave={(e) =>
                (e.target.style.boxShadow = "0 6px 20px rgba(102,126,234,0.3)")
              }
            >
              Jetzt Community beitreten
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </button>

            <button className="flex items-center space-x-2 px-6 py-4 text-slate-300 hover:text-white transition-colors">
              <Play className="w-5 h-5" />
              <span>Erfahre mehr</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "2.000+", label: "Conscious Queens", icon: Users },
              { number: "95%", label: "Clean Beauty Erfolg", icon: Star },
              {
                number: "10.000+",
                label: "Glow Transformationen",
                icon: Heart,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-3xl backdrop-blur-lg"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <stat.icon
                  className="w-8 h-8 mx-auto mb-4"
                  style={{ color: "#f093fb" }}
                />
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Pillars */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Deine Glow-Reise beginnt hier
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Vier Säulen für dein bewusstes Leben - von Clean Beauty bis
              nachhaltiger Technologie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Glow Beauty",
                subtitle: "40% unserer Inhalte",
                description:
                  "Clean Beauty Reviews, DIY-Rezepte und Hautpflege-Routinen für deinen natürlichen Glow",
                icon: Sparkles,
                color: "#667eea",
              },
              {
                title: "Plant Power",
                subtitle: "35% unserer Inhalte",
                description:
                  "Vegane Rezepte, Superfoods und Supplements für Energie und strahlende Schönheit",
                icon: Leaf,
                color: "#10b981",
              },
              {
                title: "Conscious Living",
                subtitle: "20% unserer Inhalte",
                description:
                  "Zero-Waste Hacks, nachhaltiger Lifestyle und Eco-Fashion ohne Verzicht",
                icon: Heart,
                color: "#f093fb",
              },
              {
                title: "Tech for Good",
                subtitle: "5% unserer Inhalte",
                description:
                  "Nachhaltige Technologie und bewusste Geschenkideen für dein Umfeld",
                icon: Users,
                color: "#fbbf24",
              },
            ].map((pillar, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl backdrop-blur-lg hover:transform hover:scale-105 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <pillar.icon
                  className="w-12 h-12 mb-6"
                  style={{ color: pillar.color }}
                />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p
                  className="text-sm font-medium mb-4"
                  style={{ color: pillar.color }}
                >
                  {pillar.subtitle}
                </p>
                <p className="text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Werde Teil der Conscious Queens Community
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Du gehörst zu den bewussten Frauen, die verstehen, dass wahre
                Schönheit von innen kommt - und dass jede Kaufentscheidung die
                Welt verändert.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Exklusive Clean Beauty Empfehlungen",
                  "Glow Food Rezepte für strahlende Haut",
                  "Community von gleichgesinnten Frauen",
                  "Nachhaltige Lifestyle Hacks",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: "#10b981" }}
                    />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 rounded-full backdrop-blur-lg hover:transform hover:scale-110 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Instagram className="w-6 h-6" style={{ color: "#f093fb" }} />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full backdrop-blur-lg hover:transform hover:scale-110 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Youtube className="w-6 h-6" style={{ color: "#f093fb" }} />
                </a>
              </div>
            </div>

            <div
              className="p-8 rounded-3xl backdrop-blur-lg"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Dein Glow wartet auf dich
                </h3>
                <p className="text-slate-300">
                  Erhalte wöchentlich die besten Tipps für bewusste Schönheit
                </p>
              </div>

              <div id="newsletter" className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Deine E-Mail Adresse"
                  className="w-full px-6 py-4 rounded-full text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    focusRingColor: "#667eea",
                  }}
                />

                <button
                  onClick={handleSubmit}
                  disabled={isSubscribed}
                  className="w-full px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:transform hover:-translate-y-1 disabled:opacity-50"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
                    boxShadow: "0 6px 20px rgba(102,126,234,0.3)",
                  }}
                >
                  {isSubscribed
                    ? "✨ Willkommen bei den Conscious Queens!"
                    : "Jetzt Conscious Queen werden"}
                </button>
              </div>

              <p className="text-xs text-slate-400 text-center mt-4">
                Kein Spam. Nur bewusste Beauty-Tipps. Abmeldung jederzeit
                möglich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="py-16 px-6 border-t"
        style={{
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
                  }}
                >
                  CG
                </div>
                <span className="text-white font-semibold text-lg">
                  Conscious Glow e.V.
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Die führende Community für junge Frauen, die bewusst schön leben
                und dabei eine bessere Welt schaffen.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Community</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="block text-slate-300 hover:text-white transition-colors text-sm"
                >
                  TikTok
                </a>
                <a
                  href="#"
                  className="block text-slate-300 hover:text-white transition-colors text-sm"
                >
                  YouTube
                </a>
                <a
                  href="#"
                  className="block text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Newsletter
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <p>E-Mail: hello@conscious-glow.de</p>
                <p>Für Kooperationen: partnerships@conscious-glow.de</p>
              </div>
            </div>
          </div>

          <div
            className="border-t pt-8 mt-12 text-center text-sm text-slate-400"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
            }}
          >
            <p>&copy; 2025 Conscious Glow e.V. - Schönheit mit Bewusstsein</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ConsciousGlowLanding;
