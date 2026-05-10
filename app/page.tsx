export default function Home() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #020617 0%, #071226 40%, #0a1930 100%)",
backgroundImage:
"linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
backgroundSize: "40px 40px",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial",
        color: "white",
      }}
    >
      {/* HEADER */}
      <div style={{ marginBottom: "25px" }}>
        <h1
          style={{textShadow: "0 0 18px #00ffaa",
            color: "#00ff88",
            fontSize: "58px",
            marginBottom: "10px",
          }}
        >
          NEXUS NQ TERMINAL
        </h1>

        <p
          style={{
            color: "#7b8aa0",
            fontSize: "18px",
          }}
        >
          Sistema Institucional • Nasdaq Futures CME • Apex
        </p>
      </div>

      {/* TICKER */}
      <div
        style={{
          background: "#0b1630",
          border: "1px solid #18335f",
          padding: "15px",
          borderRadius: "15px",
          marginBottom: "25px",
          color: "#00ff88",
          fontSize: "18px",
        }}
      >
        NQ +1.24% • ES +0.88% • BTC +2.11% • DXY -0.31% • VIX -1.22% • NVDA +2.51% • META +1.44%
      </div>

      {/* TOP */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <Card title="Bias IA" value="LONG" color="#00ff88" desc="Fluxo comprador institucional." />
        <Card title="Market Structure" value="HH / HL" color="#00d0ff" desc="Estrutura bullish." />
        <Card title="Probabilidade" value="81%" color="#ffd500" desc="AI Bias Engine." />
        <Card title="Volatilidade" value="ALTA" color="#ff4d6d" desc="Mercado acelerado." />
      </div>

      {/* SESSIONS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <Session city="NEW YORK" status="FECHADO" trend="ALTA" color="#00ff88" />
        <Session city="LONDON" status="FECHADO" trend="FORTE" color="#00d0ff" />
        <Session city="TOKYO" status="ABERTO" trend="NEUTRO" color="#ffd500" />
        <Session city="SYDNEY" status="ABERTO" trend="ALTA" color="#00ff88" />
      </div>

      {/* CHART */}
      <div
        style={{
          background: "#0b1630",
          border: "1px solid #18335f",
          borderRadius: "20px",
          padding: "20px",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          <div style={{ color: "#00ff88", fontSize: "28px" }}>
            NASDAQ CME LIVE
          </div>

          <div style={{ color: "#00ff88", fontSize: "20px" }}>
            +1.24%
          </div>
        </div>

        <iframe
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=CAPITALCOM:US100&interval=30&theme=dark&style=1&timezone=America/New_York"
          style={{
            width: "100%",
            height: "650px",
            border: "none",
            borderRadius: "15px",
          }}
        />
      </div>

      {/* IA + DOM + VWAP */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <Box title="IA Institucional">
          <Alert title="81% LONG continuation" desc="Acima da VWAP + EMA21." color="#00ff88" />
          <Alert title="Liquidity Sweep provável" desc="BSL resting acima do range." color="#ffd500" />
          <Alert title="30m Demand ativa" desc="Compradores reagindo." color="#00d0ff" />
        </Box>

        <Box title="VWAP Engine">
          <Line asset="VWAP" value="ACIMA" color="#00ff88" />
          <Line asset="EMA 21" value="BULLISH" color="#00d0ff" />
          <Line asset="EMA 200" value="BULLISH" color="#00ff88" />
          <Line asset="Momentum" value="FORTE" color="#ffd500" />
        </Box>

        <Box title="DOM / Order Flow">
          <Line asset="Buyers" value="DOMINANDO" color="#00ff88" />
          <Line asset="Delta" value="POSITIVO" color="#00d0ff" />
          <Line asset="Absorption" value="ATIVA" color="#ffd500" />
          <Line asset="Stacked Bids" value="DETECTADO" color="#00ff88" />
        </Box>
      </div>

      {/* SUPPLY DEMAND + LIQUIDITY */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <Box title="Supply & Demand Alerts">
          <Alert
            title="⚠ Próximo da DEMAND"
            desc="Zona 21,420 - 21,450 • 30m"
            color="#00ff88"
          />

          <Alert
            title="⚠ Próximo da SUPPLY"
            desc="Zona 21,610 - 21,650 • 30m"
            color="#ff4d6d"
          />

          <Alert
            title="⚠ Sweep provável"
            desc="Liquidez resting acima da supply."
            color="#ffd500"
          />
        </Box>

        <Box title="Liquidity Engine">
          <Line asset="BSL" value="ACIMA" color="#00ff88" />
          <Line asset="SSL" value="ABAIXO" color="#ff4d6d" />
          <Line asset="Equal Highs" value="DETECTADO" color="#00d0ff" />
          <Line asset="FVG" value="ABERTO" color="#ffd500" />
        </Box>
      </div>

      {/* ICT + PROP */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <Box title="ICT Killzones">
          <Line asset="London Open" value="ACTIVE" color="#00d0ff" />
          <Line asset="New York Open" value="OPEN" color="#00ff88" />
          <Line asset="Lunch" value="PENDENTE" color="#ffd500" />
          <Line asset="Power Hour" value="15:00" color="#ff4d6d" />
        </Box>

        <Box title="Painel Apex">
          <Line asset="Drawdown" value="17%" color="#ffd500" />
          <Line asset="Consistency" value="OK" color="#00ff88" />
          <Line asset="Status" value="SEGURO" color="#00d0ff" />
          <Line asset="Loss Diário" value="$430" color="#ff4d6d" />
        </Box>
      </div>

      {/* MAG7 + HEATMAP */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <Box title="Magnificent 7">
          <Line asset="NVIDIA" value="+2.51%" color="#00ff88" />
          <Line asset="Microsoft" value="+1.12%" color="#00ff88" />
          <Line asset="Apple" value="+0.88%" color="#00ff88" />
          <Line asset="Meta" value="+1.44%" color="#00ff88" />
          <Line asset="Amazon" value="-0.42%" color="#ff4d6d" />
          <Line asset="Tesla" value="-1.87%" color="#ff4d6d" />
          <Line asset="Alphabet" value="+0.66%" color="#00ff88" />
        </Box>

        <Box title="Heatmap Tecnologia">
          <Heat name="NVDA" color="#00ff88" />
          <Heat name="META" color="#00ff88" />
          <Heat name="AMD" color="#00ff88" />
          <Heat name="AAPL" color="#00d0ff" />
          <Heat name="TSLA" color="#ff4d6d" />
          <Heat name="INTC" color="#ff4d6d" />
        </Box>
      </div>

      {/* NEWS + DARKPOOL */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <Box title="Market News">
          <News text="Nasdaq mantém força compradora institucional." />
          <News text="NVIDIA lidera fluxo de tecnologia." />
          <News text="Mercado aguarda CPI." />
          <News text="DXY perde momentum." />
          <News text="Treasury yields em queda." />
        </Box>

        <Box title="Dark Pool / News Impact">
          <Alert
            title="Dark Pool activity elevada"
            desc="NVDA institucional detectado."
            color="#00d0ff"
          />

          <Alert
            title="High Impact News"
            desc="CPI em 12h."
            color="#ff4d6d"
          />

          <Alert
            title="Risk Sentiment"
            desc="76% Risk ON."
            color="#00ff88"
          />
        </Box>
      </div>
    </div>
  );
}

/* COMPONENTS */

function Card({ title, value, color, desc }: any) {
  return (<>
<div
  style={{
    position: "fixed",
    width: "600px",
    height: "600px",
    background: "rgba(0,255,170,0.08)",
    filter: "blur(140px)",
    top: "-200px",
    right: "-100px",
    zIndex: 0,
    pointerEvents: "none"
  }}
/>

<div
  style={{
    position: "fixed",
    width: "500px",
    height: "500px",
    background: "rgba(0,140,255,0.08)",
    filter: "blur(140px)",
    bottom: "-200px",
    left: "-100px",
    zIndex: 0,
    pointerEvents: "none"
  }}
/>
    <div
      style={{
        background: "#0b1630",
        border: "1px solid #18335f",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <div style={{ color: "#7c8aa0", marginBottom: "10px" }}>{title}</div>

      <div
        style={{
          color,
          fontSize: "38px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        {value}
      </div>

      <div style={{ color: "#9fb0c7" }}>{desc}</div>
    </div>
  );
}

function Session({ city, status, trend, color }: any) {
  return (
    <div
      style={{
        background: "#0b1630",
        border: "1px solid #18335f",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "15px",
        }}
      >
        <div style={{ color, fontSize: "28px" }}>{city}</div>

        <div style={{ color }}>{status}</div>
      </div>

      <div style={{ color: "#9fb0c7" }}>
        Tendência: {trend}
      </div>
    </div>
  );
}

function Box({ title, children }: any) {
  return (
    <div
      style={{
        background: "#0b1630",
        border: "1px solid #18335f",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <div
        style={{
          color: "#7c8aa0",
          marginBottom: "20px",
          fontSize: "24px",
        }}
      >
        {title}
      </div>

      {children}
    </div>
  );
}

function Line({ asset, value, color }: any) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #18335f",
        padding: "12px 0",
      }}
    >
      <div>{asset}</div>

      <div style={{ color, fontWeight: "bold" }}>
        {value}
      </div>
    </div>
  );
}

function Alert({ title, desc, color }: any) {
  return (
    <div
      style={{
        border: "1px solid #18335f",
        borderRadius: "15px",
        padding: "15px",
        marginBottom: "15px",
      }}
    >
      <div
        style={{
          color,
          fontWeight: "bold",
          marginBottom: "8px",
        }}
      >
        {title}
      </div>

      <div style={{ color: "#9fb0c7" }}>
        {desc}
      </div>
    </div>
  );
}

function News({ text }: any) {
  return (
    <div
      style={{
        borderBottom: "1px solid #18335f",
        padding: "12px 0",
      }}
    >
      • {text}
    </div>
  );
}

function Heat({ name, color }: any) {
  return (
    <div
      style={{
        background: color,
        padding: "18px",
        borderRadius: "12px",
        fontWeight: "bold",
        color: "black",
        marginBottom: "12px",
      }}
    >
      {name}
    </div>
  );
}