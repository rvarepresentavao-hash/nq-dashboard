export default function Home() {
  return (
    <div
      style={{
        background: "#071018",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          color: "#00ff88",
          fontSize: "48px",
          marginBottom: "30px",
        }}
      >
        NQ CME ALPHA ELITE
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {/* NASDAQ */}
        <div
          style={{
            background: "#111827",
            padding: "20px",
            borderRadius: "18px",
          }}
        >
          <h2 style={{ color: "#00ff88" }}>NASDAQ</h2>
          <p style={{ fontSize: "28px" }}>21,542</p>
          <p style={{ color: "#22c55e" }}>+1.24%</p>
        </div>

        {/* DXY */}
        <div
          style={{
            background: "#111827",
            padding: "20px",
            borderRadius: "18px",
          }}
        >
          <h2 style={{ color: "#00d0ff" }}>DXY</h2>
          <p style={{ fontSize: "28px" }}>104.32</p>
          <p style={{ color: "#ef4444" }}>-0.31%</p>
        </div>

        {/* VIX */}
        <div
          style={{
            background: "#111827",
            padding: "20px",
            borderRadius: "18px",
          }}
        >
          <h2 style={{ color: "#ffae00" }}>VIX</h2>
          <p style={{ fontSize: "28px" }}>14.82</p>
          <p style={{ color: "#22c55e" }}>LOW VOLATILITY</p>
        </div>

        {/* Economic Calendar */}
        <div
          style={{
            background: "#111827",
            padding: "20px",
            borderRadius: "18px",
          }}
        >
          <h2 style={{ color: "#ff4d6d" }}>Economic Calendar</h2>

          <div style={{ marginTop: "15px" }}>
            <p>USD CPI — 09:30</p>
            <p>FOMC SPEECH — 14:00</p>
            <p>NFP — Friday</p>
          </div>
        </div>

        {/* Market Sessions */}
        <div
          style={{
            background: "#111827",
            padding: "20px",
            borderRadius: "18px",
          }}
        >
          <h2 style={{ color: "#8b5cf6" }}>Market Sessions</h2>

          <div style={{ marginTop: "15px" }}>
            <p>🇺🇸 New York — OPEN</p>
            <p>🇬🇧 London — OPEN</p>
            <p>🇯🇵 Tokyo — CLOSED</p>
          </div>
        </div>

        {/* Fear and Greed */}
        <div
          style={{
            background: "#111827",
            padding: "20px",
            borderRadius: "18px",
          }}
        >
          <h2 style={{ color: "#00ff88" }}>Fear & Greed</h2>

          <div
            style={{
              marginTop: "20px",
              height: "20px",
              width: "100%",
              background: "#1f2937",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "72%",
                height: "100%",
                background: "#22c55e",
              }}
            />
          </div>

          <p style={{ marginTop: "10px" }}>72 — GREED</p>
        </div>
      </div>

      {/* NEWS */}
      <div
        style={{
          marginTop: "30px",
          background: "#111827",
          padding: "20px",
          borderRadius: "18px",
        }}
      >
        <h2 style={{ color: "#00d0ff" }}>Market News</h2>

        <div style={{ marginTop: "20px" }}>
          <p>• Nasdaq rises after CPI data release</p>
          <p>• Traders expect possible rate cuts</p>
          <p>• AI stocks continue strong momentum</p>
          <p>• Bond yields fall during NY session</p>
        </div>
      </div>

      {/* SUPPLY DEMAND */}
      <div
        style={{
          marginTop: "30px",
          background: "#111827",
          padding: "20px",
          borderRadius: "18px",
        }}
      >
        <h2 style={{ color: "#ffae00" }}>Supply & Demand Zones</h2>

        <div style={{ marginTop: "20px" }}>
          <p>Demand Zone: 21,420 - 21,450</p>
          <p>Supply Zone: 21,610 - 21,650</p>
          <p>Liquidity Sweep Area: 21,700</p>
        </div>
      </div>
    </div>
  )
}