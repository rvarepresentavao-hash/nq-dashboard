export default function Home() {
  return (
    <div style={{
      background:"#071018",
      minHeight:"100vh",
      color:"white",
      padding:"20px",
      fontFamily:"Arial"
    }}>

      <h1 style={{
        color:"#00ff88",
        fontSize:"42px"
      }}>
        NQ CME ALPHA ELITE
      </h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        gap:"20px",
        marginTop:"30px"
      }}>

        <div style={{
          background:"#111827",
          padding:"20px",
          borderRadius:"15px"
        }}>
          <h2>NASDAQ</h2>
          <p>Preço: 21,542</p>
        </div>

        <div style={{
          background:"#111827",
          padding:"20px",
          borderRadius:"15px"
        }}>
          <h2>Economic Calendar</h2>
          <p>USD CPI - 09:30</p>
        </div>

      </div>

    </div>
  )
}