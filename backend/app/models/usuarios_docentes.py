from app import db

class UsuarioDocente(db.Model):
    __tablename__ = "usuarios_docentes"

    id_docente = db.Column(db.Integer, primary_key=True)
    dni = db.Column(db.String(20), unique=True, nullable=False)
    nombre = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    telefono = db.Column(db.String(20))

    id_establecimiento = db.Column(db.Integer, db.ForeignKey("establecimientos_educativos.id_establecimiento"))
    cargo = db.Column(db.String(50))
    situacion_de_revista = db.Column(db.String(50))

    estudiantes = db.relationship('Estudiante', backref='docente', lazy=True)
