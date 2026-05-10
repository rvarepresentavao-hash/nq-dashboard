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
      <h1
        style={{
          color: "#00ff88",
          fontSize: "56px",
          marginBottom: "10px",
        }}
      >
        NQ CME ALPHA ELITE
      </h1>

      <p
        style={{
          color: "#7b8aa0",
          marginBottom: "30px",
          fontSize: "18px",
        }}
      >
        Sistema Institucional • Nasdaq Futures CME • Apex
      </p>

      {/* CARDS TOPO */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "25px",
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
          color="#ffd500"
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

      {/* SESSÕES */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginBottom: "25px",
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

      {/* GRÁFICO + FEAR */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        {/* GRÁFICO */}
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
              NASDAQ 100 LIVE
            </div>

            <div style={{ color: "#00ff88", fontSize: "20px" }}>
              +1.24%
            </div>
          </div>

          <iframe
            src="https://s.tradingview.com/widgetembed/?symbol=NASDAQ:NDX&interval=15&theme=dark"
            style={{
              width: "100%",
              height: "520px",
              border: "none",
              borderRadius: "15px",
            }}
          />
        </div>

        {/* FEAR */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
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
                color: "#00ff88",
                fontSize: "26px",
                marginBottom: "25px",
              }}
            >
              Fear & Greed
            </div>

            <div
              style={{
                fontSize: "80px",
                color: "#00ff88",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              74
            </div>

            <div
              style={{
                textAlign: "center",
                color: "#00ff88",
                fontSize: "28px",
                marginBottom: "20px",
              }}
            >
              GREED
            </div>

            <div
              style={{
                background: "#1e2a45",
                height: "18px",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  width: "74%",
                  background: "#22c55e",
                  height: "18px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>

          {/* INSTITUCIONAL */}
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
                fontSize: "24px",
                marginBottom: "20px",
              }}
            >
              Institucional
            </div>

            <InfoLine asset="DXY" status="BEARISH" color="#ff4d6d" />
            <InfoLine asset="VIX" status="LOW" color="#00ff88" />
            <InfoLine asset="10Y" status="BULLISH" color="#00d0ff" />
            <InfoLine asset="ES" status="LONG" color="#00ff88" />
            <InfoLine asset="BTC" status="RISK ON" color="#ffd500" />
          </div>
        </div>
      </div>

      {/* 7 MAIORES + 14 TECH */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        {/* 7 MAIORES */}
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
              marginBottom: "20px",
            }}
          >
            Magnificent 7
          </div>

          <AssetLine name="NVIDIA" value="+2.51%" color="#00ff88" />
          <AssetLine name="Microsoft" value="+1.12%" color="#00ff88" />
          <AssetLine name="Apple" value="+0.85%" color="#00ff88" />
          <AssetLine name="Amazon" value="-0.42%" color="#ff4d6d" />
          <AssetLine name="Meta" value="+1.44%" color="#00ff88" />
          <AssetLine name="Tesla" value="-1.87%" color="#ff4d6d" />
          <AssetLine name="Alphabet" value="+0.66%" color="#00ff88" />
        </div>

        {/* 14 TECH */}
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
            Top 14 Tecnologia
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            <TechCard name="Apple" status="FORTE" color="#00ff88" />
            <TechCard name="Microsoft" status="FORTE" color="#00ff88" />
            <TechCard name="NVIDIA" status="EXTREMO" color="#00d0ff" />
            <TechCard name="Amazon" status="NEUTRO" color="#ffd500" />
            <TechCard name="Meta" status="FORTE" color="#00ff88" />
            <TechCard name="Tesla" status="FRACO" color="#ff4d6d" />
            <TechCard name="Netflix" status="FORTE" color="#00ff88" />
            <TechCard name="AMD" status="FORTE" color="#00ff88" />
            <TechCard name="Intel" status="FRACO" color="#ff4d6d" />
            <TechCard name="TSMC" status="FORTE" color="#00ff88" />
            <TechCard name="Oracle" status="NEUTRO" color="#ffd500" />
            <TechCard name="Adobe" status="LONG" color="#00ff88" />
            <TechCard name="Palantir" status="EXTREMO" color="#00d0ff" />
            <TechCard name="Broadcom" status="FORTE" color="#00ff88" />
          </div>
        </div>
      </div>

      {/* ECONOMIA + APEX */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        {/* ECONOMIC */}
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
              fontSize: "28px",
              marginBottom: "20px",
            }}
          >
            Calendário Econômico
          </div>

          <CalendarLine
            event="CPI"
            desc="Inflação EUA"
            time="09:30"
            color="#ff4d6d"
          />

          <CalendarLine
            event="Powell Speech"
            desc="Presidente FED"
            time="14:00"
            color="#ffd500"
          />

          <CalendarLine
            event="NFP"
            desc="Payroll EUA"
            time="Friday"
            color="#00d0ff"
          />
        </div>

        {/* APEX */}
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
            Painel Apex
          </div>

          <InfoLine asset="Loss Diário" status="$430" color="#ff4d6d" />
          <InfoLine asset="Restante" status="$2,070" color="#00ff88" />
          <InfoLine asset="Winrate" status="72%" color="#00d0ff" />
          <InfoLine asset="Drawdown" status="17%" color="#ffd500" />
          <InfoLine asset="Status" status="SEGURO" color="#00ff88" />
        </div>
      </div>

      {/* IA + SCANNER */}
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
            }}
          >
            IA Institucional
          </div>

          <AlertCard
            title="Fluxo comprador dominante"
            desc="Acima da VWAP + EMA21."
            color="#00ff88"
          />

          <AlertCard
            title="Liquidez acima da máxima"
            desc="Sweep projetado em NY."
            color="#ffd500"
          />
        </div>

        {/* SCANNER */}
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
            }}
          >
            Scanner de Liquidez
          </div>

          <AlertCard
            title="Equal High detectado"
            desc="Possível sweep comprador."
            color="#00d0ff"
          />

          <AlertCard
            title="FVG aberto 15m"
            desc="Região institucional ativa."
            color="#00ff88"
          />

          <AlertCard
            title="SSL abaixo do range"
            desc="Liquidez vendida detectada."
            color="#ff4d6d"
          />
        </div>
      </div>
    </div>
  );
}

