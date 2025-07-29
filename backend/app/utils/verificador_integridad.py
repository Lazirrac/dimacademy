#backend\app\utils\verificador_integridad.py
#cript de mantenimiento: Garantizar que todo actor del sistema (docente, estudiante, responsable, establecimiento) tenga un usuario asociado en usuarios_sistema, para poder iniciar sesión.
from app import db
from app.models.usuarios_sistema import UsuarioSistema
from app.models.estudiantes import Estudiante
from app.models.usuarios_docentes import UsuarioDocente
from app.models.responsables_parentales import ResponsableParental
from app.models.establecimientos_educativos import EstablecimientoEducativo

from datetime import datetime
import bcrypt


def generar_hash_contrasena(plain_text_password):
    return bcrypt.hashpw(plain_text_password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

def verificar_y_crear_usuarios():
    errores = []

    # ---- ESTUDIANTES ----
    estudiantes = Estudiante.query.all()
    for est in estudiantes:
        existe = UsuarioSistema.query.filter_by(id_estudiante=est.id_estudiante).first()
        if not existe:
            nuevo = UsuarioSistema(
                email=f'estudiante{est.id_estudiante}@dim.com',
                contrasena_hash=generar_hash_contrasena('dim123'),
                rol='estudiante',
                id_estudiante=est.id_estudiante,
                activo=True,
                fecha_creacion=datetime.now()
            )
            db.session.add(nuevo)
            errores.append(f'Usuario creado para estudiante {est.id_estudiante}')

    # ---- DOCENTES ----
    docentes = UsuarioDocente.query.all()
    for doc in docentes:
        existe = UsuarioSistema.query.filter_by(id_docente=doc.id_docente).first()
        if not existe:
            nuevo = UsuarioSistema(
                email=f'docente{doc.id_docente}@dim.com',
                contrasena_hash=generar_hash_contrasena('dim123'),
                rol='docente',
                id_docente=doc.id_docente,
                activo=True,
                fecha_creacion=datetime.now()
            )
            db.session.add(nuevo)
            errores.append(f'Usuario creado para docente {doc.id_docente}')

    # ---- RESPONSABLES ----
    responsables = ResponsableParental.query.all()
    for resp in responsables:
        existe = UsuarioSistema.query.filter_by(id_responsable=resp.id_responsable).first()
        if not existe:
            nuevo = UsuarioSistema(
                email=f'responsable{resp.id_responsable}@dim.com',
                contrasena_hash=generar_hash_contrasena('dim123'),
                rol='responsable',
                id_responsable=resp.id_responsable,
                activo=True,
                fecha_creacion=datetime.now()
            )
            db.session.add(nuevo)
            errores.append(f'Usuario creado para responsable {resp.id_responsable}')

    # ---- ESTABLECIMIENTOS ----
    establecimientos = EstablecimientoEducativo.query.all()
    for est in establecimientos:
        existe = UsuarioSistema.query.filter_by(id_establecimiento=est.id_establecimiento).first()
        if not existe:
            nuevo = UsuarioSistema(
                email=f'establecimiento{est.id_establecimiento}@dim.com',
                contrasena_hash=generar_hash_contrasena('dim123'),
                rol='establecimiento',
                id_establecimiento=est.id_establecimiento,
                activo=True,
                fecha_creacion=datetime.now()
            )
            db.session.add(nuevo)
            errores.append(f'Usuario creado para establecimiento {est.id_establecimiento}')

    db.session.commit()

    if errores:
        print("\n".join(errores))
    else:
        print("✅ Todos los usuarios están correctamente asociados.")


if __name__ == "__main__":
    from app import create_app
    app = create_app()
    with app.app_context():
        verificar_y_crear_usuarios()
