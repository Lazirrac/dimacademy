#backend\crearbd.py
from app import create_app, db, bcrypt
from app.models import (
    UsuarioSistema,
    EstablecimientoEducativo,
    UsuarioDocente,
    Estudiante,
    ResponsableParental,
    ResponsableEstudiante
)

from datetime import datetime, UTC


app = create_app()

with app.app_context():
    db.drop_all()
    db.create_all()

    # 🏫 Crear un establecimiento educativo
    establecimiento = EstablecimientoEducativo(
        cue="1234567",
        nombre_establecimiento="Escuela DIM Academy",
        nivel_educativo="Primario",
        dependencia="Estatal",
        direccion="Calle Falsa 123",
        localidad="Ciudad",
        provincia="Buenos Aires"
    )
    db.session.add(establecimiento)
    db.session.commit()

    # 👨‍🏫 Crear un docente asociado al establecimiento
    docente = UsuarioDocente(
        dni="30111222",
        nombre="Prof. Ana Gómez",
        email="ana@dim.com",
        telefono="1123456789",
        id_establecimiento=establecimiento.id_establecimiento,
        cargo="Maestra de grado",
        situacion_de_revista="Titular"
    )
    db.session.add(docente)
    db.session.commit()

    # 👨‍👧‍👦 Crear estudiantes asociados al mismo establecimiento y docente
    estudiante1 = Estudiante(
        nombre="Juan Pérez",
        dni="40333444",
        fecha_nacimiento=datetime(2012, 5, 15),
        id_establecimiento=establecimiento.id_establecimiento,
        id_docente=docente.id_docente,
        grado_anio="5º",
        division="A",
        turno="Mañana"
    )

    estudiante2 = Estudiante(
        nombre="Lucía Pérez",
        dni="40333445",
        fecha_nacimiento=datetime(2014, 8, 22),
        id_establecimiento=establecimiento.id_establecimiento,
        id_docente=docente.id_docente,
        grado_anio="3º",
        division="B",
        turno="Tarde"
    )

    db.session.add_all([estudiante1, estudiante2])
    db.session.commit()

    # 👨‍👧 Crear responsable parental vinculado a ambos estudiantes
    responsable = ResponsableParental(
        nombre="María Gómez",
        dni="27222333",
        email="maria@dim.com",
        telefono="1199988877",
        domicilio="Av. Siempre Viva 742"
    )
    db.session.add(responsable)
    db.session.commit()

    # 🔗 Asociar responsable con los estudiantes
    vinculo1 = ResponsableEstudiante(
        id_estudiante=estudiante1.id_estudiante,
        id_responsable=responsable.id_responsable,
        vinculo="Madre"
    )
    vinculo2 = ResponsableEstudiante(
        id_estudiante=estudiante2.id_estudiante,
        id_responsable=responsable.id_responsable,
        vinculo="Madre"
    )
    db.session.add_all([vinculo1, vinculo2])
    db.session.commit()

    # 👤 Crear usuarios del sistema por rol
    usuarios = [
        {"email": "admin@dim.com", "password": "admin123", "rol": "admin"},
        {"email": "sistema@dim.com", "password": "sistema123", "rol": "sistema"},
        {"email": "escuela@dim.com", "password": "escuela123", "rol": "establecimiento", "id_establecimiento": establecimiento.id_establecimiento},
        {"email": "docente@dim.com", "password": "docente123", "rol": "docente", "id_docente": docente.id_docente},
        {"email": "estudiante@dim.com", "password": "estudiante123", "rol": "estudiante", "id_estudiante": estudiante1.id_estudiante},
        {"email": "responsable@dim.com", "password": "responsable123", "rol": "responsable", "id_responsable": responsable.id_responsable}
    ]

    for u in usuarios:
        hashed = bcrypt.generate_password_hash(u["password"]).decode("utf-8")
        nuevo_usuario = UsuarioSistema(
            email=u["email"],
            contrasena_hash=hashed,
            rol=u["rol"],
            fecha_creacion=datetime.now(UTC),
            id_establecimiento=u.get("id_establecimiento"),
            id_docente=u.get("id_docente"),
            id_estudiante=u.get("id_estudiante"),
            id_responsable=u.get("id_responsable")
        )
        db.session.add(nuevo_usuario)

    db.session.commit()
    print("✅ Base de datos DIM Academy creada con datos y relaciones iniciales.")
