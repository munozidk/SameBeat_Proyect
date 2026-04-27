Reglas de equipo 

1
Dev 3 crea types/index.ts y useAppStore.ts el día 1 y hace merge a develop antes de que los demás empiecen. Sin esto nadie puede tipar sus props.
2
Dev 1 crea el App.tsx con las rutas vacías al inicio. Los demás hacen PR para añadir sus rutas cuando estén listos.
3
Nadie pushea directo a develop ni a main. Todo va por Pull Request con al menos un compañero revisando.
4
Commits frecuentes con mensajes descriptivos: feat: agrega PostCard con tipado, fix: corrige like en store.
5
Hacer git pull origin develop al inicio de cada sesión de trabajo para evitar conflictos grandes.
6
Estudien el código de sus compañeros — el 20% del parcial es que cada uno pueda explicar CUALQUIER parte del proyecto.