import "./BottomNav.css"

// Importamos iconos de lucide-react
// Cada icono se usa como componente
import {
  House,
  Ticket,
  Plus,
  Headphones,
  User
} from "lucide-react"

// Componente BottomNav
// Esta barra aparece en la parte de abajo en mobile
const BottomNav = () => {

  return (

    // Contenedor principal del navbar
    <nav className="bottom-nav">

      {/* 
        BURBUJA IZQUIERDA
        
        Contiene:
        - botón Home
        - botón Tickets
        
        Se agrupan para crear el efecto visual
        de una cápsula izquierda
      */}
      <div className="nav-pill--left">

        {/* 
          Botón activo
        
          active-btn sirve para marcar
          cuál sección está seleccionada actualmente
        */}
        <button className="nav-btn active-btn">

          {/* Icono Home */}
          <House size={22} />

        </button>

        {/* Botón Tickets */}
        <button className="nav-btn">

          {/* Icono Ticket */}
          <Ticket size={22} />

        </button>

      </div>

      {/* 
        BOTÓN CENTRAL FLOTANTE
        
        Este botón queda separado visualmente
        de los demás y normalmente sirve para:
        
        - crear contenido
        - agregar algo
        - acción principal
        
        Por eso tiene estilo flotante
      */}
      <div className="bottom-nav__center">

        <button className="floating-add-btn">

          {/* Icono Plus */}
          <Plus size={28} />

        </button>

      </div>

      {/* 
        BURBUJA DERECHA
        
        Contiene:
        - música / audio
        - perfil usuario
        
        Igual que la izquierda,
        se agrupan para crear otra cápsula
      */}
      <div className="nav-pill--right">

        {/* Botón audio */}
        <button className="nav-btn">

          {/* Icono Headphones */}
          <Headphones size={22} />

        </button>

        {/* Botón perfil */}
        <button className="nav-btn">

          {/* Icono User */}
          <User size={22} />

        </button>

      </div>

    </nav>
  )
}

// Exportamos el componente
// para poder usarlo en otras partes
export default BottomNav