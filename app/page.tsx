export default function Home() {
  return (
    <div
      style={{
        background: "#071018",
        minHeight: "100vh",
        color: "white",
        padding: "25px",
        fontFamily: "Arial",
      }}
    >
      {/* HEADER */}
      <div style={{ marginBottom: "30px" }}>
        <h1
          style={{
            color: "#00ff88",
            fontSize: "52px",
            margin: 0,
          }}
        >
          NQ CME ALPHA ELITE
        </h1>

        <p
          style={{
            color: "#6b7280",
            marginTop: "10px",
          }}
        >
          Sistema Institucional • Nasdaq Futures CME • Apex
        </p>
      </div>

      {/* TOP GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <TopCard
          title="Bias do Dia"
          value="LONG"
          color="#00ff88"
          desc="Fluxo institucional comprador."
        />

        <TopCard
          title="Modo"
          value="BREAKOUT"
          color="#ffe600"
          desc="Compressão detectada."
        />

        <TopCard
          title="Probabilidade"
          value="78%"
          color="#00d0ff"
          desc="Confluência estatística."
        />

        <TopCard
          title="Volatilidade"
          value="ALTA"
          color="#ff4d6d"
          desc="Mercado acelerado."
        />
      </div>

      {/* MARKET SESSIONS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <SessionCard
          city="NEW YORK"
          status="ABERTO"
          open="21,420"
          current="21,542"
          trend="ALTA"
          color="#00ff88"
        />

        <SessionCard
          city="LONDON"
          status="ABERTO"
          open="21,310"
          current="21,542"
          trend="FORTE"
          color="#00d0ff"
        />

        <SessionCard
          city="TOKYO"
          status="FECHADO"
          open="21,180"
          current="21,210"
          trend="NEUTRO"
          color="#ffe600"
        />
      </div>

      {/* MAIN */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {/* TRADINGVIEW FAKE */}
        <div
          style={{
            background: "#0f172a",
            borderRadius: "20px",
            padding: "20px",
            border: "1px solid #1e3a5f",
            height: "500px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <h2 style={{ color: "#00ff88" }}>NQ Futures Chart</h2>

            <div style={{ color: "#00ff88" }}>
              21,542 +1.24%
            </div>
          </div>

          <div
            style={{
              background: "#071018",
              height: "400px",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#334155",
              fontSize: "28px",
            }}
          >
            TradingView Chart Area
          </div>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              gap: "10px",
            }}
          >
            <MiniButton text="1m" />
            <MiniButton text="5m" />
            <MiniButton text="15m" />
            <MiniButton text="1H" />
            <MiniButton text="4H" />
            <MiniButton text="Daily" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* FEAR */}
          <Box title="Fear & Greed">
            <div style={{ textAlign: "center" }}>
              <h1
                style={{
                  color: "#00ff88",
                  fontSize: "70px",
                  margin: 0,
                }}
              >
                74
              </h1>

              <p style={{ color: "#00ff88" }}>GREED</p>

              <Progress value="74%" color="#00ff88" />
            </div>
          </Box>

          {/* DXY */}
          <Box title="Institucional">
            <Row left="DXY" right="BEARISH" color="#ff4d6d" />
            <Row left="VIX" right="LOW" color="#00ff88" />
            <Row left="10Y" right="BULLISH" color="#00d0ff" />
            <Row left="ES" right="LONG" color="#00ff88" />
            <Row left="BTC" right="RISK ON" color="#ffe600" />
          </Box>

          {/* IA */}
          <Box title="IA Institucional">
            <Alert
              title="Fluxo comprador dominante"
              desc="Acima da VWAP + EMA21."
              color="#00ff88"
            />

            <Alert
              title="Liquidez acima das máximas"
              desc="Sweep provável em NY."
              color="#ffe600"
            />
          </Box>
        </div>
      </div>

      {/* LOWER */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {/* ECONOMIC */}
        <Box title="Calendário Econômico">
          <Event title="CPI" time="09:30" color="#ff4d6d" />
          <Event title="Powell Speech" time="14:00" color="#ffe600" />
          <Event title="NFP" time="Friday" color="#00d0ff" />
        </Box>

        {/* HEATMAP */}
        <Box title="Heatmap Tecnologia">
          <HeatRow name="NVIDIA" value="+2.51%" color="#00ff88" />
          <HeatRow name="APPLE" value="+1.11%" color="#00ff88" />
          <HeatRow name="META" value="+1.44%" color="#00ff88" />
          <HeatRow name="TESLA" value="-1.87%" color="#ff4d6d" />
          <HeatRow name="AMD" value="+3.12%" color="#00ff88" />
        </Box>

        {/* APEX */}
        <Box title="Painel Apex">
          <Row left="Loss Diário" right="$430" color="#ff4d6d" />
          <Row left="Restante" right="$2,070" color="#00ff88" />
          <Row left="Winrate" right="74%" color="#00d0ff" />
          <Row left="Drawdown" right="17%" color="#ffe600" />
          <Row left="Status" right="SEGURO" color="#00ff88" />
        </Box>
      </div>

      {/* BOTTOM */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        {/* NEWS */}
        <Box title="Market News">
          <News text="Nasdaq sobe após CPI." />
          <News text="Mercado espera corte de juros." />
          <News text="NVIDIA lidera fluxo comprador." />
          <News text="Treasury yields caem em NY." />
        </Box>

        {/* LIQUIDITY */}
        <Box title="Scanner de Liquidez">
          <Alert
            title="Equal Highs detectado"
            desc="Possível sweep comprador."
            color="#00d0ff"
          />

          <Alert
            title="FVG aberta no 15m"
            desc="Região institucional ativa."
            color="#00ff88"
          />

          <Alert
            title="BSL acima do range"
            desc="Liquidez resting detectada."
            color="#ff4d6d"
          />
        </Box>
      </div>
    </div>
  )
}

/* COMPONENTS */

function TopCard({
  title,
  value,
  desc,
  color,
}: any) {
  return (
    <div
      style={{
        background: "#0f172a",
        border: "1px solid #1e3a5f",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <p style={{ color: "#64748b" }}>{title}</p>

      <h1 style={{ color, margin: 0 }}>{value}</h1>

      <p style={{ color: "#94a3b8", marginTop: "10px" }}>
        {desc}
      </p>
    </div>
  )
}

function SessionCard({
  city,
  status,
  open,
  current,
  trend,
  color,
}: any) {
  return (
    <div
      style={{
        background: "#0f172a",
        border: "1px solid #1e3a5f",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ color }}>{city}</h2>

        <div style={{ color }}>{status}</div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <p>Abertura: {open}</p>
        <p>Atual: {current}</p>
        <p style={{ color, fontWeight: "bold" }}>
          Tendência: {trend}
        </p>
      </div>
    </div>
  )
}

function Box({ title, children }: any) {
  return (
    <div
      style={{
        background: "#0f172a",
        border: "1px solid #1e3a5f",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <h3
        style={{
          color: "#6b7280",
          marginBottom: "20px",
        }}
      >
        {title}
      </h3>

      {children}
    </div>
  )
}

function Row({ left, right, color }: any) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 0",
        borderBottom: "1px solid #1e293b",
      }}
    >
      <span>{left}</span>

      <span style={{ color, fontWeight: "bold" }}>
        {right}
      </span>
    </div>
  )
}

function Alert({ title, desc, color }: any) {
  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid #1e3a5f",
        borderRadius: "14px",
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

      <div style={{ color: "#94a3b8" }}>
        {desc}
      </div>
    </div>
  )
}

function Event({ title, time, color }: any) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "#111827",
        borderRadius: "12px",
        padding: "15px",
        marginBottom: "12px",
      }}
    >
      <span style={{ color }}>{title}</span>

      <span style={{ color, fontWeight: "bold" }}>
        {time}
      </span>
    </div>
  )
}

function HeatRow({ name, value, color }: any) {
  return (
    <div
      style={{
        background: "#111827",
        padding: "15px",
        borderRadius: "12px",
        marginBottom: "12px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span>{name}</span>

      <span style={{ color }}>{value}</span>
    </div>
  )
}

function Progress({ value, color }: any) {
  return (
    <div
      style={{
        width: "100%",
        height: "15px",
        background: "#1e293b",
        borderRadius: "20px",
        overflow: "hidden",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          width: value,
          height: "100%",
          background: color,
        }}
      />
    </div>
  )
}

function MiniButton({ text }: any) {
  return (
    <button
      style={{
        background: "#111827",
        border: "1px solid #1e3a5f",
        color: "#00ff88",
        borderRadius: "10px",
        padding: "8px 14px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  )
}

function News({ text }: any) {
  return (
    <div
      style={{
        background: "#111827",
        padding: "15px",
        borderRadius: "12px",
        marginBottom: "12px",
      }}
    >
      • {text}
    </div>
  )
}