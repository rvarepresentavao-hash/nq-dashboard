export default function Home() {
  return (
    <div
      style={{
        background: "#071018",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial",
        color: "white",
      }}
    >
      {/* HEADER */}
      <div style={{ marginBottom: "25px" }}>
        <h1
          style={{
            color: "#00ff88",
            fontSize: "58px",
            marginBottom: "10px",
          }}
        >
          NQ CME ALPHA ELITE
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
          overflow: "hidden",
          whiteSpace: "nowrap",
          color: "#00ff88",
          fontSize: "18px",
        }}
      >
        NQ +1.24% • ES +0.88% • BTC +2.11% • DXY -0.31% • VIX -1.22% • GOLD +0.44% • NVDA +2.51% • META +1.44%
      </div>

      {/* TOPO */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <Card title="Bias do Dia" value="LONG" color="#00ff88" desc="Fluxo comprador institucional." />
        <Card title="Modo" value="BREAKOUT" color="#ffd500" desc="Compressão detectada." />
        <Card title="Probabilidade IA" value="78%" color="#00d0ff" desc="Confluência estatística." />
        <Card title="Volatilidade" value="ALTA" color="#ff4d6d" desc="Mercado acelerado." />
      </div>

      {/* CLOCKS */}
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

      {/* CHART + SIDE */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        {/* CHART */}
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
            <div style={{ color: "#00ff88", fontSize: "28px" }}>
              NASDAQ CME LIVE
            </div>

            <div style={{ color: "#00ff88", fontSize: "20px" }}>
              +1.24%
            </div>
          </div>

          <iframe
            src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=CAPITALCOM:US100&interval=15&theme=dark&style=1&timezone=America/New_York"
            style={{
              width: "100%",
              height: "600px",
              border: "none",
              borderRadius: "15px",
            }}
          />

          {/* TIMEFRAMES */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <MiniBtn text="1m" />
            <MiniBtn text="5m" />
            <MiniBtn text="15m" />
            <MiniBtn text="1H" />
            <MiniBtn text="4H" />
            <MiniBtn text="Daily" />
          </div>
        </div>

        {/* RIGHT */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* FEAR */}
          <Box title="Fear & Greed">
            <div
              style={{
                textAlign: "center",
              }}
            >
              <div
                style={{
                  color: "#00ff88",
                  fontSize: "80px",
                  fontWeight: "bold",
                }}
              >
                74
              </div>

              <div
                style={{
                  color: "#00ff88",
                  fontSize: "28px",
                  marginBottom: "20px",
                }}
              >
                GREED
              </div>

              <Bar width="74%" color="#22c55e" />
            </div>
          </Box>

          {/* INSTITUCIONAL */}
          <Box title="Institucional">
            <Line asset="DXY" value="BEARISH" color="#ff4d6d" />
            <Line asset="VIX" value="LOW VOL" color="#00ff88" />
            <Line asset="10Y" value="BULLISH" color="#00d0ff" />
            <Line asset="BTC" value="RISK ON" color="#ffd500" />
            <Line asset="ES" value="LONG" color="#00ff88" />
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
              color="#ffd500"
            />
          </Box>
        </div>
      </div>

      {/* MARKET STRUCTURE */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <Card title="Market Structure" value="HH / HL" color="#00ff88" desc="Estrutura bullish." />
        <Card title="VWAP" value="ACIMA" color="#00ff88" desc="Preço acima da VWAP." />
        <Card title="EMA 21" value="BULLISH" color="#00d0ff" desc="Momentum comprador." />
        <Card title="EMA 200" value="BULLISH" color="#00ff88" desc="HTF alinhado." />
      </div>

      {/* MAG7 + TECH */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        {/* MAG7 */}
        <Box title="Magnificent 7">
          <Line asset="NVIDIA" value="+2.51%" color="#00ff88" />
          <Line asset="Microsoft" value="+1.11%" color="#00ff88" />
          <Line asset="Apple" value="+0.88%" color="#00ff88" />
          <Line asset="Meta" value="+1.44%" color="#00ff88" />
          <Line asset="Amazon" value="-0.42%" color="#ff4d6d" />
          <Line asset="Tesla" value="-1.87%" color="#ff4d6d" />
          <Line asset="Alphabet" value="+0.66%" color="#00ff88" />
        </Box>

        {/* HEATMAP */}
        <Box title="Heatmap Tecnologia">
          <HeatRow name="NVDA" color="#00ff88" />
          <HeatRow name="AAPL" color="#00ff88" />
          <HeatRow name="AMD" color="#00ff88" />
          <HeatRow name="META" color="#00ff88" />
          <HeatRow name="TSLA" color="#ff4d6d" />
          <HeatRow name="INTC" color="#ff4d6d" />
          <HeatRow name="PLTR" color="#00d0ff" />
        </Box>
      </div>

      {/* NEWS + ECONOMIC */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        {/* NEWS */}
        <Box title="Market News">
          <News text="Nasdaq mantém fluxo comprador institucional." />
          <News text="Mercado aguarda CPI desta semana." />
          <News text="NVIDIA lidera tecnologia." />
          <News text="DXY perde força durante sessão asiática." />
          <News text="Treasury yields em queda." />
        </Box>

        {/* ECONOMIC */}
        <Box title="Calendário Econômico">
          <Line asset="CPI" value="09:30" color="#ff4d6d" />
          <Line asset="Powell Speech" value="14:00" color="#ffd500" />
          <Line asset="NFP" value="Friday" color="#00d0ff" />
          <Line asset="FOMC" value="Wednesday" color="#ff4d6d" />
        </Box>
      </div>

      {/* APEX + LIQUIDITY */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        {/* APEX */}
        <Box title="Painel Apex">
          <Line asset="Loss Diário" value="$430" color="#ff4d6d" />
          <Line asset="Restante" value="$2,070" color="#00ff88" />
          <Line asset="Winrate" value="74%" color="#00d0ff" />
          <Line asset="Drawdown" value="17%" color="#ffd500" />
          <Line asset="Status" value="SEGURO" color="#00ff88" />
        </Box>

        {/* LIQUIDITY */}
        <Box title="Scanner de Liquidez">
          <Alert
            title="Equal High detectado"
            desc="Possível sweep comprador."
            color="#00d0ff"
          />

          <Alert
            title="FVG aberto no 15m"
            desc="Região institucional ativa."
            color="#00ff88"
          />

          <Alert
            title="SSL abaixo do range"
            desc="Liquidez vendida detectada."
            color="#ff4d6d"
          />
        </Box>
      </div>
    </div>
  );
}

/* COMPONENTES */

function Card({ title, value, color, desc }: any) {
  return (
    <div
      style={{
        background: "#0b1630",
        border: "1px solid #18335f",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <div style={{ color: "#7c8aa0", marginBottom: "10px" }}>
        {title}
      </div>

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
        <div style={{ color, fontSize: "28px" }}>
          {city}
        </div>

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

      <div
        style={{
          color,
          fontWeight: "bold",
        }}
      >
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

function HeatRow({ name, color }: any) {
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

function MiniBtn({ text }: any) {
  return (
    <button
      style={{
        background: "#111827",
        border: "1px solid #18335f",
        color: "#00ff88",
        borderRadius: "10px",
        padding: "10px 16px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}

function Bar({ width, color }: any) {
  return (
    <div
      style={{
        background: "#1e2a45",
        height: "18px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          width,
          background: color,
          height: "18px",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}