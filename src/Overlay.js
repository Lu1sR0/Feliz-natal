export default function Overlay({ inside, setInside }) {
  return (
    <>
      <header>
        <img draggable={false} width="100%" src="/merry_xmas.svg" />
      </header>
      <footer className="footer">
        <button
          className="button--explore"
          onClick={() => {
            setInside(!inside)
          }}>
          Clique para ver mais
        </button>
        <br />
        Feito com Amor para todos os nossos queridos clientes
      </footer>
    </>
  )
}
