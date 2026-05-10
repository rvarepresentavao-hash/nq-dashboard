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
      <h1
        style={{
          color: "#00ff88",
          fontSize: "58px",
          marginBottom: "10px",
        }}
      >
        NQ CME ALPHA ELITE
      </h1>

      <p style={{ color: "#7c8aa0", marginBottom: "30px" }}>
        Sistema Institucional • Nasdaq Futures CME • Apex
      </p>

      {/* TOPO */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <Card
          title="Bias do Dia"
          value="LONG"
          color="#00ff88"
          desc="Fluxo institucional comprador."
        />

        <Card
          title="Modo"
          value="BREAKOUT"
          color="#ffd500"
          desc="Compressão detectada."
        />

        <Card
          title="Probabilidade"
          value="78%"
          color="#00d0ff"
          desc="Confluência estatística."
        />

        <Card
          title="Volatilidade"
          value="ALTA"
          color="#ff4d6d"
          desc="Mercado acelerado."
        />
      </div>

      {/* SESSÕES */}
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
          status="FECHADO"
          open="21,420"
          current="21,542"
          trend="ALTA"
          color="#00ff88"
        />

        <SessionCard
          city="LONDON"
          status="FECHADO"
          open="21,310"
          current="21,542"
          trend="FORTE"
          color="#00d0ff"
        />

        <SessionCard
          city="TOKYO"
          status="ABERTO"
          open="21,180"
          current="21,210"
          trend="NEUTRO"
          color="#ffd500"
        />
      </div>

      {/* GRÁFICO */}
      <div
        style={{
          background: "#0b1630",
          border: "1px solid #18335f",
          borderRadius: "20px",
          padding: "20px",
          marginBottom: "20px",
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
            NQ Futures Chart
          </div>

          <div style={{ color: "#00ff88", fontSize: "20px" }}>
            21,542 +1.24%
          </div>
        </div>

        <iframe
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=CME_MINI:NQ1!&interval=15"
          style={{
            width: "100%",
            height: "500px",
            border: "none",
            borderRadius: "15px",
          }}
        />
      </div>

      {/* NEWS + FEAR */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
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
              color: "#00d0ff",
              fontSize: "28px",
              marginBottom: "20px",
            }}
          >
            Market News
          </div>

          <ul style={{ lineHeight: "45px", fontSize: "22px" }}>
            <li>Nasdaq mantém força compradora institucional</li>
            <li>DXY perde momentum durante sessão asiática</li>
            <li>VIX permanece em baixa volatilidade</li>
            <li>Mercado aguarda CPI e FOMC</li>
          </ul>
        </div>

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
              color: "#00ff88",
              fontSize: "28px",
              marginBottom: "30px",
            }}
          >
            Fear & Greed
          </div>

          <div
            style={{
              fontSize: "72px",
              color: "#00ff88",
              fontWeight: "bold",
            }}
          >
            72
          </div>

          <div
            style={{
              color: "#00ff88",
              fontSize: "30px",
              marginBottom: "20px",
            }}
          >
            GREED
          </div>

          <div
            style={{
              background: "#1d2a44",
              height: "18px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                width: "72%",
                height: "18px",
                background: "#22c55e",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </div>

      {/* ZONAS */}
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
            color: "#ffd500",
            fontSize: "30px",
            marginBottom: "20px",
          }}
        >
          Supply & Demand Zones
        </div>

        <div style={{ fontSize: "24px", lineHeight: "45px" }}>
          <div>Demand Zone: 21,420 - 21,450</div>
          <div>Supply Zone: 21,610 - 21,650</div>
          <div>Liquidity Sweep Area: 21,700</div>
        </div>
      </div>
    </div>
  );
}

function Card({
  title,
  value,
  color,
  desc,
}: {
  title: string;
  value: string;
  color: string;
  desc: string;
}) {
  return (
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
          marginBottom: "15px",
        }}
      >
        {value}
      </div>

      <div style={{ color: "#9fb0c7", fontSize: "20px" }}>{desc}</div>
    </div>
  );
}

function SessionCard({
  city,
  status,
  open,
  current,
  trend,
  color,
}: {
  city: string;
  status: string;
  open: string;
  current: string;
  trend: string;
  color: string;
}) {
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
          marginBottom: "25px",
        }}
      >
        <div style={{ color, fontSize: "30px" }}>{city}</div>

        <div style={{ color, fontSize: "28px" }}>{status}</div>
      </div>

      <div style={{ fontSize: "20px", lineHeight: "40px" }}>
        <div>Abertura: {open}</div>
        <div>Atual: {current}</div>

        <div
          style={{
            color,
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          Tendência: {trend}
        </div>
      </div>
    </div>
  );
}