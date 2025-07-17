import React, { useState } from "react";

const ConsciousGlowLanding = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = () => {
    if (email.length > 0 && email.includes("@")) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#1a1625",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        color: "white",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            CG
          </div>
          <span style={{ fontSize: "24px", fontWeight: "600" }}>
            Conscious Glow
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <div
        style={{
          padding: "60px 20px",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 16px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            marginBottom: "30px",
            fontSize: "14px",
            color: "#cbd5e1",
          }}
        >
          ✨ Schönheit mit Bewusstsein
        </div>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "20px",
            background: "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "1.2",
          }}
        >
          Strahlend schön.
          <br />
          Bewusst leben.
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#cbd5e1",
            marginBottom: "40px",
            lineHeight: "1.6",
          }}
        >
          Entdecke Clean Beauty, vegane Ernährung und nachhaltigen Lifestyle.
          Werde Teil einer Community, die die Welt durch bewusste Entscheidungen
          verändert.
        </p>

        <button
          onClick={() =>
            document
              .getElementById("newsletter")
              .scrollIntoView({ behavior: "smooth" })
          }
          style={{
            padding: "15px 30px",
            borderRadius: "25px",
            fontWeight: "600",
            color: "white",
            background: "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(102,126,234,0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 10px 30px rgba(102,126,234,0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 6px 20px rgba(102,126,234,0.3)";
          }}
        >
          Jetzt Community beitreten →
        </button>
      </div>

      {/* Stats */}
      <div
        style={{
          padding: "40px 20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            { number: "2.000+", label: "Conscious Queens" },
            { number: "95%", label: "Clean Beauty Erfolg" },
            { number: "10.000+", label: "Glow Transformationen" },
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                padding: "30px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  color: "#cbd5e1",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div
        id="newsletter"
        style={{
          padding: "60px 20px",
          maxWidth: "600px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            padding: "40px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Dein Glow wartet auf dich
          </h3>
          <p
            style={{
              color: "#cbd5e1",
              marginBottom: "30px",
            }}
          >
            Erhalte wöchentlich die besten Tipps für bewusste Schönheit
          </p>

          <div style={{ marginBottom: "20px" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Deine E-Mail Adresse"
              style={{
                width: "100%",
                padding: "15px 20px",
                borderRadius: "25px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
                fontSize: "16px",
                outline: "none",
                marginBottom: "15px",
              }}
            />

            <button
              onClick={handleSubmit}
              disabled={isSubscribed}
              style={{
                width: "100%",
                padding: "15px 30px",
                borderRadius: "25px",
                fontWeight: "600",
                color: "white",
                background: "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0 6px 20px rgba(102,126,234,0.3)",
                opacity: isSubscribed ? 0.5 : 1,
              }}
            >
              {isSubscribed
                ? "✨ Willkommen bei den Conscious Queens!"
                : "Jetzt Conscious Queen werden"}
            </button>
          </div>

          <p
            style={{
              fontSize: "12px",
              color: "#94a3b8",
            }}
          >
            Kein Spam. Nur bewusste Beauty-Tipps. Abmeldung jederzeit möglich.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "40px 20px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          color: "#94a3b8",
        }}
      >
        <p>&copy; 2025 Conscious Glow e.V. - Schönheit mit Bewusstsein</p>
      </div>
    </div>
  );
};

export default ConsciousGlowLanding;
