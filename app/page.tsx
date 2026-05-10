export default function Home() {
  return (
    <div
      style={{
        background: "#071018",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      {/* HEADER */}
      <div style={{ marginBottom: "30px" }}>
        <h1
          style={{
            color: "#00ff88",
            fontSize: "48px",
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
          Nasdaq Futures CME • Sistema Institucional • Apex
        </p>
      </div>

      {/* TOP CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <Card title="Bias do Dia" value="LONG" color="#00ff88" desc="HTF bullish + VWAP acima." />

        <Card title="Modo de Mercado" value="BREAKOUT" color="#ffe600" desc="Compressão detectada." />

        <Card title="Probabilidade" value="72%" color="#ffffff" desc="Similaridade estatística histórica." />

        <Card title="Volatilidade" value="ALTA" color="#ff4d6d" desc="Mercado favorável para rompimentos." />
      </div>

      {/* MIDDLE */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {/* MAG7 */}
        <div
          style={{
            background: "#0f172a",
            border: "1px solid #1e3a5f",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <h3 style={{ color: "#6b7280", marginBottom: "20px" }}>
            Magnificent 7
          </h3>

          <StockRow name="Apple" value="+1.28%" color="#00ff88" />
          <StockRow name="Microsoft" value="+0.74%" color="#00ff88" />
          <StockRow name="NVIDIA" value="+2.51%" color="#00ff88" />
          <StockRow name="Amazon" value="-0.42%" color="#ff4d6d" />
          <StockRow name="Meta" value="+1.13%" color="#00ff88" />
          <StockRow name="Tesla" value="-1.87%" color="#ff4d6d" />
          <StockRow name="Alphabet" value="+0.56%" color="#00ff88" />
        </div>

        {/* TECH */}
        <div
          style={{
            background: "#0f172a",
            border: "1px solid #1e3a5f",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <h3 style={{ color: "#6b7280", marginBottom: "20px" }}>
            Top 14 Tecnologia
          </h3>

          <GridSignal left="Apple" right="FORTE" color="#00ff88" />
          <GridSignal left="Microsoft" right="FORTE" color="#00ff88" />
          <GridSignal left="NVIDIA" right="EXTREMO" color="#00d0ff" />
          <GridSignal left="Amazon" right="NEUTRO" color="#ffe600" />
          <GridSignal left="Meta" right="FORTE" color="#00ff88" />
          <GridSignal left="Tesla" right="FRACO" color="#ff4d6d" />
          <GridSignal left="Netflix" right="FORTE" color="#00ff88" />
          <GridSignal left="AMD" right="FORTE" color="#00ff88" />
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
        <div
          style={{
            background: "#0f172a",
            border: "1px solid #1e3a5f",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <h3 style={{ color: "#6b7280", marginBottom: "20px" }}>
            Calendário Econômico
          </h3>

          <EventRow title="CPI" time="09:30" color="#ff4d6d" />
          <EventRow title="Powell Speech" time="14:00" color="#ffe600" />
          <EventRow title="Treasury Auction" time="15:00" color="#00d0ff" />
        </div>

        {/* CORRELATION */}
        <div
          style={{
            background: "#0f172a",
            border: "1px solid #1e3a5f",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <h3 style={{ color: "#6b7280", marginBottom: "20px" }}>
            Correlação Institucional
          </h3>

          <StockRow name="NQ" value="BULLISH" color="#00ff88" />
          <StockRow name="ES" value="BULLISH" color="#00ff88" />
          <StockRow name="VIX" value="BEARISH" color="#ff4d6d" />
          <StockRow name="DXY" value="BEARISH" color="#ff4d6d" />
          <StockRow name="10Y" value="BULLISH" color="#00ff88" />
        </div>

        {/* FEAR */}
        <div
          style={{
            background: "#0f172a",
            border: "1px solid #1e3a5f",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <h3 style={{ color: "#6b7280", marginBottom: "20px" }}>
            Fear & Greed
          </h3>

          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <h1
              style={{
                color: "#00ff88",
                fontSize: "60px",
                margin: 0,
              }}
            >
              74
            </h1>

            <p style={{ color: "#00ff88" }}>GREED</p>

            <div
              style={{
                width: "100%",
                height: "14px",
                background: "#1e293b",
                borderRadius: "20px",
                overflow: "hidden",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  width: "74%",
                  height: "100%",
                  background: "#00ff88",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        {/* IA */}
        <div
          style={{
            background: "#0f172a",
            border: "1px solid #1e3a5f",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <h3 style={{ color: "#6b7280", marginBottom: "20px" }}>
            IA Institucional
          </h3>

          <AlertBox
            color="#00ff88"
            title="Fluxo Comprador Dominante"
            desc="Nasdaq acima da VWAP e EMA21."
          />

          <AlertBox
            color="#ffe600"
            title="Atenção em Liquidez"
            desc="Sweep provável acima das máximas."
          />
        </div>

        {/* APEX */}
        <div
          style={{
            background: "#0f172a",
            border: "1px solid #1e3a5f",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <h3 style={{ color: "#6b7280", marginBottom: "20px" }}>
            Painel Apex
          </h3>

          <StockRow name="Loss Diário" value="$430" color="#ff4d6d" />
          <StockRow name="Restante" value="$2,070" color="#00ff88" />
          <StockRow name="Drawdown" value="17%" color="#ffe600" />
          <StockRow name="Status" value="Seguro" color="#00d0ff" />
        </div>
      </div>
    </div>
  )
}

function Card({
  title,
  value,
  color,
  desc,
}: {
  title: string
  value: string
  color: string
  desc: string
}) {
  return (
    <div
      style={{
        background: "#0f172a",
        border: "1px solid #1e3a5f",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <p style={{ color: "#6b7280", marginBottom: "15px" }}>{title}</p>

      <h1
        style={{
          color,
          margin: 0,
        }}
      >
        {value}
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginTop: "15px",
          fontSize: "14px",
        }}
      >
        {desc}
      </p>
    </div>
  )
}

function StockRow({
  name,
  value,
  color,
}: {
  name: string
  value: string
  color: string
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 0",
        borderBottom: "1px solid #1e293b",
      }}
    >
      <span>{name}</span>

      <span
        style={{
          color,
          fontWeight: "bold",
        }}
      >
        {value}
      </span>
    </div>
  )
}

function EventRow({
  title,
  time,
  color,
}: {
  title: string
  time: string
  color: string
}) {
  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid #1e3a5f",
        padding: "15px",
        borderRadius: "14px",
        marginBottom: "15px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div style={{ color }}>{title}</div>
      </div>

      <div style={{ color, fontWeight: "bold" }}>{time}</div>
    </div>
  )
}

function GridSignal({
  left,
  right,
  color,
}: {
  left: string
  right: string
  color: string
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "#111827",
        border: "1px solid #1e3a5f",
        padding: "15px",
        borderRadius: "14px",
        marginBottom: "12px",
      }}
    >
      <span>{left}</span>

      <span
        style={{
          color,
          fontWeight: "bold",
        }}
      >
        {right}
      </span>
    </div>
  )
}

function AlertBox({
  title,
  desc,
  color,
}: {
  title: string
  desc: string
  color: string
}) {
  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid #1e3a5f",
        padding: "18px",
        borderRadius: "14px",
        marginBottom: "15px",
      }}
    >
      <div
        style={{
          color,
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        {title}
      </div>

      <div style={{ color: "#94a3b8" }}>{desc}</div>
    </div>
  )
}