/* COMPONENTES */

function TopCard({ title, value, color, desc }: any) {
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
          marginBottom: "10px",
        }}
      >
        {value}
      </div>

      <div style={{ color: "#9fb0c7" }}>{desc}</div>
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
}: any) {
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
          marginBottom: "20px",
        }}
      >
        <div style={{ color, fontSize: "30px" }}>{city}</div>

        <div style={{ color, fontSize: "28px" }}>{status}</div>
      </div>

      <div style={{ fontSize: "20px", lineHeight: "38px" }}>
        <div>Abertura: {open}</div>
        <div>Atual: {current}</div>

        <div style={{ color, fontWeight: "bold" }}>
          Tendência: {trend}
        </div>
      </div>
    </div>
  );
}

function AssetLine({ name, value, color }: any) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "14px 0",
        borderBottom: "1px solid #18335f",
      }}
    >
      <div>{name}</div>

      <div style={{ color, fontWeight: "bold" }}>{value}</div>
    </div>
  );
}

function TechCard({ name, status, color }: any) {
  return (
    <div
      style={{
        border: "1px solid #18335f",
        borderRadius: "15px",
        padding: "15px",
      }}
    >
      <div style={{ marginBottom: "10px" }}>{name}</div>

      <div style={{ color, fontWeight: "bold" }}>{status}</div>
    </div>
  );
}

function CalendarLine({ event, desc, time, color }: any) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
        borderBottom: "1px solid #18335f",
        paddingBottom: "15px",
      }}
    >
      <div>
        <div style={{ color, fontWeight: "bold" }}>{event}</div>

        <div style={{ color: "#7c8aa0" }}>{desc}</div>
      </div>

      <div style={{ color, fontWeight: "bold" }}>{time}</div>
    </div>
  );
}

function InfoLine({ asset, status, color }: any) {
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

      <div style={{ color, fontWeight: "bold" }}>{status}</div>
    </div>
  );
}

function AlertCard({ title, desc, color }: any) {
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

      <div style={{ color: "#9fb0c7" }}>{desc}</div>
    </div>
  );
}