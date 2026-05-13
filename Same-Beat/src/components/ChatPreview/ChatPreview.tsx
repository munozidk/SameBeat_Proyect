import "./ChatPreview.css"

// Importamos iconos desde lucide-react
// Smile = emojis
// Send = enviar mensaje
import { Smile, Send } from "lucide-react"

// Imagen de la persona del chat
import avatar1 from "../../assets/avatar 1.jpg"

/* 
  Interface Chat
  
  Define la estructura de un chat.
  
  Sirve para que TypeScript sepa
  qué datos debe tener cada chat.
*/
interface Chat {

  // ID del chat
  id: number

  // ID del usuario
  userId: number

  // Último mensaje enviado
  lastMessage: string

  // Fecha / hora del mensaje
  timestamp: string

  // Cantidad de mensajes sin leer
  unreadCount: number
}

/* 
  Props del componente ChatPreview
  
  selectedChat:
  chat seleccionado actualmente
  
  isExpanded:
  define si el chat está abierto o minimizado
  
  onToggle:
  función para abrir/cerrar el chat
*/
interface ChatPreviewProps {

  selectedChat: Chat | null

  isExpanded: boolean

  onToggle: () => void
}

/* 
  Componente ChatPreview
  
  Este componente muestra:
  
  - preview del chat
  - estado minimizado
  - mensajes
  - información del usuario
*/
const ChatPreview = ({

  selectedChat,
  isExpanded,
  onToggle

}: ChatPreviewProps) => {

  /* 
    Si NO existe un chat seleccionado
    
    mostramos un botón simple
    para abrir un chat
  */
  if (!selectedChat) return (

    <div className="chat-preview-wrapper">

      <button
        className="chat-preview-minimized"
        onClick={onToggle}
      >

        Abre un chat

      </button>

    </div>
  )

  return (

    // Contenedor principal del preview
    <div className="chat-preview-wrapper">

      {/* 
        Si isExpanded es true
        
        mostramos el chat completo
        
        si es false
        
        mostramos el estado minimizado
      */}
      {isExpanded ? (

        /* CHAT ABIERTO */
        <div className="chat-preview">

          {/* 
            HEADER
            
            Al hacer click:
            minimiza el chat
          */}
          <div
            className="chat-preview__header"
            onClick={onToggle}
          >

            <h2>Direct</h2>

          </div>

          {/* 
            PERFIL DEL USUARIO
            
            Información resumida
            del usuario del chat
          */}
          <div className="chat-preview__profile">

            {/* Avatar */}
            <div className="profile__avatar">

              <img
                src={avatar1}
                alt="profile"
              />

            </div>

            {/* Información */}
            <div className="profile__info">

              {/* Nombre */}
              <h3 className="profile__name">

                AlexDrift...

              </h3>

              {/* Link / URL */}
              <p className="profile__url">

                https://marti...

              </p>

              {/* Estadísticas */}
              <div className="profile__stats">

                <span>
                  57 Conciertos años
                </span>

                <span>
                  85% compatibilidad
                </span>

                <span>
                  305 seguidores
                </span>

              </div>

              {/* Botones */}
              <div className="profile__actions">

                <button>
                  Ver
                </button>

                <button>
                  Seguir
                </button>

              </div>

            </div>

          </div>

          {/* 
            MENSAJES
            
            Aquí se muestran
            los mensajes del chat
          */}
          <div className="chat-preview__messages">

            <div className="message">

              {/* 
                Mostramos el último mensaje
                del chat seleccionado
              */}
              {selectedChat.lastMessage}

            </div>

          </div>

          {/* 
            INPUT
            
            Zona para escribir mensajes
          */}
          <div className="chat-preview__input">

            {/* Campo texto */}
            <input
              type="text"
              placeholder="mensaje..."
            />

            {/* Botón emojis */}
            <button className="input-action">

              <Smile size={16} />

            </button>

            {/* Botón enviar */}
            <button className="input-action">

              <Send size={16} />

            </button>

          </div>

        </div>

      ) : (

        /* 
          CHAT MINIMIZADO
          
          Solo mostramos:
          
          - nombre
          - avatar
        */
        <button
          className="chat-preview-minimized"
          onClick={onToggle}
        >

          {/* Nombre usuario */}
          <span>

            Alex Drift

          </span>

          {/* Avatar minimizado */}
          <div className="minimized__avatar">

            <div className="profile__avatar">

              <img
                src={avatar1}
                alt="profile"
              />

            </div>

          </div>

        </button>

      )}

    </div>
  )
}

// Exportamos el componente
export default ChatPreview