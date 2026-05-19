Clasifica o Muere - versión GitHub automática

Esta versión NO usa script .sh ni manifest.json.

Funcionamiento:
- Sube clasifica-o-muere.html a la raíz del repositorio.
- Crea la carpeta json/clasifica-o-muere/
- Mete ahí tus archivos .json.
- Haz git add, commit y push.
- En GitHub Pages, el HTML lee automáticamente esa carpeta usando la API pública de GitHub.

Comandos típicos:

git add clasifica-o-muere.html json/clasifica-o-muere
git commit -m "Añadir Clasifica o Muere"
git push

Para añadir nuevos mazos:

cp nuevo-mazo.json json/clasifica-o-muere/
git add json/clasifica-o-muere/nuevo-mazo.json
git commit -m "Añadir mazo a Clasifica o Muere"
git push

Formato JSON:
[
  {"title":"Singleton", "hint":"Garantiza una sola instancia", "cat":"Creacional"}
]

También acepta algunas variantes: titulo, concepto, categoria, explicacion, descripcion, etc.
