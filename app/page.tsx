export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#071018] text-white p-10">

      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <h1 className="text-5xl font-bold text-green-400">
            NQ CME ALPHA ELITE
          </h1>

          <p className="text-slate-400 mt-3">
            Nasdaq Futures CME • Sistema Institucional • Apex
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          <Card title="Bias do Dia">
            <div className="text-4xl font-bold text-green-400">
              LONG
            </div>

            <p className="text-slate-400 mt-3 text-sm">
              HTF bullish + VWAP acima.
            </p>
          </Card>

          <Card title="Modo de Mercado">
            <div className="text-4xl font-bold text-yellow-300">
              BREAKOUT
            </div>

            <p className="text-slate-400 mt-3 text-sm">
              Compressão detectada.
            </p>
          </Card>

          <Card title="Probabilidade">
            <div className="text-4xl font-bold">
              72%
            </div>

            <div className="w-full h-4 bg-slate-800 rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-green-400 w-[72%]" />
            </div>

            <p className="text-slate-400 mt-3 text-sm">
              Similaridade estatística histórica.
            </p>
          </Card>

          <Card title="Volatilidade">
            <div className="text-4xl font-bold text-red-400">
              ALTA
            </div>

            <p className="text-slate-400 mt-3 text-sm">
              Mercado favorável para rompimentos.
            </p>
          </Card>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-5">

          <Card title="Magnificent 7">

            <div className="space-y-3">

              <StockRow name="Apple" value="+1.28%" positive />
              <StockRow name="Microsoft" value="+0.74%" positive />
              <StockRow name="NVIDIA" value="+2.91%" positive />
              <StockRow name="Amazon" value="-0.42%" />
              <StockRow name="Meta" value="+1.13%" positive />
              <StockRow name="Tesla" value="-1.87%" />
              <StockRow name="Alphabet" value="+0.56%" positive />

            </div>

          </Card>

          <Card title="Top 14 Tecnologia">

            <div className="grid grid-cols-2 gap-3">

              <Tech name="Apple" status="FORTE" />
              <Tech name="Microsoft" status="FORTE" />
              <Tech name="NVIDIA" status="EXTREMO" />
              <Tech name="Amazon" status="NEUTRO" />
              <Tech name="Meta" status="FORTE" />
              <Tech name="Tesla" status="FRACO" />
              <Tech name="Netflix" status="FORTE" />
              <Tech name="AMD" status="FORTE" />

            </div>

          </Card>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">

          <Card title="Calendário Econômico">

            <div className="space-y-4">

              <Economic
                event="CPI"
                desc="Inflação EUA"
                time="09:30"
                color="text-red-400"
              />

              <Economic
                event="Powell Speech"
                desc="Presidente FED"
                time="14:00"
                color="text-yellow-300"
              />

              <Economic
                event="Treasury Auction"
                desc="Bonds EUA"
                time="13:00"
                color="text-cyan-400"
              />

            </div>

          </Card>

          <Card title="Correlação Institucional">

            <div className="space-y-4">

              <Correlation asset="NQ" value="BULLISH" positive />
              <Correlation asset="ES" value="BULLISH" positive />
              <Correlation asset="VIX" value="BEARISH" />
              <Correlation asset="DXY" value="BEARISH" />
              <Correlation asset="10Y" value="BULLISH" positive />

            </div>

          </Card>

          <Card title="Fear & Greed">

            <div className="flex flex-col items-center justify-center">

              <div className="text-6xl font-bold text-green-400">
                74
              </div>

              <div className="text-xl mt-3 text-green-400">
                GREED
              </div>

              <div className="w-full h-4 bg-slate-800 rounded-full mt-5 overflow-hidden">
                <div className="h-full bg-green-400 w-[74%]" />
              </div>

            </div>

          </Card>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-5">

          <Card title="IA Institucional">

            <div className="space-y-4">

              <div className="bg-[#111c27] border border-slate-800 p-4 rounded-2xl">

                <div className="text-green-400 font-bold mb-2">
                  Fluxo Comprador Dominante
                </div>

                <div className="text-slate-400 text-sm">
                  Nasdaq acima da VWAP e EMA21.
                </div>

              </div>

              <div className="bg-[#111c27] border border-slate-800 p-4 rounded-2xl">

                <div className="text-yellow-300 font-bold mb-2">
                  Atenção em Liquidez
                </div>

                <div className="text-slate-400 text-sm">
                  Sweep provável acima das máximas.
                </div>

              </div>

            </div>

          </Card>

          <Card title="Painel Apex">

            <div className="space-y-5">

              <MiniStat
                label="Loss Diário"
                value="$430"
                color="text-red-400"
              />

              <MiniStat
                label="Restante"
                value="$2,070"
                color="text-green-400"
              />

              <MiniStat
                label="Drawdown"
                value="17%"
                color="text-yellow-300"
              />

              <MiniStat
                label="Status"
                value="Seguro"
                color="text-cyan-400"
              />

            </div>

          </Card>

        </div>

      </div>

    </div>
  )
}

function Card({
  title,
  children
}:{
  title:string,
  children:any
}){

  return(

    <div className="bg-[#0d1822] border border-slate-800 rounded-3xl p-6 shadow-2xl">

      <div className="text-slate-400 text-sm mb-5">
        {title}
      </div>

      {children}

    </div>

  )
}

function StockRow({
  name,
  value,
  positive
}:{
  name:string,
  value:string,
  positive?:boolean
}){

  return(

    <div className="flex items-center justify-between border-b border-slate-800 pb-3">

      <span>{name}</span>

      <span className={
        positive
        ? "text-green-400 font-bold"
        : "text-red-400 font-bold"
      }>
        {value}
      </span>

    </div>

  )
}

function Tech({
  name,
  status
}:{
  name:string,
  status:string
}){

  const color =
    status === "FORTE"
      ? "text-green-400"
      : status === "EXTREMO"
      ? "text-cyan-400"
      : status === "FRACO"
      ? "text-red-400"
      : "text-yellow-300"

  return(

    <div className="bg-[#09131c] border border-slate-800 rounded-2xl p-4 flex items-center justify-between">

      <span>{name}</span>

      <span className={color}>
        {status}
      </span>

    </div>

  )
}

function Correlation({
  asset,
  value,
  positive
}:{
  asset:string,
  value:string,
  positive?:boolean
}){

  return(

    <div className="flex items-center justify-between border-b border-slate-800 pb-3">

      <span>{asset}</span>

      <span className={
        positive
        ? "text-green-400 font-bold"
        : "text-red-400 font-bold"
      }>
        {value}
      </span>

    </div>

  )
}

function MiniStat({
  label,
  value,
  color
}:{
  label:string,
  value:string,
  color:string
}){

  return(

    <div className="flex items-center justify-between border-b border-slate-800 pb-3">

      <span className="text-slate-400">
        {label}
      </span>

      <span className={`font-bold ${color}`}>
        {value}
      </span>

    </div>

  )
}

function Economic({
  event,
  desc,
  time,
  color
}:{
  event:string,
  desc:string,
  time:string,
  color:string
}){

  return(

    <div className="flex items-center justify-between bg-[#111c27] p-4 rounded-2xl border border-slate-800">

      <div>

        <div className={`font-bold ${color}`}>
          {event}
        </div>

        <div className="text-sm text-slate-400">
          {desc}
        </div>

      </div>

      <div className={`font-bold ${color}`}>
        {time}
      </div>

    </div>

  )
}